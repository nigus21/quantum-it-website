import type { Block } from 'payload'

export const ConsultationForm: Block = {
  slug: 'consultationForm',
  interfaceName: 'ConsultationFormBlock',
  fields: [
    {
      name: 'formMode',
      type: 'select',
      defaultValue: 'consultation',
      options: [
        { label: 'Consultation / Proposal / Demo Request', value: 'consultation' },
        { label: 'Contact Us Form with Details', value: 'contact' },
      ],
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      admin: {
        description: 'Badge above title',
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: "Tell Us Your Challenge. We'll Recommend the Right Approach.",
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Choose how you would like to start. Our specialists will study your requirements and recommend a clear, practical approach.',
    },
    {
      name: 'showNextSteps',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Display the 3-step process (1. You Tell Us, 2. We Review, 3. We Recommend)',
      },
    },
    {
      name: 'successMessage',
      type: 'text',
      defaultValue: 'Thank you! Your request has been received. Our team will contact you within 1 business day.',
    },
  ],
  labels: {
    plural: 'Consultation Form Blocks',
    singular: 'Consultation Form Block',
  },
}
