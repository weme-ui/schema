import type { RegistryItem, RegistryItemFile, RegistryItemType, RegistrySchema } from '../schema'
import { REGISTRY_CONFIG_NAME, REGISTRY_SCHEMA_URL } from '../constants'
import { registrySchema } from '../schema'
import { readFile } from './shared'

export interface RegistryInfo {
  name: RegistrySchema['name']
  description: RegistrySchema['description']
  version: RegistrySchema['version']
  prefix: RegistrySchema['prefix']
  directory: RegistrySchema['directory']
  access: RegistrySchema['access']
  meta: RegistrySchema['meta']
  dependencies: number
  devDependencies: number
  components: number
  layouts: number
  themes: number
  blocks: number
  pages: number
}

export interface RegistryInit {
  dependencies: string[]
  devDependencies: string[]
  files: RegistryItemFile[]
}

export interface RegistryInstallItem extends RegistryInit {
  name: RegistryItem['name']
  type: RegistryItem['type']
  cssVars: RegistryItem['cssVars']
}

export class RegistryConfig {
  private cwd: string = ''
  private schema?: RegistrySchema

  constructor(cwd: string = '') {
    if (cwd !== '')
      this.load(cwd)
  }

  get init(): RegistryInit {
    const items = this.schema?.items.filter(item => item.type === 'init') || []

    return items.reduce((acc, item) => {
      acc.dependencies.push(...(new Set(item.dependencies || [])))
      acc.devDependencies.push(...(new Set(item.devDependencies || [])))
      acc.files.push(...item.files)
      return acc
    }, {
      dependencies: [] as string[],
      devDependencies: [] as string[],
      files: [] as RegistryItemFile[],
    })
  }

  get info(): RegistryInfo {
    return {
      name: this.schema?.name || '',
      description: this.schema?.description,
      version: this.schema?.version,
      prefix: this.schema?.prefix,
      directory: this.schema?.directory,
      access: this.schema?.access,
      meta: this.schema?.meta,
      dependencies: this.schema?.items.reduce((sum, item) => sum + (item.dependencies?.length || 0), 0) || 0,
      devDependencies: this.schema?.items.reduce((sum, item) => sum + (item.devDependencies?.length || 0), 0) || 0,
      components: this.schema?.items.filter(item => item.type === 'component').length || 0,
      layouts: this.schema?.items.filter(item => item.type === 'layout').length || 0,
      themes: this.schema?.items.filter(item => item.type === 'theme').length || 0,
      blocks: this.schema?.items.filter(item => item.type === 'block').length || 0,
      pages: this.schema?.items.filter(item => item.type === 'page').length || 0,
    }
  }

  get output(): RegistrySchema {
    return {
      $schema: REGISTRY_SCHEMA_URL,
      ...this.schema,
    } as RegistrySchema
  }

  load(cwd: string) {
    this.cwd = cwd

    const schema = readFile<RegistrySchema>(REGISTRY_CONFIG_NAME, this.cwd)

    if (schema) {
      if (Object.keys(schema).includes('$schema')) {
        delete (schema as any).$schema
      }
    }

    const result = registrySchema.safeParse(schema)

    if (!result.success) {
      throw new Error(result.error.message)
    }

    this.schema = result.data
  }

  existsItem(itemName: string) {
    return !!this.schema?.items.some(item => item.name === itemName)
  }

  existsItemFile(itemName: string, filePath: string) {
    return !!this.schema?.items.some(item => item.name === itemName && item.files.some(file => file.path === filePath))
  }

  addItem(type: RegistryItemType, itemName: string, files: string[] = []) {
    this.schema?.items.push({
      name: itemName,
      type,
      title: itemName,
      description: `The ${itemName} component.`,
      files: [],
    })

    if (files.length) {
      this.addItemFiles(itemName, files)
    }
  }

  addItemFiles(itemName: string, itemFiles: string[]) {
    const item = this.schema?.items.find(item => item.name === itemName)

    if (!item) {
      throw new Error(`Item ${itemName} not found`)
    }

    function getFileType(file: string) {
      if (file.endsWith('.vue'))
        return 'component'

      if (file.endsWith('.props.ts'))
        return 'type'

      return 'style'
    }

    if (item) {
      itemFiles.forEach((file) => {
        if (item.files.find(f => f.path === file) === undefined) {
          item.files.push({
            type: getFileType(file),
            path: file,
          })
        }
      })
    }
  }

  getItem(itemName: string): RegistryInstallItem[] {
    const item = this.schema?.items.find(item => item.name === itemName)

    if (!item) {
      throw new Error(`Item ${itemName} not found`)
    }

    const installItems: RegistryInstallItem[] = [
      {
        name: item.name,
        type: item.type,
        cssVars: item.cssVars,
        dependencies: item.dependencies || [],
        devDependencies: item.devDependencies || [],
        files: item.files || [],
      },
    ]

    if (item.registryDependencies) {
      item.registryDependencies.forEach((dep) => {
        installItems.push(...this.getItem(dep))
      })
    }

    return installItems
  }
}
