import { z } from 'zod'

export const SafeString = z.string().trim()

export const OptionalString = SafeString.optional()

export const SafeUrl = z.url().trim()
