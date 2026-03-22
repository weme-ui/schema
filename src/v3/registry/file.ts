import { z } from 'zod'
import { OptionalString, SafeString } from '../shared'

/**
 * The registry library item file type
 *
 * **The file type determines the usage of the file:**
 *
 * - `component`: A component file
 * - `type`: A type file
 * - `style`: A style file
 * - `locale`: A locale file
 * - `composable`: A composable file
 * - `util`: A utility file
 * - `file`: A general file
 *
 * @example 'component'
 */
const FileType = z.enum(['component', 'type', 'style', 'locale', 'composable', 'util', 'file'])

export const ItemFile = z
  .discriminatedUnion('type', [
    z.object({
      type: FileType.extract(['file']).meta({
        title: 'Registry Item File Type',
        description: 'The type of the registry item file.',
        examples: ['file'],
      }),
      path: SafeString.meta({
        title: 'Registry Item File Path',
        description: 'The path of the registry item file.',
        examples: ['path/to/file'],
      }),
      target: SafeString.meta({
        title: 'Registry Item File Target',
        description: 'The target of the registry item file.',
        examples: ['~/path/to/target'],
      }),
      hash: SafeString.meta({
        title: 'Registry Item File Hash',
        description: 'The hash of the registry item file.',
      }),
    }),
    z.object({
      type: FileType.exclude(['file']).meta({
        title: 'Registry Item File Type',
        description: 'The type of the registry item file.',
        examples: ['component'],
      }),
      path: SafeString.meta({
        title: 'Registry Item File Path',
        description: 'The path of the registry item file.',
        examples: ['components/button/button.vue'],
      }),
      target: OptionalString.meta({
        title: 'Registry Item File Target',
        description: 'The target of the registry item file.',
      }),
      hash: SafeString.meta({
        title: 'Registry Item File Hash',
        description: 'The hash of the registry item file.',
      }),
    }),
  ])
  .meta({
    title: 'Registry Item File',
    description: 'A file in the registry library item.',
  })
