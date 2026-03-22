import { z } from 'zod'
import { TEMPLATE_SCHEMA_URL } from '../constants'
import { SafeUrl } from '../shared'
import { Template } from './template'
import { Prompt } from './prompt'

/**
 * Weme UI skeleton template schema
 *
 * This schema defines the structure of the skeleton template JSON file used in Weme UI CLI `init` command.
 *
 * @see {@link TEMPLATE_SCHEMA_URL}
 */
export const TemplateSchema = z
  .object({
    /**
     * Schema URL
     *
     * @default {@link TEMPLATE_SCHEMA_URL}
     */
    $schema: SafeUrl.default(TEMPLATE_SCHEMA_URL).meta({
      title: 'Template Schema URL',
      description: `The Schema URL, which should be \`${TEMPLATE_SCHEMA_URL}\``,
      examples: [TEMPLATE_SCHEMA_URL],
    }),

    /**
     * Templates
     */
    templates: z.array(Template).meta({
      title: 'Templates',
      description: 'The templates of the skeleton.',
    }),

    /**
     * Prompts
     */
    prompts: z.array(Prompt).optional().meta({
      title: 'Prompts',
      description: 'The prompts of the skeleton.',
    }),
  })
  .meta({
    $id: TEMPLATE_SCHEMA_URL,
    title: 'Weme UI Skeleton Template JSON Schema Definitions (v3)',
    description:
      'This schema defines the structure of the skeleton template JSON file used in Weme UI CLI `init` command.',
  })
