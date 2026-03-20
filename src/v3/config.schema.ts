import { z } from 'zod'
import { CONFIG_SCHEMA_URL, REGISTRY_FILE_NAME } from './constants'
import { RegistryName } from './registry.schema'

const Path = z.string().trim()

/**
 * Weme UI project config schema
 *
 * This schema defines the structure of the project JSON file used in Weme UI
 *
 * @see {@link CONFIG_SCHEMA_URL}
 */
export const ConfigSchema = z
  .object({
    /**
     * Schema URL
     *
     * @default {@link CONFIG_SCHEMA_URL}
     */
    $schema: z
      .url()
      .trim()
      .default(CONFIG_SCHEMA_URL)
      .meta({
        title: 'Project Config Schema URL',
        description: `The Schema URL, which should be \`${CONFIG_SCHEMA_URL}\``,
        examples: [CONFIG_SCHEMA_URL],
      }),

    /**
     * Project paths
     */
    paths: z
      .object({
        components: Path.default('~/components').meta({
          title: 'Components Path',
          description: 'The path of the components directory.',
          examples: ['~/components'],
        }),
        composables: Path.optional().meta({
          title: 'Composables Path',
          description: 'The path of the composables directory.',
          examples: ['~/composables'],
        }),
        layouts: Path.optional().meta({
          title: 'Layouts Path',
          description: 'The path of the layouts directory.',
          examples: ['~/layouts'],
        }),
        plugins: Path.optional().meta({
          title: 'Plugins Path',
          description: 'The path of the plugins directory.',
          examples: ['~/plugins'],
        }),
        themes: Path.optional().meta({
          title: 'Themes Path',
          description: 'The path of the themes directory.',
          examples: ['~/themes'],
        }),
        pages: Path.optional().meta({
          title: 'Pages Path',
          description: 'The path of the pages directory.',
          examples: ['~/pages'],
        }),
        types: Path.optional().meta({
          title: 'Types Path',
          description: 'The path of the types directory.',
          examples: ['~/types'],
        }),
        utils: Path.optional().meta({
          title: 'Utils Path',
          description: 'The path of the utils directory.',
          examples: ['~/utils'],
        }),
      })
      .meta({
        title: 'Project Paths',
        description: 'The paths used in the project.',
      }),

    /**
     * Registries used in the project
     */
    registries: z
      .array(
        z
          .object({
            /**
             * Registry name
             *
             * @example '@weme-ui/weme-ui'
             */
            name: RegistryName,

            /**
             * Registry URL
             *
             * **List of supported registry URLs:**
             *
             * - **Protocol**: `github:weme-ui/weme-ui` or `weme-ui/weme-ui` (using `github` protocol by default)
             * - **URI**: `https://github.com/weme-ui/weme-ui`
             * - **Local**: `local:path/to/registry`
             *
             * @usage `pnpm dlx @weme-ui/weme-ui tap <registry_url>`
             * @example 'weme-ui/weme-ui'
             */
            url: z
              .string()
              .trim()
              .meta({
                title: 'Registry URL',
                description: `The URL of the registry's \`${REGISTRY_FILE_NAME}\` file.`,
                examples: ['weme-ui/weme-ui'],
              }),

            /**
             * Library name
             *
             * @example 'slim'
             */
            library: z
              .string()
              .trim()
              .meta({
                title: 'Library Name',
                description: 'The name of the library.',
                examples: ['slim'],
              }),

            /**
             * Library prefix
             *
             * @default 'ui'
             */
            prefix: z
              .string()
              .trim()
              .default('ui')
              .meta({
                title: 'Library Prefix',
                description: 'The prefix of the library.',
                examples: ['ui'],
              }),

            /**
             * Whether to use this registry as the default one.
             */
            default: z
              .boolean()
              .optional()
              .meta({
                title: 'Default Registry',
                description: 'Whether to use this registry as the default one.',
                examples: [true],
              }),
          })
          .meta({
            title: 'Registry Information',
            description: 'A registry used in the project.',
          }),
      )
      .meta({
        title: 'Project Registries',
        description: 'The registries used in the project.',
      }),

    /**
     * CSS variables, which will be merged into the `uno.config.ts` file.
     *
     * ? **How to merge**
     *
     * 1. `UnoCSS Preset` loaded CSS variables from `.weme/manifest.json` first.
     * 2. And then merge the CSS variables from `weme.config.json` (this file) into `uno.config.ts`.
     *
     * So the CSS variables in `weme.config.json` will override the ones in `.weme/manifest.json`.
     * But all CSS variables still be written into the `:root` selector in your `style.css` file.
     */
    cssVariables: z.record(z.string().trim(), z.string().trim()).optional().meta({
      title: 'CSS Variables',
      description: 'The CSS variables, which will be merged into the `uno.config.ts` file.',
    }),
  })
  .meta({
    $id: CONFIG_SCHEMA_URL,
    title: 'Weme UI Project Config JSON Schema Definitions (v3)',
    description: 'This schema defines the structure of the project JSON file used in Weme UI.',
  })
