import { describe, expect, it } from 'vitest'
import { projectSchema } from '../src/schema/project'

describe('project schema', () => {
  it('should pass with empty object', () => {
    expect(projectSchema.parse({})).toEqual({ provider: 'github' })
  })

  it('should pass with provider', () => {
    expect(projectSchema.parse({ provider: 'path/to/local' })).toEqual({ provider: 'path/to/local' })
  })

  it('should pass with repos', () => {
    expect(projectSchema.parse({
      repos: [{ repo: 'repo ', registry: 'registry ' }],
    })).toEqual({
      provider: 'github',
      repos: [{ prefix: 'ui', repo: 'repo', registry: 'registry' }],
    })
  })

  it('should pass with paths', () => {
    expect(projectSchema.parse({
      paths: { components: 'components' },
    })).toEqual({
      provider: 'github',
      paths: { components: 'components', composables: '~/composables', layouts: '~/layouts', pages: '~/pages', plugins: '~/plugins', themes: '~/themes', types: '~/types', utils: '~/utils' },
    })
  })

  it('should pass with unocss', () => {
    expect(projectSchema.parse({
      unocss: { prefix: 'prefix' },
    })).toEqual({
      provider: 'github',
      unocss: { prefix: 'prefix', reset: true },
    })
  })

  it('should pass with fixtures', async () => {
    const projectJson = await import('./__fixtures/project.json').then(m => m.default)

    expect(projectJson).toMatchInlineSnapshot(`
      {
        "$schema": "../../project.json",
        "paths": {
          "components": "components",
        },
        "provider": "bitbucket",
        "repos": [
          {
            "registry": "registry",
            "repo": "repo",
          },
        ],
        "unocss": {
          "prefix": "prefix",
        },
      }
    `)

    const { $schema, ...schema } = projectJson

    expect(projectSchema.parse(schema)).toMatchInlineSnapshot(`
      {
        "paths": {
          "components": "components",
          "composables": "~/composables",
          "layouts": "~/layouts",
          "pages": "~/pages",
          "plugins": "~/plugins",
          "themes": "~/themes",
          "types": "~/types",
          "utils": "~/utils",
        },
        "provider": "bitbucket",
        "repos": [
          {
            "prefix": "ui",
            "registry": "registry",
            "repo": "repo",
          },
        ],
        "unocss": {
          "prefix": "prefix",
          "reset": true,
        },
      }
    `)
  })
})
