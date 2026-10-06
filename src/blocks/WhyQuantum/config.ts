import type { Block } from 'payload'

export const WhyQuantum: Block = {
  slug: 'whyQuantum',
  interfaceName: 'WhyQuantumBlock',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      admin: {
        description: 'e.g. WHY QUANTUM or OUR VALUES',
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Why Organizations Choose Quantum',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
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
          defaultValue: 'layers',
          options: [
            { label: 'Layers / Integrated', value: 'layers' },
            { label: 'Globe / Local & Global', value: 'globe' },
            { label: 'Shield / Security by Design', value: 'shield' },
            { label: 'Lifecycle / Refresh / Support', value: 'lifecycle' },
            { label: 'Lightbulb / Innovation', value: 'innovation' },
            { label: 'Award / Excellence', value: 'excellence' },
            { label: 'Leaf / Sustainability', value: 'sustainability' },
            { label: 'Handshake / Integrity', value: 'integrity' },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Why Quantum Blocks',
    singular: 'Why Quantum Block',
  },
}
