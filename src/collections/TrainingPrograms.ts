import type { CollectionConfig } from 'payload'
import { revalidateTag } from 'next/cache'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { slugField } from 'payload'

const trackOptions = [
  { label: 'Oracle', value: 'oracle' },
  { label: 'Microsoft', value: 'microsoft' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Project Management', value: 'project-management' },
  { label: 'Corporate & Custom', value: 'corporate' },
] as const

const levelOptions = [
  { label: 'Beginner', value: 'beginner' },
  { label: 'Intermediate', value: 'intermediate' },
  { label: 'Advanced', value: 'advanced' },
  { label: 'Certification Prep', value: 'certification-prep' },
] as const

export const TrainingPrograms: CollectionConfig = {
  slug: 'training-programs',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'track', 'level', 'duration', 'featured'],
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
      name: 'track',
      type: 'select',
      required: true,
      defaultValue: 'cybersecurity',
      options: [...trackOptions],
    },
    {
      name: 'level',
      type: 'select',
      defaultValue: 'intermediate',
      options: [...levelOptions],
    },
    {
      name: 'duration',
      type: 'text',
      admin: {
        description: 'e.g. 40 Hours · 4 Weeks',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'targetAudience',
      type: 'text',
      admin: {
        description: 'Who this course is for (e.g. IT Managers, Security Analysts)',
      },
    },
    {
      name: 'topics',
      type: 'array',
      fields: [
        {
          name: 'topic',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [
      ({ req: { context } }) => {
        if (!context?.disableRevalidate) {
          revalidateTag('training-programs', 'max')
        }
      },
    ],
    afterDelete: [
      ({ req: { context } }) => {
        if (!context?.disableRevalidate) {
          revalidateTag('training-programs', 'max')
        }
      },
    ],
  },
}
