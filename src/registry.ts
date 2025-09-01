import { z } from 'zod'
import { cssVars } from './utilities'

export const registryAccess = z.enum(['public', 'private'])
export const registryItemType = z.enum(['component', 'layout', 'theme', 'block', 'page'])
export const registryItemFileType = z.enum(['component', 'composable', 'plugin', 'util', 'style', 'type', 'file'])

/**
 * Registry Item File
 */
export const registryItemFile = z.discriminatedUnion('type', [
  z.object({
    type: z.enum(['file']),
    path: z.string().trim(),
    content: z.string().trim().optional(),
    target: z.string().trim(),
  }),
  z.object({
    type: registryItemFileType.exclude(['file']),
    path: z.string().trim(),
    content: z.string().trim().optional(),
    target: z.string().trim().optional(),
  }),
])

/**
 * Registry Item
 */
export const registryItem = z.object({
  /**
   * Name of the item.
   */
  name: z.string().trim(),
  /**
   * Type of the item.
   *
   * - component
   * - layout
   * - theme
   * - block
   * - page
   */
  type: registryItemType,
  /**
   * Files of the item.
   */
  files: z.array(registryItemFile),
  /**
   * Title of the item.
   */
  title: z.string().trim().optional(),
  /**
   * Description of the item.
   */
  description: z.string().trim().optional(),
  /**
   * Author of the item.
   */
  author: z.string().trim().optional(),
  /**
   * Categories of the item.
   */
  categories: z.array(z.string().trim()).optional(),
  /**
   * Dependencies of the item.
   */
  dependencies: z.array(z.string().trim()).optional(),
  /**
   * Dev dependencies of the item.
   */
  devDependencies: z.array(z.string().trim()).optional(),
  /**
   * Registry dependencies of the item.
   */
  registryDependencies: z.array(z.string().trim()).optional(),
  /**
   * CSS variables of the item.
   */
  cssVars: cssVars.optional(),
  /**
   * Metadata of the item.
   */
  meta: z.record(z.string(), z.string()).optional(),
  /**
   * Docs of the item.
   */
  docs: z.url().trim().optional(),
})

/**
 * Registry Config Schema
 *
 * @see {@link https://weme-ui.github.io/schema/registry.json}
 */
export const registrySchema = z.object({
  /**
   * Name of the registry.
   */
  name: z.string().trim(),

  /**
   * Items in the registry.
   */
  items: z.array(registryItem),

  /**
   * Description of the registry.
   */
  description: z.string().trim().optional(),

  /**
   * Version of the registry.
   */
  version: z.string().optional(),

  /**
   * Default prefix for added items of the registry.
   */
  prefix: z.string().optional(),

  /**
   * Directory of the registry.
   */
  directory: z.string().optional(),

  /**
   * Access level of the registry.
   *
   * @default 'public'
   */
  access: registryAccess.default('public').optional(),

  /**
   * Metadata of the registry.
   *
   * - authors: Array of authors
   * - homepage: Homepage of the registry
   * - repository: Repository URL of the registry
   * - bugs: Bugs page of the registry
   * - tags: Array of tags
   */
  meta: z.object({
    authors: z.array(z.string()),
    homepage: z.url(),
    repository: z.url(),
    bugs: z.url(),
    tags: z.array(z.string()),
  }).partial().optional(),

  /**
   * Global dependencies of the registry items.
   */
  dependencies: z.array(z.string()).optional(),

  /**
   * Global dev dependencies of the registry items.
   */
  devDependencies: z.array(z.string()).optional(),
})

export type RegistrySchema = z.infer<typeof registrySchema>
export type RegistryItem = z.infer<typeof registryItem>
export type RegistryItemFile = z.infer<typeof registryItemFile>
export type RegistryAccess = z.infer<typeof registryAccess>
export type RegistryItemType = z.infer<typeof registryItemType>
export type RegistryItemFileType = z.infer<typeof registryItemFileType>
