import { z } from 'zod'
import { OptionalString, SafeString } from '../shared'
import { TemplateFile } from './file'

export const Template = z
  .object({
    /**
     * Template name
     */
    name: SafeString.meta({
      title: 'Template Name',
      description: 'The name of the template.',
    }),

    /**
     * Template description
     */
    description: OptionalString.meta({
      title: 'Template Description',
      description: 'The description of the template.',
    }),

    /**
     * Template include files
     */
    files: z.array(TemplateFile).meta({
      title: 'Template Files',
      description: 'The files of the template.',
    }),
  })
  .meta({
    title: 'Template',
    description: 'A variant of the template.',
  })
