import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { AwardsList } from '../../blocks/AwardsList/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { LogoBanner } from '../../blocks/LogoBanner/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { Stats } from '../../blocks/Stats/config'
import { Testimonial } from '../../blocks/Testimonial/config'
import { Pillars } from '../../blocks/Pillars/config'
import { WhyQuantum } from '../../blocks/WhyQuantum/config'
import { FeaturedProjects } from '../../blocks/FeaturedProjects/config'
import { ProcessSteps } from '../../blocks/ProcessSteps/config'
import { ServiceModules } from '../../blocks/ServiceModules/config'
import { ExamAreas } from '../../blocks/ExamAreas/config'
import { ConsultationForm } from '../../blocks/ConsultationForm/config'
import { hero } from '@/heros/config'
import { slugField } from 'payload'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                Testimonial,
                LogoBanner,
                Stats,
                AwardsList,
                Pillars,
                WhyQuantum,
                FeaturedProjects,
                ProcessSteps,
                ServiceModules,
                ExamAreas,
                ConsultationForm,
              ],
              required: true,
              localized: true,
              admin: {
                initCollapsed: true,
              },
              defaultValue: [
                {
                  blockType: 'content',
                  blockName: 'Page Introduction',
                  columns: [
                    {
                      size: 'full',
                      richText: {
                        root: {
                          type: 'root',
                          children: [
                            {
                              type: 'heading',
                              tag: 'h2',
                              children: [
                                {
                                  type: 'text',
                                  text: 'Overview & Objectives',
                                  version: 1,
                                },
                              ],
                              direction: 'ltr',
                              format: '',
                              indent: 0,
                              version: 1,
                            },
                            {
                              type: 'paragraph',
                              children: [
                                {
                                  type: 'text',
                                  text: 'Welcome to this section. Quantum IT & Security Solutions PLC delivers world-class enterprise technology, software engineering, and mission-critical cybersecurity. You can edit or delete this block as needed.',
                                  version: 1,
                                },
                              ],
                              direction: 'ltr',
                              format: '',
                              indent: 0,
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                      },
                      enableLink: false,
                    },
                  ],
                },
                {
                  blockType: 'cta',
                  blockName: 'Call to Action',
                  richText: {
                    root: {
                      type: 'root',
                      children: [
                        {
                          type: 'heading',
                          tag: 'h2',
                          children: [
                            {
                              type: 'text',
                              text: 'Ready to elevate your IT and security infrastructure?',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              text: 'Contact Quantum IT & Security Solutions today to discuss your enterprise requirements.',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      version: 1,
                    },
                  },
                  links: [
                    {
                      link: {
                        type: 'custom',
                        url: '/contact',
                        label: 'Contact Us',
                        appearance: 'default',
                      },
                    },
                  ],
                },
              ],
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField({ localized: true }),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
