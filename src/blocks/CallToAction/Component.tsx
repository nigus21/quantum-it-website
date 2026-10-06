import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <section className="container py-8 md:py-12">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-200/90 bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/40 p-6 md:p-10 lg:p-12 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.12)] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Floating ambient glow orbs */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />

        <div className="max-w-[44rem] relative z-10">
          {richText && (
            <div className="prose prose-slate max-w-none [&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:font-black [&_h2]:text-slate-900 [&_h2]:tracking-tight [&_p]:text-slate-600 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mt-3">
              <RichText className="mb-0" data={richText} enableGutter={false} />
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-4 relative z-10 shrink-0">
          {(links || []).map(({ link }, i) => {
            const isPrimary = i === 0
            return (
              <div key={i} className="transition-transform duration-200 hover:-translate-y-0.5">
                <CMSLink
                  size="lg"
                  {...link}
                  className={
                    isPrimary
                      ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 border-0 px-8 py-3.5 rounded-xl text-base transition-all'
                      : 'bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-300 shadow-sm px-8 py-3.5 rounded-xl text-base transition-all hover:border-emerald-500/50'
                  }
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
