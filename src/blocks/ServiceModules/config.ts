import type { Block } from 'payload'
import { link } from '@/fields/link'

export const ServiceModules: Block = {
  slug: 'serviceModules',
  interfaceName: 'ServiceModulesBlock',
  fields: [
    {
      name: 'sectionId',
      type: 'text',
      admin: {
        description: 'Anchor ID for internal links (e.g. erp, biometric-attendance, e-invoicing)',
      },
    },
    {
      name: 'badge',
      type: 'text',
      admin: {
        description: 'e.g. SUBCATEGORY 1 · ERP or WHAT WE DELIVER',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      admin: {
        description: 'Tagline or value statement (e.g. One platform. Every critical function. Complete visibility.)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'modules',
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
        },
      ],
    },
    {
      name: 'proofPoint',
      type: 'text',
      admin: {
        description: 'e.g. Deployed across multiple Customs branch locations.',
      },
    },
    {
      name: 'targetAudience',
      type: 'text',
      admin: {
        description: 'e.g. Built for: enterprises, SMEs, SACCOs and institutions with complex operations.',
      },
    },
    link({
      appearances: ['default', 'outline'],
      overrides: {
        name: 'cta',
        admin: {
          description: 'Action button (e.g. Request an ERP Demo)',
        },
      },
    }),
  ],
  labels: {
    plural: 'Service Modules Blocks',
    singular: 'Service Modules Block',
  },
}
