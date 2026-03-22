import { z } from 'zod'
import { LibraryItem } from './item'
import { OptionalString, SafeString } from '../shared'

/**
 * Library name
 *
 * @example 'slim'
 */
const LibraryName = SafeString.meta({
  title: 'Library Name',
  description: 'The name of the library.',
  examples: ['slim'],
})

/**
 * Default library prefix
 *
 * @default 'ui'
 */
const LibraryDefaultPrefix = SafeString.default('ui').meta({
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
    name: LibraryName,

    /**
     * The description of the library
     */
    description: OptionalString.meta({
      title: 'Library Description',
      description: 'The description of the library.',
    }),

    /**
     * The default prefix of the library
     *
     * @default 'ui'
     */
    defaultPrefix: LibraryDefaultPrefix,

    /**
     * The items in the library
     */
    items: z.array(LibraryItem).meta({
      title: 'Library Items',
      description: 'The items in the library.',
    }),
  })
  .meta({
    title: 'Library',
    description: 'A library in the registry.',
  })
