import { z } from 'zod'
import { TEMPLATE_INDEX_URL } from '../constants'
import { SafeString, SafeUrl } from '../shared'
import { TemplateItem } from './item'

/**
 * Template index schema
 */
export const TemplateIndexSchema = z
  .object({
    /**
     * Schema URL
     *
     * @default {@link TEMPLATE_INDEX_URL}
     */
    $schema: SafeUrl.default(TEMPLATE_INDEX_URL).meta({
      title: 'Template Index Schema URL',
      description: `The Schema URL, which should be \`${TEMPLATE_INDEX_URL}\``,
      examples: [TEMPLATE_INDEX_URL],
    }),

    /**
     * Index description
     *
     * @example 'Weme UI Default Templates'
     */
    description: SafeString.meta({
      title: 'Template Index Description',
      description: 'The description of the template index.',
      examples: ['Weme UI Default Templates'],
    }),

    /**
     * Templates list
     */
    templates: z.record(SafeString, TemplateItem).meta({
      title: 'Template Index Templates',
      description: 'The templates in the template index.',
    }),
  })
  .meta({
    $id: TEMPLATE_INDEX_URL,
    title: 'Weme UI Skeleton Template Index JSON Schema Definitions (v3)',
    description: 'This schema defines the structure of the skeleton template index JSON file.',
  })
