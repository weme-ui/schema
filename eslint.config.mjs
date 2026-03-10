import antfu from '@antfu/eslint-config'
import * as jsoncParser from 'jsonc-eslint-parser'
import * as yamlParser from 'yaml-eslint-parser'

export default antfu(
  {
    type: 'lib',

    pnpm: true,
    typescript: true,
    markdown: true,

    stylistic: {
      indent: 2,
      quotes: 'single',
    },

    ignores: [
      'dist',
      'snapshots*',
      'node_modules',
      'v1',
      'v2',
      'docs',
      '.vscode',
    ],

    rules: {
      'markdown/fenced-code-language': 'off',
    },
  },
  {
    name: 'pnpm/package.json',
    files: [
      'package.json',
      '**/package.json',
    ],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      'pnpm/json-enforce-catalog': 'error',
      'pnpm/json-valid-catalog': 'error',
      'pnpm/json-prefer-workspace-settings': 'error',
    },
  },
  {
    name: 'pnpm/pnpm-workspace-yaml',
    files: ['pnpm-workspace.yaml'],
    languageOptions: {
      parser: yamlParser,
    },
    rules: {
      'yaml/sort-keys': 'off',
      'pnpm/yaml-no-unused-catalog-item': 'error',
      'pnpm/yaml-no-duplicate-catalog-item': 'error',
    },
  },
)
