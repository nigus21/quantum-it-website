import React from 'react'

import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Sparkles } from 'lucide-react'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-100/85 via-emerald-50/20 to-white border-b border-slate-200/90 overflow-hidden py-9 md:py-12">
      {/* Top 1.5px gradient highlight strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 z-10" />

      {/* High-tech subtle dot matrix background */}
      <div className="absolute inset-0 quantum-grid-pattern opacity-70 pointer-events-none" />

      {/* Ambient glowing radial orbs */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-400/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Subtle Enterprise Category Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50/90 border border-emerald-200/80 shadow-xs">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            <span>QUANTUM IT & SECURITY SOLUTIONS</span>
          </div>

          {richText && (
            <div className="prose prose-slate max-w-none">
              <RichText
                className="font-sans [&_h1]:text-2xl [&_h1]:sm:text-3xl [&_h1]:md:text-4xl [&_h1]:font-black [&_h1]:tracking-tight [&_h1]:text-slate-900 [&_h1]:leading-[1.2] [&_p]:text-sm [&_p]:md:text-base [&_p]:text-slate-600 [&_p]:font-normal [&_p]:leading-relaxed [&_p]:mt-2.5"
                data={richText}
                enableGutter={false}
              />
            </div>
          )}

          {Array.isArray(links) && links.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {links.map(({ link }, i) => {
                const isPrimary = i === 0
                return (
                  <div key={i} className="transition-transform duration-200 hover:-translate-y-0.5">
                    <CMSLink
                      size="lg"
                      {...link}
                      className={
                        isPrimary
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 border-0 px-5 py-2 rounded-xl text-xs sm:text-sm transition-all'
                          : 'bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-300 shadow-xs px-5 py-2 rounded-xl text-xs sm:text-sm transition-all hover:border-emerald-500/50'
                      }
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {media && typeof media === 'object' && (
          <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <Media
              className="w-full h-auto object-cover max-h-[380px]"
              priority
              resource={media}
            />
            {media?.caption && (
              <div className="p-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-500">
                <RichText data={media.caption} enableGutter={false} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
