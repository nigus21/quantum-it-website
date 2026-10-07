import React from 'react'
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react'
import { CMSLink } from '@/components/Link'

export interface ServiceModuleItem {
  title: string
  description?: string
}

export interface ServiceModulesBlockProps {
  sectionId?: string
  badge?: string
  title: string
  subtitle?: string
  description?: string
  modules?: ServiceModuleItem[]
  proofPoint?: string
  targetAudience?: string
  cta?: any
}

export const ServiceModulesBlockComponent: React.FC<ServiceModulesBlockProps> = ({
  sectionId,
  badge,
  title,
  subtitle,
  description,
  modules = [],
  proofPoint,
  targetAudience,
  cta,
}) => {
  return (
    <section id={sectionId} className="container py-8 md:py-12 scroll-mt-24">
      <div className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.05)] p-8 md:p-12 lg:p-16 relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl font-semibold text-emerald-800 mb-4">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-500/50 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-emerald-700 transition-colors">
                    {mod.title}
                  </h4>
                  {mod.description && (
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {mod.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-8 border-t border-slate-100">
          <div className="space-y-2">
            {targetAudience && (
              <p className="text-sm font-medium text-slate-600">
                <span className="text-slate-900 font-bold">{targetAudience}</span>
              </p>
            )}
            {proofPoint && (
              <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{proofPoint}</span>
              </div>
            )}
          </div>

          {cta && (cta.url || (cta.link && cta.link.url)) && (
            <div className="shrink-0">
              <CMSLink
                {...cta}
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 px-7 py-3 rounded-xl transition-all"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
