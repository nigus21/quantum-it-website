import type { Block } from 'payload'

export const ProcessSteps: Block = {
  slug: 'processSteps',
  interfaceName: 'ProcessStepsBlock',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      admin: {
        description: 'Badge above title (e.g. OUR APPROACH or THE SEVEN STEPS)',
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'From Business Need to Working Solution',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'stepNumber',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g. 01, 02 or Step 1',
          },
        },
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
      ],
    },
  ],
  labels: {
    plural: 'Process Steps Blocks',
    singular: 'Process Steps Block',
  },
}
