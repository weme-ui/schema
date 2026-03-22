import { z } from 'zod'
import { OptionalString, SafeString } from '../shared'

export const ConfigPaths = z
  .object({
    components: SafeString.default('~/components').meta({
      title: 'Components Path',
      description: 'The path of the components directory.',
      examples: ['~/components'],
    }),
    composables: OptionalString.meta({
      title: 'Composables Path',
      description: 'The path of the composables directory.',
      examples: ['~/composables'],
    }),
    layouts: OptionalString.meta({
      title: 'Layouts Path',
      description: 'The path of the layouts directory.',
      examples: ['~/layouts'],
    }),
    plugins: OptionalString.meta({
      title: 'Plugins Path',
      description: 'The path of the plugins directory.',
      examples: ['~/plugins'],
    }),
    themes: OptionalString.meta({
      title: 'Themes Path',
      description: 'The path of the themes directory.',
      examples: ['~/themes'],
    }),
    pages: OptionalString.meta({
      title: 'Pages Path',
      description: 'The path of the pages directory.',
      examples: ['~/pages'],
    }),
    types: OptionalString.meta({
      title: 'Types Path',
      description: 'The path of the types directory.',
      examples: ['~/types'],
    }),
    utils: OptionalString.meta({
      title: 'Utils Path',
      description: 'The path of the utils directory.',
      examples: ['~/utils'],
    }),
  })
  .meta({
    title: 'Project Paths',
    description: 'The paths used in the project.',
  })
