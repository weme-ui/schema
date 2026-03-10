import { z } from 'zod'
import { REGISTRY_FILE_NAME, REGISTRY_SCHEMA_URL } from './constants'

/**
 * Registry name
 *
 * @example 'weme-ui/plus'
 */
export const RegistryName = z.templateLiteral([
  z.string().lowercase().trim(),
  z.literal('/'),
  z.string().lowercase().trim(),
]).meta({
  title: 'Registry Name',
  description: 'The name of the registry, in the format of `repo/registry`.',
})

/**
 * Registry prefix
 *
 * @example 'ui'
 */
export const RegistryPrefix = z.string().lowercase().trim().meta({
  title: 'Registry Prefix',
  description: 'The prefix of the components from this registry.',
})

/**
 * Registry item scope
 */
export const RegistryItemScope = z.enum([
  'init',
  'component',
  'layout',
  'theme',
  'page',
  'plugin',
]).meta({
  title: 'Registry Item Scope',
  description: 'The scope of the registry item.',
})

/**
 * Registry item file type
 */
export const RegistryItemFileType = z.enum([
  'component',
  'type',
  'style',
  'locale',
  'composable',
  'utility',
  'file',
]).meta({
  title: 'Registry Item File Type',
  description: 'The type of the registry item file.',
})

/**
 * Registry item file schema, which represents a file in the registry item.
 */
export const RegistryItemFile = z.discriminatedUnion('type', [
  z.object({
    type: z.enum(['file']).meta({
      title: 'Registry Item File Type',
      description: 'The type of the registry item file.',
    }),
    path: z.string().trim().meta({
      title: 'Registry Item File Path',
      description: 'The path of the registry item file.',
    }),
    target: z.string().trim().meta({
      title: 'Registry Item File Target',
      description: 'The target of the registry item file.',
    }),
    hash: z.string().trim().meta({
      title: 'Registry Item File Hash',
      description: 'The hash of the registry item file.',
    }),
  }).meta({
    title: 'Registry Item File',
    description: 'A file in the registry item.',
  }),

  z.object({
    type: RegistryItemFileType.exclude(['file']).meta({
      title: 'Registry Item File Type',
      description: 'The type of the registry item file.',
    }),
    path: z.string().trim().meta({
      title: 'Registry Item File Path',
      description: 'The path of the registry item file.',
    }),
    target: z.string().trim().optional().meta({
      title: 'Registry Item File Target',
      description: 'The target of the registry item file.',
    }),
    hash: z.string().trim().meta({
      title: 'Registry Item File Hash',
      description: 'The hash of the registry item file.',
    }),
  }).meta({
    title: 'Registry Item File',
    description: 'A file in the registry item.',
  }),
]).meta({
  title: 'Registry Item File',
  description: 'A file in the registry item.',
})

/**
 * Registry item schema, which represents an item in the registry.
 */
export const RegistryItem = z.object({
  /**
   * Item name, which should be unique in the registry.
   *
   * @example 'button'
   */
  name: z.string().lowercase().trim().meta({
    title: 'Registry Item Name',
    description: 'The name of the registry item, which should be unique in the registry.',
  }),

  /**
   * Item scope, which represents the type of the item.
   *
   * The scope will be used to determine the usage of the item in the project.
   * For example, if the scope is `component`, then the item will be install as a component.
   *
   * @example 'component'
   */
  scope: RegistryItemScope,

  /**
   * Item dependencies, which are the names of other items that this item depends on.
   */
  dependencies: z.array(z.string().trim()).optional().meta({
    title: 'Registry Item Dependencies',
    description: 'The names of other items that this item depends on.',
  }),

  /**
   * Item development dependencies, which are the names of other items that this item depends on during development.
   */
  devDependencies: z.array(z.string().trim()).optional().meta({
    title: 'Registry Item Development Dependencies',
    description: 'The names of other items that this item depends on during development.',
  }),

  /**
   * Item dependency items, which are the current registry items that this item depends on.
   */
  localDependencies: z.array(z.string().trim()).optional().meta({
    title: 'Registry Item Local Dependencies',
    description: 'The names of other items in the same registry that this item depends on.',
  }),

  /**
   * Item files, which are the files that belong to this item.
   */
  files: z.array(RegistryItemFile).meta({
    title: 'Registry Item Files',
    description: 'The files that belong to this item.',
  }),

  /**
   * Item CSS variables.
   */
  cssVariables: z.record(
    z.string().trim(),
    z.record(
      z.string().trim(),
      z.string().trim(),
    ).or(z.string().trim()),
  ).optional().meta({
    title: 'Registry Item CSS Variables',
    description: 'The CSS variables of the registry item.',
  }),
})

/**
 * Weme UI registry schema.
 */
export const RegistrySchemaV2 = z.object({
  /**
   * Schema URL.
   *
   * @default 'https://weme-ui.github.io/schema/v2/registry.schema.json'
   */
  $schema: z.url().lowercase().trim().default(REGISTRY_SCHEMA_URL).meta({
    title: 'Registry Schema URL',
    description: `The Schema URL, which should be \`${REGISTRY_SCHEMA_URL}\``,
  }),

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

  /**
   *  Registry items, which are the items in this registry.
   */
  items: z.array(RegistryItem).meta({
    title: 'Registry Items',
    description: 'The items in this registry.',
  }),
}).meta({
  $id: REGISTRY_SCHEMA_URL,
  title: 'Weme UI Registry JSON Schema Definitions',
  description: 'This schema defines the structure of the registry JSON file used in Weme UI.',
})

export type RegistrySchema = z.infer<typeof RegistrySchemaV2>
