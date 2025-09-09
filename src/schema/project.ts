import { z } from 'zod'
import { inlineCssVars } from './shared'

function projectPath(defaultPath: string) {
  return z.string().trim().default(defaultPath)
}

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
      registry: z.string().toLowerCase().trim(),

      /**
       * Directory of the registry.
       *
       * @example 'registry/std'
       */
      directory: z.string().optional(),

      /**
       * Whether to use this registry as the default one.
       *
       * @default false
       */
      default: z.boolean().default(false).optional(),

      /**
       * Prefix for the registry item's files.
       *
       * @example Add components to `${paths.components}/ui` -> `UiComponentName`
       * @default 'ui'
       */
      prefix: z.string().toLowerCase().trim().default('ui').optional(),

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
    components: projectPath('~/components'),
    composables: projectPath('~/composables').optional(),
    layouts: projectPath('~/layouts').optional(),
    pages: projectPath('~/pages').optional(),
    plugins: projectPath('~/plugins').optional(),
    themes: projectPath('~/themes').optional(),
    types: projectPath('~/types').optional(),
    utils: projectPath('~/utils').optional(),
  }).optional(),

  /**
   * UnoCSS Preset options.
   */
  unocss: z.object({
    /**
     * Prefix for the CSS variables.
     *
     * @default 'ui'
     */
    variablePrefix: z.string().toLowerCase().trim().default('ui').optional(),

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
    accentColors: z.record(z.string().trim(), z.string().trim()).optional(),

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
    neutralColors: z.record(z.string().trim(), z.string().trim()).optional(),

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
    cssVars: inlineCssVars.optional(),
  }).optional(),
})

export type Project = z.infer<typeof projectSchema>
