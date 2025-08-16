import antfu from '@antfu/eslint-config'

export default antfu({
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
  ],
})
