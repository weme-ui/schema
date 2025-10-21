import type { PackageJson } from 'pkg-types'
import type { ProjectSchema } from '../schema'
import { existsSync, readFileSync } from 'node:fs'
import fg from 'fast-glob'
import { join, resolve } from 'pathe'
import { resolveAlias } from 'pathe/utils'
import { DEFAULT_REGISTRY_PREFIX, PROJECT_CONFIG_NAME, PROJECT_SCHEMA_URL } from '../constants'
import { projectSchema } from '../schema'

export interface ProjectInfo {
  name?: string
  description?: string
  version?: string
  repos: {
    name: string
    prefix: string
    default: boolean
    installed: number
  }[]
  unocss?: {
    variablePrefix: string
    accentColors: number
    neutralColors: number
    cssVars: number
  }
}

export class ProjectConfig {
  private cwd: string
  private schema: ProjectSchema

  constructor(cwd: string) {
    this.cwd = cwd

    const schema = this.readJson<ProjectSchema>(PROJECT_CONFIG_NAME)

    if (schema) {
      if (Object.keys(schema).includes('$schema')) {
        delete (schema as any).$schema
      }

      const tsConfig = this.readJson('.nuxt/tsconfig.json')

      if (tsConfig?.compilerOptions?.paths) {
        const tsPaths = Object.entries(tsConfig.compilerOptions.paths)
          .reduce((acc, [key, value]) => {
            acc[key] = (value as string[])[0]
            return acc
          }, {} as Record<string, string>)

        if (schema?.paths) {
          const paths = schema?.paths as Record<string, string>

          Object.keys(paths).forEach((name) => {
            paths[name] = resolveAlias(
              paths[name],
              tsPaths,
            ).replace('..', this.cwd)
          })
        }
      }
    }

    const result = projectSchema.safeParse(schema)

    if (!result.success) {
      throw new Error(result.error.message)
    }

    this.schema = result.data
  }

  get info(): ProjectInfo {
    const packageJson = this.readJson<PackageJson>('package.json')

    return {
      name: packageJson?.name,
      description: packageJson?.description,
      version: packageJson?.version,
      repos: this.schema.repos.map((repo) => {
        const files = fg.sync(['**/*.vue'], {
          cwd: join(this.schema.paths.components, repo.prefix || DEFAULT_REGISTRY_PREFIX),
          onlyFiles: true,
          absolute: false,
        })

        return {
          name: repo.registry,
          prefix: repo.prefix || DEFAULT_REGISTRY_PREFIX,
          default: !!repo.default,
          installed: files.length,
        }
      }),
      unocss: {
        variablePrefix: this.schema.unocss?.variablePrefix || DEFAULT_REGISTRY_PREFIX,
        accentColors: Object.keys(this.schema.unocss?.accentColors || {}).length,
        neutralColors: Object.keys(this.schema.unocss?.neutralColors || {}).length,
        cssVars: Object.keys(this.schema.unocss?.cssVars || {}).length,
      },
    }
  }

  get output(): ProjectSchema {
    return {
      $schema: PROJECT_SCHEMA_URL,
      ...this.schema,
    } as ProjectSchema
  }

  readJson<T = any>(path: string) {
    const filePath = resolve(this.cwd, path)

    if (!existsSync(filePath)) {
      throw new Error(`File ${filePath} not found`)
    }

    const content = readFileSync(filePath, 'utf-8')

    if (content) {
      try {
        const json = JSON.parse(content)

        if (!json)
          throw new Error(`File ${filePath} is empty`)

        return json as T
      }
      catch (e) {
        throw new Error(`File ${filePath} is not a valid JSON : ${e}`)
      }
    }
  }

  exists() {
    return existsSync(resolve(this.cwd, PROJECT_CONFIG_NAME))
  }
}
