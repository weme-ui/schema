import { z } from 'zod'
import { RegistryLibraryItem } from './item'

/**
 * Library name
 *
 * @example 'slim'
 */
const RegistryLibraryName = z
  .string()
  .trim()
  .meta({
    title: 'Library Name',
    description: 'The name of the library.',
    examples: ['slim'],
  })

/**
 * Default library prefix
 *
 * @default 'ui'
 */
const RegistryLibraryDefaultPrefix = z
  .string()
  .trim()
  .default('ui')
  .meta({
    title: 'Default Library Prefix',
    description: 'The default prefix of the library.',
    examples: ['ui'],
  })

/**
 * Library of the registry
 */
export const RegistryLibrary = z
  .object({
    /**
     * The name of the library
     *
     * @example 'slim'
     */
    name: RegistryLibraryName,

    /**
     * The description of the library
     */
    description: z.string().trim().optional().meta({
      title: 'Library Description',
      description: 'The description of the library.',
    }),

    /**
     * The default prefix of the library
     *
     * @default 'ui'
     */
    defaultPrefix: RegistryLibraryDefaultPrefix,

    /**
     * The items in the library
     */
    items: z.array(RegistryLibraryItem).meta({
      title: 'Library Items',
      description: 'The items in the library.',
    }),
  })
  .meta({
    title: 'Library',
    description: 'A library in the registry.',
  })
