import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import type { Award, AwardsListBlock } from '@/payload-types'

function groupAwardsByYear(awards: Award[]): Map<number, Award[]> {
  const byYear = new Map<number, Award[]>()
  for (const a of awards) {
    const y = a.year ?? 0
    if (!byYear.has(y)) byYear.set(y, [])
    byYear.get(y)!.push(a)
  }
  const sorted = new Map([...byYear.entries()].sort((a, b) => b[0] - a[0]))
  return sorted
}

import { unstable_cache } from 'next/cache'

const getCachedAwards = (limit: number) =>
  unstable_cache(
    async () => {
      const payload = await getPayload({ config: configPromise })
      const result = await payload.find({
        collection: 'awards',
        depth: 1,
        limit,
        sort: '-year,sortOrder',
      })
      return (result.docs || []) as Award[]
    },
    ['awards', `${limit}`],
    {
      tags: ['awards'],
      revalidate: 300,
    },
  )()

export const AwardsListBlockComponent: React.FC<AwardsListBlock> = async ({
  heading,
  limit = 10,
}) => {
  const awards = await getCachedAwards(limit ?? 10)
  if (!awards.length) return null

  const byYear = groupAwardsByYear(awards)

  return (
    <section className="container py-8 md:py-12">
      {heading && (
        <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold text-slate-900">
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...byYear.entries()].map(([year, items]) => (
          <div key={year} className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)]">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80 mb-5">
              {year}
            </span>
            <ul className="flex flex-col gap-2">
              {items.map((award) => {
                const image =
                  typeof award.image === 'object' && award.image?.url
                    ? award.image.url
                    : null
                const line = [
                  award.awardName,
                  award.category,
                  award.projectName,
                ]
                  .filter(Boolean)
                  .join(' — ')
                return (
                  <li
                    key={award.id}
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
                  >
                    {image && (
                      <img
                        src={image}
                        alt=""
                        className="h-10 w-10 shrink-0 object-contain p-1 rounded-lg bg-slate-50 border border-slate-100"
                      />
                    )}
                    <span className="min-w-0 flex-1 text-sm font-medium text-slate-800">{line}</span>
                    {award.link && (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-slate-400 hover:text-emerald-600 transition-colors p-1"
                        aria-label="View award"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
