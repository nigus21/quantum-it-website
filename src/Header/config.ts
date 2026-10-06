import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      localized: true,
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'enableDropdown',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Enable a dropdown menu under this navigation item',
          },
        },
        {
          name: 'dropdownItems',
          type: 'array',
          admin: {
            condition: (_, siblingData) => Boolean(siblingData?.enableDropdown),
            description: 'Sub-items for this dropdown menu',
            initCollapsed: true,
          },
          fields: [
            link({
              appearances: false,
            }),
            {
              name: 'description',
              type: 'text',
              admin: {
                description: 'Short explanatory note (optional)',
              },
            },
          ],
        },
      ],
      maxRows: 8,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'ctaButtons',
      type: 'array',
      localized: true,
      maxRows: 3,
      admin: {
        description: 'Action buttons (e.g. Get a Quote, Client Login)',
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
      fields: [
        link({
          appearances: ['default', 'outline'],
        }),
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
