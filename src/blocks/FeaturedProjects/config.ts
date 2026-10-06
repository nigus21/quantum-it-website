import type { Block } from 'payload'
import { link } from '@/fields/link'

export const FeaturedProjects: Block = {
  slug: 'featuredProjects',
  interfaceName: 'FeaturedProjectsBlock',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      admin: {
        description: 'e.g. FEATURED PROJECTS or PROVEN IN COMPLEX ENVIRONMENTS',
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Proven in Complex Environments',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'showCategoryFilter',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show interactive category filter pills (Government, Financial, Enterprise, Energy, Security)',
      },
    },
    {
      name: 'featuredOnly',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Only display projects marked as featured (ideal for Homepage)',
      },
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 6,
      admin: {
        description: 'Maximum number of projects to display',
      },
    },
    link({
      appearances: ['default', 'outline'],
      overrides: {
        name: 'cta',
        admin: {
          description: 'Bottom action link (e.g. View All Projects)',
        },
      },
    }),
  ],
  labels: {
    plural: 'Featured Projects Blocks',
    singular: 'Featured Projects Block',
  },
}
