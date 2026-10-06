import React from 'react'

import type { Page } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const LowImpactHero: React.FC<any> = ({ children, richText, links }) => {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/70 pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 quantum-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {children || (
            richText && (
              <div className="prose prose-slate max-w-none">
                <RichText
                  className="font-sans [&_h1]:text-3xl [&_h1]:sm:text-4xl [&_h1]:md:text-5xl [&_h1]:font-black [&_h1]:tracking-tight [&_h1]:text-slate-900 [&_h1]:leading-[1.15] [&_p]:text-base [&_p]:md:text-lg [&_p]:text-slate-600 [&_p]:font-normal [&_p]:leading-relaxed [&_p]:mt-4"
                  data={richText}
                  enableGutter={false}
                />
              </div>
            )
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex flex-wrap gap-4 mt-8">
              {links.map(({ link }, i) => (
                <li key={i} className="transition-transform duration-200 hover:-translate-y-0.5">
                  <CMSLink
                    {...link}
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md shadow-emerald-600/20 px-6 py-2.5 rounded-xl text-sm transition-all"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
