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
    <section className="relative min-h-[65vh] flex items-center justify-center bg-white text-slate-900 overflow-hidden py-10 md:py-16">
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

          {/* Quick Capability Highlights */}
          <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-emerald-400/50 hover:bg-white transition-all duration-200 group">
              <div className="flex items-center gap-2 mb-1">
                <Cpu className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">ERP & Software</span>
              </div>
              <p className="text-xs text-slate-500 leading-tight">Automate operations & e-invoicing</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-cyan-400/50 hover:bg-white transition-all duration-200 group">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">IT & Cybersecurity</span>
              </div>
              <p className="text-xs text-slate-500 leading-tight">Defend networks & cloud data</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-amber-400/50 hover:bg-white transition-all duration-200 group">
              <div className="flex items-center gap-2 mb-1">
                <SunMedium className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Commercial Solar</span>
              </div>
              <p className="text-xs text-slate-500 leading-tight">Reliable clean power & EV charging</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-teal-400/50 hover:bg-white transition-all duration-200 group">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Testing Center</span>
              </div>
              <p className="text-xs text-slate-500 leading-tight">Pearson VUE & IT workforce training</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
