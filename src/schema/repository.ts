import { z } from 'zod'

export const repositorySchema = z.strictObject({
  name: z.string().trim(),
  description: z.string().trim().optional(),
  version: z.string().trim().optional(),
  directory: z.string().trim(),
  prefix: z.string().trim().default('ui'),
  access: z.enum(['public', 'private']).default('public'),
  items: z.strictObject({
    components: z.number(),
    layouts: z.number(),
    themes: z.number(),
    blocks: z.number(),
    pages: z.number(),
  }),
})

export type RepositorySchema = z.infer<typeof repositorySchema>
