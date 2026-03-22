import { z } from 'zod'
import { CONFIG_SCHEMA_URL } from '../constants'
import { SafeString, SafeUrl } from '../shared'
import { ConfigRegistry } from './registry'
import { ConfigPaths } from './paths'

/**
 * Weme UI project config schema
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
    $schema: SafeUrl.default(CONFIG_SCHEMA_URL).meta({
      title: 'Project Config Schema URL',
      description: `The Schema URL, which should be \`${CONFIG_SCHEMA_URL}\``,
      examples: [CONFIG_SCHEMA_URL],
    }),

    /**
     * Project paths
     *
     * `~` means the root of the project.
     */
    paths: ConfigPaths,

    /**
     * Registries used in the project
     */
    registries: z.array(ConfigRegistry).optional().meta({
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
    cssVariables: z.record(SafeString, SafeString).optional().meta({
      title: 'CSS Variables',
      description: 'The CSS variables, which will be merged into the `uno.config.ts` file.',
    }),
  })
  .meta({
    $id: CONFIG_SCHEMA_URL,
    title: 'Weme UI Project Config JSON Schema Definitions (v3)',
    description: 'This schema defines the structure of the project JSON file used in Weme UI.',
  })
