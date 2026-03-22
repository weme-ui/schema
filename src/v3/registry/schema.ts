import { z } from 'zod'
import { REGISTRY_SCHEMA_URL } from '../constants'
import { OptionalString, SafeString, SafeUrl } from '../shared'
import { RegistryLibrary } from './library'

/**
 * Registry name
 *
 * @example 'weme-ui/weme-ui'
 */
export const RegistryName = z.templateLiteral([SafeString, z.literal('/'), SafeString]).meta({
  title: 'Registry Name',
  description: 'The name of the registry, in the format of `owner/repo`.',
  examples: ['weme-ui/weme-ui'],
})

/**
 * Weme UI registry schema
 *
 * This schema defines the structure of the registry JSON file used in Weme UI
 *
 * @see {@link REGISTRY_SCHEMA_URL}
 */
export const RegistrySchema = z
  .object({
    /**
     * Schema URL
     *
     * @default {@link REGISTRY_SCHEMA_URL}
     */
    $schema: SafeUrl.default(REGISTRY_SCHEMA_URL).meta({
      title: 'Registry Schema URL',
      description: `The Schema URL, which should be \`${REGISTRY_SCHEMA_URL}\``,
      examples: [REGISTRY_SCHEMA_URL],
    }),

    /**
     * Registry name, in the format of `owner/repo`
     *
     * @example 'weme-ui/weme-ui'
     */
    name: RegistryName,

    /**
     * Author of the registry
     *
     * @example 'Username <email@example.com>'
     */
    author: OptionalString.meta({
      title: 'Registry Author',
      description: 'The author of the registry.',
      examples: ['Username <email@example.com>'],
    }),

    /**
     * Version of the registry
     *
     * Update by run `pnpm dlx @weme-ui/weme-ui build` command
     *
     * @default '1.0.0'
     */
    version: SafeString.default('1.0.0').meta({
      title: 'Registry Version',
      description: 'The version of the registry.',
      examples: ['1.0.0'],
    }),

    /**
     * Libraries in the registry
     */
    libraries: z.array(RegistryLibrary).meta({
      title: 'Registry Libraries',
      description: 'The libraries in the registry.',
    }),

    /**
     * SHA1 hash of the registry
     *
     * Update by run `pnpm dlx @weme-ui/weme-ui build` command
     */
    hash: OptionalString.meta({
      title: 'Registry Hash',
      description: 'The SHA1 hash of the registry, DO NOT edit this manually.',
    }),

    /**
     * Last updated of the registry
     *
     * Update by run `pnpm dlx @weme-ui/weme-ui build` command
     */
    lastUpdated: OptionalString.meta({
      title: 'Last Updated',
      description: 'The last updated of the registry, DO NOT edit this manually.',
    }),
  })
  .meta({
    $id: REGISTRY_SCHEMA_URL,
    title: 'Weme UI Registry JSON Schema Definitions (v3)',
    description: 'This schema defines the structure of the registry JSON file used in Weme UI.',
  })
