import React from 'react'
import Link from 'next/link'
import {
  Code2,
  Network,
  ShieldCheck,
  SunMedium,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { CMSLink } from '@/components/Link'

export interface PillarItem {
  title: string
  description: string
  icon?: 'software' | 'network' | 'security' | 'energy' | 'training'
  items?: { text: string }[]
  cta?: any
}

export interface PillarsBlockProps {
  tagline?: string
  heading?: string
  description?: string
  pillars?: PillarItem[]
}

const iconMap = {
  software: Code2,
  network: Network,
  security: ShieldCheck,
  energy: SunMedium,
  training: GraduationCap,
}

const colorMap = {
  software: {
    border: 'hover:border-cyan-500/60',
    topBar: 'from-cyan-500 to-teal-500',
    iconBg: 'bg-cyan-50 text-cyan-700 border-cyan-200 group-hover:bg-cyan-600 group-hover:text-white',
    accentText: 'text-cyan-700',
    itemCheck: 'text-cyan-600',
  },
  network: {
    border: 'hover:border-blue-500/60',
    topBar: 'from-blue-500 to-indigo-500',
    iconBg: 'bg-blue-50 text-blue-700 border-blue-200 group-hover:bg-blue-600 group-hover:text-white',
    accentText: 'text-blue-700',
    itemCheck: 'text-blue-600',
  },
  security: {
    border: 'hover:border-emerald-500/60',
    topBar: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white',
    accentText: 'text-emerald-700',
    itemCheck: 'text-emerald-600',
  },
  energy: {
    border: 'hover:border-amber-500/60',
    topBar: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-50 text-amber-700 border-amber-200 group-hover:bg-amber-600 group-hover:text-white',
    accentText: 'text-amber-700',
    itemCheck: 'text-amber-600',
  },
  training: {
    border: 'hover:border-violet-500/60',
    topBar: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-50 text-violet-700 border-violet-200 group-hover:bg-violet-600 group-hover:text-white',
    accentText: 'text-violet-700',
    itemCheck: 'text-violet-600',
  },
}

export const PillarsBlockComponent: React.FC<PillarsBlockProps> = ({
  heading,
  description,
  pillars = [],
}) => {
  return (
    <section className="container py-10 md:py-14 relative">
      {(heading || description) && (
        <div className="max-w-3xl mb-8">
          {heading && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-3">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar, idx) => {
          const iconType = pillar.icon || 'software'
          const IconComponent = iconMap[iconType] || Code2
          const colors = colorMap[iconType] || colorMap.software

          return (
            <div
              key={idx}
              className={`group relative flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 ${colors.border} hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.16)] hover:-translate-y-1.5 overflow-hidden`}
            >
              {/* Animated top gradient highlight bar on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.topBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${colors.iconBg}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-5 text-sm md:text-base">
                  {pillar.description}
                </p>

                {pillar.items && pillar.items.length > 0 && (
                  <ul className="space-y-2.5 mb-6 border-t border-slate-100 pt-4">
                    {pillar.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-2.5 text-sm text-slate-700 font-medium"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 shrink-0 ${colors.itemCheck}`}
                        />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {pillar.cta && (
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <CMSLink
                    {...pillar.cta}
                    label={null}
                    className={`inline-flex items-center gap-2 text-sm font-bold ${colors.accentText} hover:gap-3 transition-all duration-200 group/link`}
                  >
                    <span>{pillar.cta.label || 'Explore Capabilities'}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </CMSLink>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
