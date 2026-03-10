import { z } from 'zod'
import { REGISTRY_FILE_NAME, REPOSITORY_SCHEMA_URL } from './constants'
import { RegistryName, RegistryPrefix } from './registry'

export const RepositorySchemaV2 = z.object({
  /**
   * Schema URL.
   *
   * @default 'https://weme-ui.github.io/schema/v2/repository.schema.json'
   */
  $schema: z.url().trim().default(REPOSITORY_SCHEMA_URL).meta({
    title: 'Repository Schema URL',
    description: `The Schema URL, which should be \`${REPOSITORY_SCHEMA_URL}\``,
  }),

  /**
   * Repository name
   *
   * @example `weme-ui`
   */
  repo: z.string().lowercase().trim().meta({
    title: 'Repository Name',
    description: 'The name of the repository.',
  }),

  /**
   * Repository owner
   *
   * @example `weme-ui`
   */
  owner: z.string().lowercase().trim().meta({
    title: 'Repository Owner',
    description: 'The owner of the repository.',
  }),

  /**
   * Repository version
   *
   * @example '1.0.0'
   */
  version: z.string().trim().meta({
    title: 'Repository Version',
    description: 'The version of the repository.',
  }),

  /**
   * Registries in this repository.
   */
  registries: z.array(z.object({
    /**
     * Registry name, in the format of `repo/registry`.
     */
    name: RegistryName,

    /**
     * Registry URL, which should point to the registry's `registry.json` file.
     *
     * @example 'https://raw.githubusercontent.com/weme-ui/weme-ui/refs/heads/main/registry/std'
     */
    url: z.url().lowercase().trim().meta({
      title: 'Registry URL',
      description: `The URL of the registry, which should point to the registry's \`${REGISTRY_FILE_NAME}\` file.`,
    }),

    /**
     * Registry description.
     */
    description: z.string().trim().optional().meta({
      title: 'Registry Description',
      description: 'The description of the registry.',
    }),

    /**
     * Registry prefix, which will be used as the prefix of the components from this registry.
     */
    prefix: RegistryPrefix,
  })),
}).meta({
  $id: REPOSITORY_SCHEMA_URL,
  title: 'Weme UI Repository JSON Schema Definitions',
  description: 'This schema defines the structure of the repository JSON file used in Weme UI.',
})

export type RepositorySchema = z.infer<typeof RepositorySchemaV2>
