import { z } from 'zod'
import { OptionalString, SafeString } from '../shared'

export /**
 * Prompt
 */
const Prompt = z
  .object({
    /**
     * Which template this prompt belongs to
     */
    use: z.array(OptionalString).meta({
      title: 'Prompt Template',
      description: 'Which template this prompt belongs to.',
    }),

    /**
     * Prompt type
     */
    type: z.enum(['text', 'number', 'confirm', 'list', 'select', 'multiselect']).meta({
      title: 'Prompt Type',
      description: 'The type of the prompt.',
      examples: ['text'],
    }),

    /**
     * Prompt name
     */
    name: SafeString.meta({
      title: 'Prompt Name',
      description: 'The name of the prompt.',
      examples: ['name'],
    }),

    /**
     * Prompt message
     */
    message: OptionalString.meta({
      title: 'Prompt Message',
      description: 'The message of the prompt.',
      examples: ['Please enter your project name'],
    }),

    /**
     * Prompt initial
     */
    initial: OptionalString.meta({
      title: 'Prompt Initial',
      description: 'The initial value of the prompt.',
      examples: ['my-project'],
    }),

    /**
     * Prompt choices
     *
     * Only available for `list`, `select` and `multiselect` prompt types
     *
     * @example ['default', 'react', 'vue']
     */
    choices: z
      .array(SafeString)
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
     * @example 'Select a framework'
     */
    hint: OptionalString.meta({
      title: 'Prompt Hint',
      description: 'The hint of the prompt.',
      examples: ['Select a framework'],
    }),
  })
  .meta({
    title: 'Prompt',
    description: 'A variant of the prompt.',
  })
