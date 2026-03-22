import { z } from 'zod'
import { RegistryName } from '../registry/schema'
import { SafeString } from '../shared'

export const ConfigRegistry = z
  .object({
    /**
     * Registry name
     *
     * @example 'weme-ui/weme-ui'
     */
    name: RegistryName,

    /**
     * Registry URL
     *
     * **List of supported registry URLs:**
     *
     * - **Protocol**: `github:weme-ui/weme-ui` or `@weme-ui/weme-ui` (using `github` protocol by default)
     * - **URI**: `https://github.com/weme-ui/weme-ui`
     * - **Local**: `local:path/to/registry`
     *
     * @usage `pnpm dlx @weme-ui/weme-ui tap <registry_url>`
     * @example '@weme-ui/weme-ui'
     */
    url: SafeString.meta({
      title: 'Registry URL',
      description: `The URL of the registry.`,
      examples: ['@weme-ui/weme-ui'],
    }),

    /**
     * Library name
     *
     * @example 'slim'
     */
    library: SafeString.meta({
      title: 'Library Name',
      description: 'The name of the library.',
      examples: ['slim'],
    }),

    /**
     * Library prefix
     *
     * @default 'ui'
     */
    prefix: SafeString.default('ui').meta({
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
    title: 'Project Registry',
    description: 'A registry used in the project.',
  })
