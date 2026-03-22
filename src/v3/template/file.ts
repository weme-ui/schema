import { z } from 'zod'
import { SafeString } from '../shared'

export const TemplateFile = z
  .object({
    /**
     * File source
     *
     * @example 'templates/default/{name}.md'
     */
    src: SafeString.meta({
      title: 'Template File Source',
      description: 'The source of the template file.',
      examples: ['templates/default/{name}.md'],
    }),

    /**
     * File destination
     *
     * @example '{name}.md'
     */
    dest: SafeString.meta({
      title: 'Template File Destination',
      description: 'The destination of the template file.',
      examples: ['{name}.md'],
    }),
  })
  .meta({
    title: 'Template File',
    description: 'A file in the template.',
  })
