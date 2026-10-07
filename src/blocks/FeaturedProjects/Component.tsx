import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { unstable_cache } from 'next/cache'
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

const getCachedProjects = (featuredOnly: boolean, limit: number) =>
  unstable_cache(
    async () => {
      try {
        const payload = await getPayload({ config: configPromise })
        const result = await payload.find({
          collection: 'projects',
          depth: 1,
          limit: limit || 12,
          sort: 'sortOrder',
          where: featuredOnly ? { featured: { equals: true } } : {},
        })
        return result.docs || []
      } catch (error) {
        console.error('Error fetching projects for FeaturedProjectsBlock:', error)
        return []
      }
    },
    ['featured-projects', `${featuredOnly}`, `${limit}`],
    {
      tags: ['projects'],
      revalidate: 300,
    },
  )()

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

  const projects = await getCachedProjects(featuredOnly, limit)

  return (
    <section className="container py-8 md:py-12">
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
            <CMSLink
              {...cta}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md shadow-emerald-600/20 transition-all inline-flex items-center gap-2"
            />
          </div>
        )}
      </div>

      <ProjectsClientFilter
        projects={projects}
        showFilters={showCategoryFilter}
      />
    </section>
  )
}
