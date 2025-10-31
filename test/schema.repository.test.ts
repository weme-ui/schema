import { describe, expect, it } from 'vitest'
import { repositorySchema } from '../src/schema'

describe('repository schema', () => {
  it('should validate', () => {
    const result = repositorySchema.safeParse({
      name: 'weme-ui/std',
      directory: 'weme-ui/std',
      items: {
        components: 1,
        layouts: 0,
        themes: 0,
        blocks: 0,
        pages: 0,
      },
    })

    expect(result.success).toBe(true)
    expect(result.data).toMatchInlineSnapshot(`
      {
        "access": "public",
        "directory": "weme-ui/std",
        "items": {
          "blocks": 0,
          "components": 1,
          "layouts": 0,
          "pages": 0,
          "themes": 0,
        },
        "name": "weme-ui/std",
        "prefix": "ui",
      }
    `)
  })

  it('should validate basic', async () => {
    const json = await import('./fixtures/repository/base.json').then(r => r.default)

    const result = repositorySchema.array().safeParse(json)

    expect(result.success).toBe(true)
    expect(result.data).toMatchInlineSnapshot(`
      [
        {
          "access": "public",
          "description": "The basic test registry for Weme UI.",
          "directory": "test/fixtures/registry/basic",
          "items": {
            "blocks": 0,
            "components": 1,
            "layouts": 0,
            "pages": 0,
            "themes": 0,
          },
          "name": "weme-ui/basic",
          "prefix": "ui",
          "version": "1.0.0",
        },
      ]
    `)
  })
})
