import type { Block } from 'payload'
import { link } from '@/fields/link'

export const ExamAreas: Block = {
  slug: 'examAreas',
  interfaceName: 'ExamAreasBlock',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'EXAMINATION AREAS',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Planned Examination Areas',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Quantum is developing a professional examination center to make globally recognized certifications more accessible to Ethiopian technology and business professionals.',
    },
    {
      name: 'areas',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'badge',
          type: 'text',
          defaultValue: 'Upcoming',
        },
      ],
    },
    {
      name: 'commitmentHeading',
      type: 'text',
      defaultValue: 'A Professional, Secure Testing Environment',
    },
    {
      name: 'commitmentText',
      type: 'textarea',
      defaultValue: 'Our objective is to open the door to world-class certification for Ethiopian professionals while maintaining the integrity and security that exams demand.',
    },
    link({
      appearances: ['default', 'outline'],
      overrides: {
        name: 'cta',
        admin: {
          description: 'Register interest link',
        },
      },
    }),
  ],
  labels: {
    plural: 'Exam Areas Blocks',
    singular: 'Exam Areas Block',
  },
}
