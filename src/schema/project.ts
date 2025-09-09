import { z } from 'zod'
import { inlineCssVars } from './shared'

/**
 * Project Config Schema
 *
 * @see {@link https://weme-ui.github.io/schema/project.json}
 */
export const projectSchema = z.strictObject({
  /**
   * Provider for the registry repository.
   *
   * This is used to load the registry item's files.
   *
   * - 'github'
   * - 'gitlab'
   * - 'bitbucket'
   * - 'esm'
   * - 'unpkg'
   * - 'jsdelivr'
   * - 'https://git.self-hosted.com'
   * - 'path/to/local/registry'
   *
   * @default 'github'
   */
  provider: z.string().default('github').optional(),

  /**
   * Repos to fetch the components from.
   *
   * @example
   * ```json
   * {
   *   "repos": [
   *     {
   *       "repo": "@weme-ui/weme-ui",
   *       "registry": "weme-ui/std",
   *       "directory": "registry/std",
   *       "prefix": "ui"
   *     }
   *   ]
   * }
   * ```
   */
  repos: z.array(
    z.strictObject({
      /**
       * Repository name.
       *
       * @example '@weme-ui/weme-ui'
       */
      repo: z.string().trim(),
      /**
       * Registry name.
       *
       * @example 'weme-ui/std'
       */
      registry: z.string().trim(),
      /**
       * Directory of the registry.
       *
       * @example 'registry/std'
       */
      directory: z.string().optional(),
      /**
       * Prefix for the registry item's files.
       *
       * @example Add components to `${paths.components}/ui` -> `UiComponentName`
       * @default 'ui'
       */
      prefix: z.string().default('ui').optional(),
      /**
       * License for the private registry.
       */
      license: z.string().optional(),
    }),
  ).optional(),

  /**
   * Paths for the project.
   *
   * Registry item files will be written to these paths.
   *
   * @example
   * ```json
   * {
   *   "paths": {
   *     "components": "~/components",
   *     "composables": "~/composables",
   *     "layouts": "~/layouts",
   *     "pages": "~/pages",
   *     "plugins": "~/plugins",
   *     "themes": "~/themes",
   *     "types": "~/types",
   *     "utils": "~/utils"
   *   }
   * }
   * ```
   */
  paths: z.strictObject({
    components: z.string().default('~/components'),
    composables: z.string().default('~/composables'),
    layouts: z.string().default('~/layouts'),
    pages: z.string().default('~/pages'),
    plugins: z.string().default('~/plugins'),
    themes: z.string().default('~/themes'),
    types: z.string().default('~/types'),
    utils: z.string().default('~/utils'),
  })
    .partial()
    .optional(),

  /**
   * UnoCSS Preset options.
   */
  unocss: z.object({
    /**
     * Prefix for the CSS variables.
     *
     * @default 'ui'
     */
    prefix: z.string().default('ui'),

    /**
     * Whether to inject reset styles.
     *
     * @default true
     */
    reset: z.boolean().default(true),

    /**
     * Custom colors should be used as the background.
     */
    background: z.object({
      /**
       * Light background color.
       *
       * @default '#fff'
       */
      light: z.string().default('#fff'),
      /**
       * Dark background color.
       *
       * @default '#111'
       */
      dark: z.string().default('#111'),
    }),

    /**
     * Custom accent colors for the project.
     *
     * @example
     * ```json
     * {
     *   "accentColors": {
     *     "ocean": "#0072e6"
     *   }
     * }
     * ```
     */
    accentColors: z.record(z.string(), z.string()),

    /**
     * Custom neutral colors for the project.
     *
     * @example
     * ```json
     * {
     *   "neutralColors": {
     *     "grey": "#f1f5f9"
     *   }
     * }
     * ```
     */
    neutralColors: z.record(z.string(), z.string()),

    /**
     * Custom CSS variables for the project.
     *
     * @example
     *
     * `--${unocss.prefix}-component-property`: `value`;
     *
     * ```json
     * {
     *   "cssVars": {
     *     "component": {
     *       "property": "value"
     *     }
     *   }
     * }
     * ```
     */
    cssVars: inlineCssVars,
  })
    .partial()
    .optional(),
})

export type ProjectSchema = z.infer<typeof projectSchema>
