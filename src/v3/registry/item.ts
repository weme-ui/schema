import { z } from 'zod'
import { ItemFile } from './file'
import { OptionalString, SafeString } from '../shared'

/**
 * The registry library item scope
 *
 * - `component`: A component item
 * - `layout`: A layout item
 * - `theme`: A theme item
 * - `plugin`: A plugin item
 * - `page`: A page item
 *
 * @example 'component'
 */
const ItemScope = z.enum(['component', 'layout', 'theme', 'plugin', 'page']).meta({
  title: 'Item Scope',
  description: 'The scope of the registry library item.',
  examples: ['component'],
})

/**
 * The registry library item
 *
 * **The item scope determines the type of the item:**
 *
 * - `component`: A component item
 * - `layout`: A layout item
 * - `theme`: A theme item
 * - `plugin`: A plugin item
 * - `page`: A page item
 */
export const LibraryItem = z
  .object({
    /**
     * The scope of the item
     *
     * @example 'component'
     */
    scope: ItemScope,

    /**
     * The name of the item
     *
     * @example 'button'
     */
    name: SafeString.meta({
      title: 'Item Name',
      description: 'The name of the registry library item.',
      examples: ['button'],
    }),

    /**
     * The description of the item
     */
    description: OptionalString.meta({
      title: 'Item Description',
      description: 'The description of the registry library item.',
    }),

    /**
     * The package dependencies of the item
     *
     * @example ['react', 'react-dom@^18.0.0']
     */
    dependencies: z
      .array(SafeString)
      .optional()
      .meta({
        title: 'Item Dependencies',
        description: 'The package dependencies of the registry library item.',
        examples: [['react', 'react-dom@^18.0.0']],
      }),

    /**
     * The package dev dependencies of the item
     *
     * @example ['unocss', 'tsdown@^0.21.0']
     */
    devDependencies: z
      .array(SafeString)
      .optional()
      .meta({
        title: 'Item Dev Dependencies',
        description: 'The package dev dependencies of the registry library item.',
        examples: [['unocss', 'tsdown@^0.21.0']],
      }),

    /**
     * The registry item dependencies of the item
     *
     * The dependencies should be in the format of `<library>/<item>`, for example `slim/button`
     * The library name is optional, if not provided, the current library will be used
     *
     * @example ['icon', 'slim/button']
     */
    localDependencies: z
      .array(SafeString)
      .optional()
      .meta({
        title: 'Item Dependencies In The Same Registry',
        description: 'The local dependencies of the registry library item.',
        examples: [['icon', 'slim/button']],
      }),

    /**
     * The files of the item
     */
    files: z.array(ItemFile).default([]).meta({
      title: 'Item Files',
      description: 'The files of the registry library item.',
    }),

    /**
     * The CSS variables of the item
     */
    cssVariables: z
      .record(SafeString, z.record(SafeString, SafeString).or(SafeString))
      .optional()
      .meta({
        title: 'Item CSS Variables',
        description: 'The CSS variables of the registry library item.',
      }),
  })
  .meta({
    title: 'Registry Library Item',
    description: 'An item in the registry library.',
  })
