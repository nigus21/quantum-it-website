'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { prefixWithLocale, useLocale } from '@/i18n/locale'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const locale = useLocale()
  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const baseHref = relationTo && slug ? `/${relationTo}/${slug}` : '#'
  const href = baseHref !== '#' ? prefixWithLocale(baseHref, locale) : baseHref

  return (
    <article
      className={cn(
        'border border-slate-200/90 rounded-3xl overflow-hidden bg-white hover:cursor-pointer shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full aspect-video overflow-hidden bg-slate-50">
        {!metaImage && (
          <div className="w-full h-full flex items-center justify-center text-xs font-semibold text-slate-400">
            Quantum Solutions
          </div>
        )}
        {metaImage && typeof metaImage !== 'string' && (
          <Media resource={metaImage} size="33vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        )}
      </div>
      <div className="p-6">
        {showCategories && hasCategories && (
          <div className="uppercase text-xs font-bold tracking-wider text-emerald-700 mb-3">
            {categories?.map((category, index) => {
              if (typeof category === 'object') {
                const { title: titleFromCategory } = category
                const categoryTitle = titleFromCategory || 'Insights'
                const isLast = index === categories.length - 1

                return (
                  <Fragment key={index}>
                    <span>{categoryTitle}</span>
                    {!isLast && <Fragment>, &nbsp;</Fragment>}
                  </Fragment>
                )
              }
              return null
            })}
          </div>
        )}
        {titleToUse && (
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mb-2">
            <Link className="not-prose" href={href} ref={link.ref}>
              {titleToUse}
            </Link>
          </h3>
        )}
        {description && (
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {sanitizedDescription}
          </p>
        )}
      </div>
    </article>
  )
}
