import { describe, expect, it } from 'vitest'
import { RegistryConfig } from '../src/utils'

describe('registry config', async () => {
  const registry = new RegistryConfig('./test/fixtures/registry/full')

  it('should get registry info', async () => {
    expect(registry.info).toMatchInlineSnapshot(`
      {
        "access": "public",
        "blocks": 0,
        "components": 3,
        "dependencies": 3,
        "description": "The basic test registry for Weme UI.",
        "devDependencies": 9,
        "directory": "test/fixtures/registry/full",
        "layouts": 0,
        "meta": {
          "authors": [
            "Allen Luo",
          ],
          "bugs": "https://github.com/weme-ui/schema/issues",
          "homepage": "https://weme-ui.github.io/schema",
          "repository": "https://github.com/weme-ui/schema",
          "tags": [
            "weme-ui",
            "schema",
          ],
        },
        "name": "weme-ui/full",
        "pages": 0,
        "prefix": "ui",
        "themes": 0,
        "version": "1.0.0",
      }
    `)
  })

  it('should get registry schema', async () => {
    registry.addItem('component', 'test', [
      'components/test/test.vue',
      'components/test/test.props.ts',
      'components/test/test.style.ts',
    ])

    registry.addItemFiles('test', [
      'components/test/test-1.vue',
      'components/test/test-2.props.ts',
      'components/test/test-2.style.ts',
    ])

    expect(registry.output).toMatchInlineSnapshot(`
      {
        "$schema": "https://weme-ui.github.io/schema/registry.json",
        "access": "public",
        "description": "The basic test registry for Weme UI.",
        "directory": "test/fixtures/registry/full",
        "items": [
          {
            "dependencies": [
              "clsx",
              "tailwind-merge",
              "tailwind-variants",
            ],
            "description": "Init dependencies and utils for Weme UI.",
            "devDependencies": [
              "@nuxt/icon",
              "@internationalized/date",
              "@unocss/nuxt",
              "@vueuse/core",
              "@weme-ui/nuxt",
              "@weme-ui/unocss-preset",
              "reka-ui",
              "unocss",
              "vue",
            ],
            "files": [
              {
                "path": "utils/styles.ts",
                "type": "util",
              },
              {
                "path": "utils/props.ts",
                "type": "util",
              },
              {
                "path": "utils/slots.ts",
                "type": "util",
              },
            ],
            "name": "#init",
            "title": "Init",
            "type": "init",
          },
          {
            "description": "A component to display any icon from Iconify.",
            "files": [
              {
                "path": "components/icon/icon.vue",
                "type": "component",
              },
              {
                "path": "components/icon/icon.props.ts",
                "type": "type",
              },
              {
                "path": "components/icon/icon-box.vue",
                "type": "component",
              },
              {
                "path": "components/icon/icon-box.props.ts",
                "type": "type",
              },
              {
                "path": "components/icon/icon-box.style.ts",
                "type": "style",
              },
            ],
            "name": "icon",
            "title": "Icon",
            "type": "component",
          },
          {
            "description": "Displays a button or a component that looks like a button.",
            "files": [
              {
                "path": "components/button/button.vue",
                "type": "component",
              },
              {
                "path": "components/button/button.props.ts",
                "type": "type",
              },
              {
                "path": "components/button/button.style.ts",
                "type": "style",
              },
            ],
            "name": "button",
            "registryDependencies": [
              "icon",
            ],
            "title": "Button",
            "type": "component",
          },
          {
            "cssVars": {
              "card": {
                "bg": "color.neutral.1",
                "fg": "color.neutral.11",
              },
            },
            "description": "Displays a card with header, content, and footer.",
            "files": [
              {
                "path": "components/card/card.vue",
                "type": "component",
              },
              {
                "path": "components/card/card.props.ts",
                "type": "type",
              },
              {
                "path": "components/card/card.style.ts",
                "type": "style",
              },
            ],
            "name": "card",
            "registryDependencies": [
              "icon",
            ],
            "title": "Card",
            "type": "component",
          },
          {
            "description": "The test component.",
            "files": [
              {
                "path": "components/test/test.vue",
                "type": "component",
              },
              {
                "path": "components/test/test.props.ts",
                "type": "type",
              },
              {
                "path": "components/test/test.style.ts",
                "type": "style",
              },
              {
                "path": "components/test/test-1.vue",
                "type": "component",
              },
              {
                "path": "components/test/test-2.props.ts",
                "type": "type",
              },
              {
                "path": "components/test/test-2.style.ts",
                "type": "style",
              },
            ],
            "name": "test",
            "title": "Test",
            "type": "component",
          },
        ],
        "meta": {
          "authors": [
            "Allen Luo",
          ],
          "bugs": "https://github.com/weme-ui/schema/issues",
          "homepage": "https://weme-ui.github.io/schema",
          "repository": "https://github.com/weme-ui/schema",
          "tags": [
            "weme-ui",
            "schema",
          ],
        },
        "name": "weme-ui/full",
        "prefix": "ui",
        "version": "1.0.0",
      }
    `)
  })

  it('should get registry item', async () => {
    expect(registry.getItem('card')).toMatchInlineSnapshot(`
      [
        {
          "cssVars": {
            "card": {
              "bg": "color.neutral.1",
              "fg": "color.neutral.11",
            },
          },
          "dependencies": [],
          "devDependencies": [],
          "files": [
            {
              "path": "components/card/card.vue",
              "type": "component",
            },
            {
              "path": "components/card/card.props.ts",
              "type": "type",
            },
            {
              "path": "components/card/card.style.ts",
              "type": "style",
            },
          ],
          "name": "card",
          "type": "component",
        },
        {
          "cssVars": undefined,
          "dependencies": [],
          "devDependencies": [],
          "files": [
            {
              "path": "components/icon/icon.vue",
              "type": "component",
            },
            {
              "path": "components/icon/icon.props.ts",
              "type": "type",
            },
            {
              "path": "components/icon/icon-box.vue",
              "type": "component",
            },
            {
              "path": "components/icon/icon-box.props.ts",
              "type": "type",
            },
            {
              "path": "components/icon/icon-box.style.ts",
              "type": "style",
            },
          ],
          "name": "icon",
          "type": "component",
        },
      ]
    `)
  })

  it('should get registry init', async () => {
    expect(registry.init).toMatchInlineSnapshot(`
      {
        "dependencies": [
          "clsx",
          "tailwind-merge",
          "tailwind-variants",
        ],
        "devDependencies": [
          "@nuxt/icon",
          "@internationalized/date",
          "@unocss/nuxt",
          "@vueuse/core",
          "@weme-ui/nuxt",
          "@weme-ui/unocss-preset",
          "reka-ui",
          "unocss",
          "vue",
        ],
        "files": [
          {
            "path": "utils/styles.ts",
            "type": "util",
          },
          {
            "path": "utils/props.ts",
            "type": "util",
          },
          {
            "path": "utils/slots.ts",
            "type": "util",
          },
        ],
      }
    `)
  })

  it('should check item exists', async () => {
    expect(registry.existsItem('card')).toBe(true)
    expect(registry.existsItem('not-exists')).toBe(false)
  })

  it('should check item file exists', async () => {
    expect(registry.existsItemFile('card', 'components/card/card.vue')).toBe(true)
    expect(registry.existsItemFile('card', 'not-exists')).toBe(false)
  })
})
