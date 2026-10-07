import type { Block } from 'payload'

export const WhyQuantum: Block = {
  slug: 'whyQuantum',
  interfaceName: 'WhyQuantumBlock',
  fields: [
    {
      name: 'layoutStyle',
      type: 'select',
      defaultValue: 'cards',
      options: [
        { label: 'Clean Cards (Solutions & General)', value: 'cards' },
        { label: 'Editorial Story (About Us - HubSpot Style)', value: 'editorial' },
        { label: 'Zigzag Timeline (Homepage)', value: 'zigzag' },
        { label: 'Architecture Console', value: 'navigator' },
      ],
      admin: {
        description: 'Choose display layout. Uses Clean Cards by default, Editorial Story for About Us, Zigzag on Home.',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      admin: {
        description: 'e.g. WHY QUANTUM or WHO WE ARE',
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
          name: 'badge',
          type: 'text',
          admin: {
            description: 'Section pill badge (e.g. PURPOSE & VALUES, OUR ORIGIN)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'pullquote',
          type: 'text',
          admin: {
            description: 'Optional highlighted quote',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Story image (shown in organic pebble/blob frame)',
          },
        },
        {
          name: 'authorName',
          type: 'text',
          admin: {
            description: 'Author / Leader signature name (e.g. Engineering Leadership & Founders)',
          },
        },
        {
          name: 'authorRole',
          type: 'text',
          admin: {
            description: 'Role / Location (e.g. Addis Ababa, Ethiopia)',
          },
        },
        {
          name: 'imagePosition',
          type: 'select',
          defaultValue: 'right',
          options: [
            { label: 'Right', value: 'right' },
            { label: 'Left', value: 'left' },
          ],
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
