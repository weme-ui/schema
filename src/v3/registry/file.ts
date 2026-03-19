import { z } from 'zod'

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
 * - `utility`: A utility file
 * - `file`: A general file
 *
 * @example 'component'
 */
const RegistryLibraryItemFileType = z
  .enum(['component', 'type', 'style', 'locale', 'composable', 'utility', 'file'])
  .meta({
    title: 'Item File Type',
    description: 'The type of the registry library item file.',
    examples: ['component'],
  })

export const RegistryLibraryItemFile = z
  .discriminatedUnion('type', [
    z.object({
      type: RegistryLibraryItemFileType.extract(['file']).meta({
        title: 'Registry Item File Type',
        description: 'The type of the registry item file.',
        examples: ['file'],
      }),
      path: z
        .string()
        .trim()
        .meta({
          title: 'Registry Item File Path',
          description: 'The path of the registry item file.',
          examples: ['path/to/file'],
        }),
      target: z
        .string()
        .trim()
        .meta({
          title: 'Registry Item File Target',
          description: 'The target of the registry item file.',
          examples: ['~/path/to/target'],
        }),
      hash: z.string().trim().meta({
        title: 'Registry Item File Hash',
        description: 'The hash of the registry item file.',
      }),
    }),
    z.object({
      type: RegistryLibraryItemFileType.exclude(['file']).meta({
        title: 'Registry Item File Type',
        description: 'The type of the registry item file.',
        examples: ['component'],
      }),
      path: z
        .string()
        .trim()
        .meta({
          title: 'Registry Item File Path',
          description: 'The path of the registry item file.',
          examples: ['components/button/button.vue'],
        }),
      target: z.string().trim().optional().meta({
        title: 'Registry Item File Target',
        description: 'The target of the registry item file.',
      }),
      hash: z.string().trim().meta({
        title: 'Registry Item File Hash',
        description: 'The hash of the registry item file.',
      }),
    }),
  ])
  .meta({
    title: 'Registry Item File',
    description: 'A file in the registry library item.',
  })
