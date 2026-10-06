import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { CMSLink } from '@/components/Link'
import { ProjectsClientFilter } from './ProjectsClientFilter'

export interface FeaturedProjectsBlockProps {
  tagline?: string
  heading?: string
  description?: string
  showCategoryFilter?: boolean
  featuredOnly?: boolean
  limit?: number
  cta?: any
}

export const FeaturedProjectsBlockComponent: React.FC<FeaturedProjectsBlockProps> = async (
  props,
) => {
  const {
    tagline,
    heading,
    description,
    showCategoryFilter = true,
    featuredOnly = false,
    limit = 12,
    cta,
  } = props

  let projects: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'projects',
      depth: 1,
      limit: limit || 12,
      sort: 'sortOrder',
      where: featuredOnly ? { featured: { equals: true } } : {},
    })
    projects = result.docs || []
  } catch (error) {
    console.error('Error fetching projects for FeaturedProjectsBlock:', error)
  }

  return (
    <section className="container py-10 md:py-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div className="max-w-3xl">
          {heading && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              {heading}
            </h2>
          )}
          {description && (
            <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {cta && (
          <div className="shrink-0">
            <CMSLink {...cta} />
          </div>
        )}
      </div>

      <ProjectsClientFilter projects={projects} showFilters={showCategoryFilter} />
    </section>
  )
}
