import type { Block } from 'payload'
import { link } from '@/fields/link'

export const Pillars: Block = {
  slug: 'pillars',
  interfaceName: 'PillarsBlock',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      admin: {
        description: 'Small badge above heading (e.g. FOUR CAPABILITY PILLARS)',
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Four Pillars. One Accountable Partner.',
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Introductory explanation',
      },
    },
    {
      name: 'pillars',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          defaultValue: 'software',
          options: [
            { label: 'Software / Code', value: 'software' },
            { label: 'Network / Infrastructure', value: 'network' },
            { label: 'Security / Shield', value: 'security' },
            { label: 'Energy / Solar / Power', value: 'energy' },
            { label: 'Training / Graduation', value: 'training' },
          ],
        },
        {
          name: 'items',
          type: 'array',
          admin: {
            description: 'Bullet items or included capabilities',
            initCollapsed: true,
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        link({
          appearances: false,
          overrides: {
            name: 'cta',
            admin: {
              description: 'Link to explore this pillar',
            },
          },
        }),
      ],
    },
  ],
  labels: {
    plural: 'Pillars Blocks',
    singular: 'Pillars Block',
  },
}
