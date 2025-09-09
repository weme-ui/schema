import { z } from 'zod'

export const inlineCssVars = z.record(z.string().trim(), z.string().trim())
export const nestedCssVars = z.record(z.string().trim(), z.record(z.string().trim(), z.string().trim()))

/**
 * CSS Variables Schema
 *
 * ------
 *
 * `--${unocss.prefix}-color`: `value`;
 *
 * @example
 *
 * ```json
 * {
 *   "color": "red"
 * }
 * ```
 *
 * ------
 *
 * `--${unocss.prefix}-${componentName}-color`: `value`;
 *
 * @example
 *
 * ```json
 * {
 *   "component": {
 *     "color": "red"
 *   }
 * }
 * ```
 */
export const cssVars = z.union([inlineCssVars, nestedCssVars])

export type CssVars = z.infer<typeof cssVars>
export type InlineCssVars = z.infer<typeof inlineCssVars>
export type NestedCssVars = z.infer<typeof nestedCssVars>
