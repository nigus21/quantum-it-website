import React from 'react'

import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200/70 overflow-hidden py-16 md:py-24">
      {/* Subtle high-tech background pattern */}
      <div className="absolute inset-0 quantum-grid-pattern opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {richText && (
            <div className="prose prose-slate max-w-none">
              <RichText
                className="mb-8 font-sans [&_h1]:text-3xl [&_h1]:sm:text-4xl [&_h1]:md:text-5xl [&_h1]:font-black [&_h1]:tracking-tight [&_h1]:text-slate-900 [&_h1]:leading-[1.15] [&_p]:text-base [&_p]:md:text-lg [&_p]:text-slate-600 [&_p]:font-normal [&_p]:leading-relaxed"
                data={richText}
                enableGutter={false}
              />
            </div>
          )}

          {Array.isArray(links) && links.length > 0 && (
            <div className="flex flex-wrap items-center gap-3.5 mt-6">
              {links.map(({ link }, i) => {
                const isPrimary = i === 0
                return (
                  <div key={i} className="transition-transform duration-200 hover:-translate-y-0.5">
                    <CMSLink
                      size="lg"
                      {...link}
                      className={
                        isPrimary
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 border-0 px-6 py-2.5 rounded-xl text-sm transition-all'
                          : 'bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-300 shadow-sm px-6 py-2.5 rounded-xl text-sm transition-all hover:border-emerald-500/50'
                      }
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {media && typeof media === 'object' && (
          <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            <Media
              className="w-full h-auto object-cover max-h-[500px]"
              priority
              resource={media}
            />
            {media?.caption && (
              <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500">
                <RichText data={media.caption} enableGutter={false} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
