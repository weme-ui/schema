import { describe, expect, it } from 'vitest'
import { registrySchema } from '../src/schema/registry'

describe('registry schema', () => {
  it('should pass with empty object', () => {
    expect(registrySchema.parse({ name: 'name', items: [] })).toEqual({ name: 'name', items: [], access: 'public' })
  })

  it('should pass with fixtures', async () => {
    const registryJson = await import('./__fixtures/registry.json').then(m => m.default)

    expect(registryJson).toMatchInlineSnapshot(`
      {
        "$schema": "../../registry.json",
        "access": "public",
        "cssVars": {
          "color": "color",
        },
        "dependencies": [
          "dependencies",
        ],
        "description": "description",
        "devDependencies": [
          "devDependencies",
        ],
        "directory": "directory",
        "items": [
          {
            "author": "author",
            "dependencies": [
              "dependencies",
            ],
            "description": "description",
            "devDependencies": [
              "devDependencies",
            ],
            "files": [
              {
                "path": "path",
                "type": "component",
              },
              {
                "path": "path",
                "type": "composable",
              },
              {
                "path": "path",
                "target": "target",
                "type": "file",
              },
            ],
            "name": "icon",
            "registryDependencies": [
              "registryDependencies",
            ],
            "title": "Icon",
            "type": "component",
          },
        ],
        "meta": {
          "authors": [
            "authors",
          ],
          "bugs": "https://github.com/weme-ui/weme-ui/issues",
          "homepage": "https://github.com/weme-ui/weme-ui",
          "repository": "https://github.com/weme-ui/weme-ui",
          "tags": [
            "tags",
          ],
        },
        "name": "name",
        "prefix": "prefix",
        "version": "version",
      }
    `)
    const { $schema, ...schema } = registryJson

    expect(registrySchema.parse(schema)).toMatchInlineSnapshot(`
      {
        "access": "public",
        "dependencies": [
          "dependencies",
        ],
        "description": "description",
        "devDependencies": [
          "devDependencies",
        ],
        "directory": "directory",
        "items": [
          {
            "author": "author",
            "dependencies": [
              "dependencies",
            ],
            "description": "description",
            "devDependencies": [
              "devDependencies",
            ],
            "files": [
              {
                "path": "path",
                "type": "component",
              },
              {
                "path": "path",
                "type": "composable",
              },
              {
                "path": "path",
                "target": "target",
                "type": "file",
              },
            ],
            "name": "icon",
            "registryDependencies": [
              "registryDependencies",
            ],
            "title": "Icon",
            "type": "component",
          },
        ],
        "meta": {
          "authors": [
            "authors",
          ],
          "bugs": "https://github.com/weme-ui/weme-ui/issues",
          "homepage": "https://github.com/weme-ui/weme-ui",
          "repository": "https://github.com/weme-ui/weme-ui",
          "tags": [
            "tags",
          ],
        },
        "name": "name",
        "prefix": "prefix",
        "version": "version",
      }
    `)
  })
})
