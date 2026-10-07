import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  labels: {
    singular: 'Inquiry',
    plural: 'Inquiries',
  },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'organization', 'email', 'phone', 'solution', 'createdAt'],
    group: 'Website Submissions',
    description: 'Forms submitted by visitors requesting consultations, proposals, or demonstrations.',
  },
  access: {
    // Anyone on frontend can submit an inquiry
    create: () => true,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'organization',
      type: 'text',
      label: 'Company / Organization',
    },
    {
      name: 'jobTitle',
      type: 'text',
      label: 'Job Title',
    },
    {
      name: 'solution',
      type: 'text',
      label: 'Interested Solution / Service',
    },
    {
      name: 'requestType',
      type: 'select',
      defaultValue: 'consultation',
      options: [
        { label: 'Expert Consultation', value: 'consultation' },
        { label: 'Request Proposal', value: 'proposal' },
        { label: 'Schedule Demo', value: 'demo' },
      ],
      label: 'Request Type',
    },
    {
      name: 'timeline',
      type: 'text',
      label: 'Implementation Timeline',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message / Project Context',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Review', value: 'in-review' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation !== 'create') return

        try {
          // Check Site Settings to see if email notifications are enabled
          const siteSettings: any = await req.payload.findGlobal({
            slug: 'site-settings',
            depth: 0,
            req,
          })

          const emailConfig = siteSettings?.emailNotifications
          const enabled = emailConfig?.enabled !== false
          const recipientEmails = emailConfig?.recipientEmails || 'henok@quantumitss.com, marketing@quantumitss.com'

          if (enabled && recipientEmails) {
            const emailList = recipientEmails
              .split(',')
              .map((e: string) => e.trim())
              .filter(Boolean)

            if (emailList.length > 0) {
              const htmlContent = `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                  <h2 style="color: #059669; margin-top: 0;">New Consultation Request</h2>
                  <p style="color: #475569;">A new inquiry has been submitted through the Quantum IT website:</p>
                  <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                    <tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #1e293b;">Full Name:</td><td style="color: #334155;">${doc.fullName}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Email:</td><td style="color: #334155;"><a href="mailto:${doc.email}">${doc.email}</a></td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Phone:</td><td style="color: #334155;">${doc.phone || 'N/A'}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Organization:</td><td style="color: #334155;">${doc.organization || 'N/A'}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Job Title:</td><td style="color: #334155;">${doc.jobTitle || 'N/A'}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Solution:</td><td style="color: #334155;">${doc.solution || 'N/A'}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Request Type:</td><td style="color: #334155;">${doc.requestType || 'consultation'}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Timeline:</td><td style="color: #334155;">${doc.timeline || 'N/A'}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top; color: #1e293b;">Message:</td><td style="color: #334155;">${doc.message || 'N/A'}</td></tr>
                  </table>
                  <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                  <p style="font-size: 12px; color: #94a3b8; margin: 0;">Quantum IT & Security Solutions PLC - Automated Lead Notification</p>
                </div>
              `

              for (const recipient of emailList) {
                try {
                  await req.payload.sendEmail({
                    to: recipient,
                    subject: `[New Lead] Consultation Request: ${doc.fullName} (${doc.organization || 'Individual'})`,
                    html: htmlContent,
                  })
                } catch (emailErr) {
                  req.payload.logger.warn(`Could not dispatch email to ${recipient}: ${emailErr}`)
                }
              }
            }
          }
        } catch (err) {
          req.payload.logger.error(`Error in inquiry afterChange email notification hook: ${err}`)
        }
      },
    ],
  },
  timestamps: true,
}
