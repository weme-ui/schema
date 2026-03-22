import { z } from 'zod'
import { SafeString } from '../shared'

export const TemplateItem = z
  .object({
    /**
     * Template description
     *
     * @example 'Default template for Weme UI projects'
     */
    description: SafeString.meta({
      title: 'Template Item Description',
      description: 'The description of the template item.',
      examples: ['Default template for Weme UI projects'],
    }),

    /**
     * Template Schema Path
     *
     * @example 'template.json'
     */
    schema: SafeString.meta({
      title: 'Template Item Schema Path',
      description: 'The path of the template schema file.',
      examples: ['project/schema.json'],
    }),
  })
  .meta({
    title: 'Template Item',
    description: 'A template item in the template index.',
  })
