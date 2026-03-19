import { z } from 'zod'
import { CONFIG_SCHEMA_URL } from './constants'
import { RegistryName, RegistryPrefix } from './registry'

/**
 * Config registry schema, which represents a registry used in the project config.
 */
export const ConfigRegistry = z
  .object({
    /**
     * Repository name/URL.
     *
     * - Github repository URL, e.g. `https://github.com/weme-ui/weme-ui`
     * - Github repository name, e.g. `weme-ui/weme-ui`
     */
    repo: z.string().trim().meta({
      title: 'Repository Name/URL',
      description: 'The name/URL of the repository.',
    }),

    /**
     * Registry name
     *
     * In the format of `repo/registry`, which should match the `name` field in the registry's `registry.json` file.
     *
     * @example 'weme-ui/plus'
     */
    name: RegistryName,

    /**
     * Registry prefix, which will be used as the prefix of the components from this registry.
     *
     * For example, if the prefix is `ui`, then the components from this registry can be used as `<UiButton>`, `<UiInput>`, etc.
     *
     * ```bash
     * <app>/
     *   ├── components/
     *   │   ├── ui/
     *   │   │   ├── button/
     *   |   |     ├── examples/
     *   |   |     ├── test/
     *   |   |     ├── button.vue
     *   |   |     ├── button.props.ts
     *   |   |     ├── button.ui.ts
     *   |   |     ├── README.md
     * ```
     *
     * @example 'ui'
     */
    prefix: RegistryPrefix,

    /**
     * Whether this registry is the default registry,
     * which will be used when the registry is not specified in the component usage.
     */
    default: z.boolean().optional().meta({
      title: 'Default Registry',
      description:
        'Whether this registry is the default registry, which will be used when the registry is not specified in the component usage.',
    }),
  })
  .meta({
    title: 'Config Registry',
    description: 'A registry used in the project config.',
  })

/**
 * Config paths schema, which represents the paths used in the project config.
 */
export const ConfigPaths = z
  .object({
    components: z.string().trim().default('~/components').meta({
      title: 'Components Path',
      description: 'The path of the components directory.',
    }),
    composables: z.string().trim().default('~/composables').optional().meta({
      title: 'Composables Path',
      description: 'The path of the composables directory.',
    }),
    layouts: z.string().trim().default('~/layouts').optional().meta({
      title: 'Layouts Path',
      description: 'The path of the layouts directory.',
    }),
    pages: z.string().trim().default('~/pages').optional().meta({
      title: 'Pages Path',
      description: 'The path of the pages directory.',
    }),
    plugins: z.string().trim().default('~/plugins').optional().meta({
      title: 'Plugins Path',
      description: 'The path of the plugins directory.',
    }),
    themes: z.string().trim().default('~/themes').optional().meta({
      title: 'Themes Path',
      description: 'The path of the themes directory.',
    }),
    types: z.string().trim().default('~/types').optional().meta({
      title: 'Types Path',
      description: 'The path of the types directory.',
    }),
    utils: z.string().trim().default('~/utils').optional().meta({
      title: 'Utils Path',
      description: 'The path of the utils directory.',
    }),
  })
  .meta({
    title: 'Config Paths',
    description: 'The paths used in the project config.',
  })

/**
 * Weme UI project config schema.
 */
export const ConfigSchemaV2 = z
  .object({
    /**
     * Schema URL.
     *
     * @default 'https://weme-ui.github.io/schema/v2/config.schema.json'
     */
    $schema: z
      .url()
      .trim()
      .default(CONFIG_SCHEMA_URL)
      .meta({
        title: 'Config Schema URL',
        description: `The Schema URL, which should be \`${CONFIG_SCHEMA_URL}\``,
      }),

    /**
     * The paths used in the project.
     * `Weme UI CLI` will generate components, composables, layouts, pages, plugins, themes, types and utils in these paths.
     * You can also customize the paths according to your project structure.
     *
     * @default
     * ```json
     * {
     *   "components": "~/components",
     *   "composables": "~/composables",
     *   "layouts": "~/layouts",
     *   "pages": "~/pages",
     *   "plugins": "~/plugins",
     *   "themes": "~/themes",
     *   "types": "~/types",
     *   "utils": "~/utils"
     * }
     * ```
     */
    paths: ConfigPaths,

    /**
     * The registries used in the project.
     * `Weme UI CLI` will search for components in these registries and link them to the project.
     *
     * @default []
     */
    registries: z.array(ConfigRegistry).default([]).meta({
      title: 'Config Registries',
      description: 'The registries used in the project.',
    }),
  })
  .meta({
    $id: CONFIG_SCHEMA_URL,
    title: 'Weme UI Project Config JSON Schema Definitions',
    description:
      'This schema defines the structure of the project config JSON file used in Weme UI.',
  })

export type ConfigSchema = z.infer<typeof ConfigSchemaV2>
