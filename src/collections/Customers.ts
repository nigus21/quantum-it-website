import type { CollectionConfig } from 'payload'

import { revalidateTag } from 'next/cache'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

export const Customers: CollectionConfig = {
  slug: 'customers',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'featured', 'sortOrder'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'website',
      type: 'text',
      admin: {
        description: 'Client or partner website URL',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show in homepage or featured banner',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first',
      },
    },
  ],
  hooks: {
    afterChange: [
      ({ req: { context } }) => {
        if (!context?.disableRevalidate) {
          try {
            revalidateTag('customers', 'max')
          } catch {}
        }
      },
    ],
    afterDelete: [
      ({ req: { context } }) => {
        if (!context?.disableRevalidate) {
          try {
            revalidateTag('customers', 'max')
          } catch {}
        }
      },
    ],
  },
}
