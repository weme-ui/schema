import { z } from 'zod'
import { TEMPLATE_SCHEMA_URL } from './constants'

/**
 * Template
 *
 * Which CLI will use to create a skeleton project, with different variants and prompts.
 */
const Template = z
  .object({
    /**
     * Template name
     */
    name: z.string().trim().meta({
      title: 'Template Name',
      description: 'The name of the template.',
    }),
    /**
     * Template description
     */
    description: z.string().trim().optional().meta({
      title: 'Template Description',
      description: 'The description of the template.',
    }),
    /**
     * Template files
     */
    files: z
      .array(
        z.object({
          /**
           * File source
           *
           * @example 'templates/default/README.md'
           */
          src: z
            .string()
            .trim()
            .meta({
              title: 'Template File Source',
              description: 'The source of the template file.',
              examples: ['templates/default/README.md'],
            }),
          /**
           * File destination
           *
           * @example 'README.md'
           */
          dest: z
            .string()
            .trim()
            .meta({
              title: 'Template File Destination',
              description: 'The destination of the template file.',
              examples: ['README.md'],
            }),
        }),
      )
      .meta({
        title: 'Template Files',
        description: 'The files of the template.',
      }),
  })
  .meta({
    title: 'Template',
    description: 'A variant of the template.',
  })

/**
 * Prompt
 */
const Prompt = z
  .object({
    /**
     * Which template this prompt belongs to
     */
    use: z.array(z.string().trim()).optional().meta({
      title: 'Prompt Template',
      description: 'Which template this prompt belongs to.',
    }),
    /**
     * Prompt type
     */
    type: z.enum(['text', 'number', 'confirm', 'list', 'select', 'multiselect']).meta({
      title: 'Prompt Type',
      description: 'The type of the prompt.',
    }),
    /**
     * Prompt name
     */
    name: z.string().trim().meta({
      title: 'Prompt Name',
      description: 'The name of the prompt.',
    }),
    /**
     * Prompt message
     */
    message: z.string().trim().optional().meta({
      title: 'Prompt Message',
      description: 'The message of the prompt.',
    }),
    /**
     * Prompt initial
     */
    initial: z.string().trim().optional().meta({
      title: 'Prompt Initial',
      description: 'The initial value of the prompt.',
    }),
    /**
     * Prompt choices
     *
     * Only available for `list`, `select` and `multiselect` prompt types
     *
     * @example ['default', 'react', 'vue']
     */
    choices: z
      .array(z.string().trim())
      .optional()
      .meta({
        title: 'Prompt Choices',
        description: 'The choices of the prompt.',
        examples: [['default', 'react', 'vue']],
      }),
    /**
     * Prompt hint
     *
     * Only available for `select` and `multiselect` prompt types
     *
     * @example 'Enter your project name'
     */
    hint: z
      .string()
      .trim()
      .optional()
      .meta({
        title: 'Prompt Hint',
        description: 'The hint of the prompt.',
        examples: ['Enter your project name'],
      }),
  })
  .meta({
    title: 'Prompt',
    description: 'A variant of the prompt.',
  })

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
    $schema: z
      .url()
      .trim()
      .default(TEMPLATE_SCHEMA_URL)
      .meta({
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
