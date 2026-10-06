import type { CollectionConfig } from 'payload'
import { revalidateTag } from 'next/cache'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { slugField } from 'payload'

const categoryOptions = [
  { label: 'Government', value: 'government' },
  { label: 'Financial', value: 'financial' },
  { label: 'Enterprise', value: 'enterprise' },
  { label: 'Energy', value: 'energy' },
  { label: 'Security', value: 'security' },
] as const

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'client', 'category', 'featured', 'sortOrder'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField(),
    {
      name: 'client',
      type: 'text',
      required: true,
      admin: {
        description: 'Client name (e.g. Customs, Dashen Bank, Ethiopian Electric Utility)',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      defaultValue: 'enterprise',
      options: [...categoryOptions],
    },
    {
      name: 'solution',
      type: 'text',
      required: true,
      admin: {
        description: 'Solution delivered (e.g. Biometric Attendance & Workforce Management, EV Charging Infrastructure)',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Overview of the project engagement and scope',
      },
    },
    {
      name: 'focus',
      type: 'text',
      admin: {
        description: 'Core focus area (e.g. Enterprise communication and collaboration)',
      },
    },
    {
      name: 'result',
      type: 'text',
      admin: {
        description: 'Measurable outcome or metric (e.g. 24 EV chargers installed at Kotebe site)',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Project visual or diagram',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show on homepage featured projects',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Display order (lower numbers appear first)',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [
      ({ req: { context } }) => {
        if (!context?.disableRevalidate) {
          revalidateTag('projects', 'max')
        }
      },
    ],
    afterDelete: [
      ({ req: { context } }) => {
        if (!context?.disableRevalidate) {
          revalidateTag('projects', 'max')
        }
      },
    ],
  },
}
