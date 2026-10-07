import type { GlobalConfig } from 'payload'

import { revalidateSiteSettings } from './hooks/revalidateSiteSettings'

const socialPlatformOptions = [
  { label: 'LinkedIn', value: 'linkedin' },
  { label: 'Twitter / X', value: 'twitter' },
  { label: 'GitHub', value: 'github' },
  { label: 'YouTube', value: 'youtube' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'Facebook', value: 'facebook' },
] as const

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'Agency Name',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Site logo (used in header, etc.)',
      },
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'socialLinks',
      type: 'array',
      admin: {
        description: 'Social profile URLs',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [...socialPlatformOptions],
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'analyticsId',
      type: 'text',
      admin: {
        description: 'Google Analytics / Plausible / etc. ID',
      },
    },
    {
      name: 'brandLine',
      type: 'text',
      admin: {
        description: 'Tagline or brand slogan',
      },
    },
    {
      name: 'contactEmail',
      type: 'email',
    },
    {
      name: 'secondaryEmail',
      type: 'email',
      admin: {
        description: 'Additional contact or marketing email',
      },
    },
    {
      name: 'contactPhone',
      type: 'text',
    },
    {
      name: 'secondaryPhone',
      type: 'text',
      admin: {
        description: 'Alternate phone number',
      },
    },
    {
      name: 'businessHours',
      type: 'text',
      admin: {
        description: 'e.g. Mon-Fri 8:30 AM - 5:30 PM, Sat 8:30 AM - 1:00 PM',
      },
    },
    {
      name: 'address',
      type: 'textarea',
    },
    {
      name: 'emailNotifications',
      type: 'group',
      label: 'Form & Lead Email Notifications',
      admin: {
        description: 'Configure real-time email delivery when visitors submit consultation and contact inquiries on the website.',
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Send Email Notifications on Form Submission',
          defaultValue: true,
        },
        {
          name: 'recipientEmails',
          type: 'text',
          label: 'Notification Recipient Email(s)',
          defaultValue: 'henok@quantumitss.com, marketing@quantumitss.com',
          admin: {
            description: 'Comma-separated email addresses that will receive instant alerts for new form submissions.',
          },
        },
      ],
    },
    {
      name: 'whatsapp',
      type: 'group',
      label: 'WhatsApp Floating Chat Button',
      admin: {
        description: 'Configure the floating WhatsApp contact button displayed at the bottom-right corner of the website.',
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable WhatsApp Button',
          defaultValue: true,
        },
        {
          name: 'phoneNumber',
          type: 'text',
          label: 'WhatsApp Phone Number',
          defaultValue: '+251911234567',
          admin: {
            description: 'Full international number with country code (e.g. +251911234567).',
          },
        },
        {
          name: 'defaultMessage',
          type: 'text',
          label: 'Default Message',
          defaultValue: 'Hello Quantum IT! I would like to inquire about your services and solutions.',
          admin: {
            description: 'Pre-filled message when a visitor clicks to start a chat.',
          },
        },
        {
          name: 'tooltipText',
          type: 'text',
          label: 'Button Label / Tooltip',
          defaultValue: 'Chat on WhatsApp',
          admin: {
            description: 'Label shown beside the button or on hover.',
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateSiteSettings],
  },
}
