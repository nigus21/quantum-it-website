'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import { ShieldCheck, Cpu, SunMedium, Award, Sparkles, ArrowRight } from 'lucide-react'

import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-white text-slate-900 overflow-hidden py-8 md:py-12 border-b border-slate-200/80">
      {/* Top 1.5px gradient highlight strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 z-10" />

      {/* High-tech subtle dot grid background */}
      <div className="absolute inset-0 quantum-grid-pattern opacity-80 pointer-events-none" />

      {/* Luminous floating ambient gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[30rem] h-[30rem] bg-cyan-400/20 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute -top-20 right-1/4 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Radial soft center lighting */}
      <div className="absolute inset-0 quantum-radial-glow pointer-events-none" />

      {media && typeof media === 'object' && (
        <div className="absolute inset-0 -z-10 opacity-10">
          <Media fill imgClassName="object-cover" priority resource={media} />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
      )}

      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          {richText && (
            <div className="prose prose-slate max-w-none text-center">
              <RichText
                className="mb-4 font-sans [&_h1]:text-4xl [&_h1]:sm:text-5xl [&_h1]:md:text-6xl [&_h1]:lg:text-6xl [&_h1]:font-black [&_h1]:tracking-tight [&_h1]:text-slate-900 [&_h1]:leading-[1.1] [&_p]:text-base [&_p]:md:text-lg [&_p]:text-slate-600 [&_p]:font-normal [&_p]:leading-relaxed [&_p]:max-w-3xl [&_p]:mx-auto"
                data={richText}
                enableGutter={false}
              />
            </div>
          )}

          {/* Action CTAs */}
          {Array.isArray(links) && links.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-6 mb-8">
              {links.map(({ link }, i) => {
                const isPrimary = i === 0
                return (
                  <div key={i} className="transition-transform duration-200 hover:-translate-y-0.5">
                    <CMSLink
                      size="lg"
                      {...link}
                      className={
                        isPrimary
                          ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-semibold shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 border-0 px-7 py-3 rounded-xl text-sm md:text-base transition-all'
                          : 'bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-300 shadow-sm px-7 py-3 rounded-xl text-sm md:text-base transition-all hover:border-emerald-500/50'
                      }
                    />
                  </div>
                )
              })}
            </div>
          )}

          {/* Quick Capability Highlights - Clean, borderless with larger icons */}
          <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2.5 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-xs md:text-sm font-bold tracking-wide text-slate-800 group-hover:text-emerald-700 transition-colors">ERP & Software</span>
            </div>

            <div className="flex items-center gap-2.5 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5 text-cyan-600" />
              </div>
              <span className="text-xs md:text-sm font-bold tracking-wide text-slate-800 group-hover:text-cyan-700 transition-colors">IT & Cybersecurity</span>
            </div>

            <div className="flex items-center gap-2.5 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                <SunMedium className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-xs md:text-sm font-bold tracking-wide text-slate-800 group-hover:text-amber-700 transition-colors">Commercial Solar</span>
            </div>

            <div className="flex items-center gap-2.5 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5 text-teal-600" />
              </div>
              <span className="text-xs md:text-sm font-bold tracking-wide text-slate-800 group-hover:text-teal-700 transition-colors">Testing Center</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
