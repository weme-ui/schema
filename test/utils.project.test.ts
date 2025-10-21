import { join } from 'pathe'
import { describe, expect, it } from 'vitest'
import { ProjectConfig } from '../src/utils'

describe('project config', async () => {
  const project = new ProjectConfig(join(__dirname, 'fixtures/base'))

  it('should get project info', () => {
    expect(project.info).toMatchInlineSnapshot(`
      {
        "description": "The test project for Weme UI.",
        "name": "test",
        "repos": [
          {
            "default": true,
            "installed": 1,
            "name": "weme-ui/full",
            "prefix": "ui",
          },
        ],
        "unocss": {
          "accentColors": 1,
          "cssVars": 2,
          "neutralColors": 1,
          "variablePrefix": "ui",
        },
        "version": "1.0.0",
      }
    `)
  })

  it('should get project output', () => {
    expect(project.output).toMatchInlineSnapshot(`
      {
        "$schema": "https://weme-ui.github.io/schema/project.json",
        "paths": {
          "components": "/Users/xinxuan/workspace/private/@weme-ui/schema/test/fixtures/base/app/components",
          "composables": "/Users/xinxuan/workspace/private/@weme-ui/schema/test/fixtures/base/app/composables",
          "layouts": "/Users/xinxuan/workspace/private/@weme-ui/schema/test/fixtures/base/app/layouts",
          "pages": "/Users/xinxuan/workspace/private/@weme-ui/schema/test/fixtures/base/app/pages",
          "plugins": "/Users/xinxuan/workspace/private/@weme-ui/schema/test/fixtures/base/app/plugins",
          "themes": "/Users/xinxuan/workspace/private/@weme-ui/schema/test/fixtures/base/app/themes",
          "types": "/Users/xinxuan/workspace/private/@weme-ui/schema/test/fixtures/base/app/types",
          "utils": "/Users/xinxuan/workspace/private/@weme-ui/schema/test/fixtures/base/app/utils",
        },
        "repos": [
          {
            "default": true,
            "directory": "test/fixtures/registry/full",
            "prefix": "ui",
            "registry": "weme-ui/full",
            "repo": "@weme-ui/weme-ui",
          },
        ],
        "unocss": {
          "accentColors": {
            "ocean": "blue",
          },
          "cssVars": {
            "card-bg": "color.neutral.1",
            "card-fg": "color.neutral.11",
          },
          "neutralColors": {
            "gunmetal": "gray",
          },
          "variablePrefix": "ui",
        },
      }
    `)
  })
})
