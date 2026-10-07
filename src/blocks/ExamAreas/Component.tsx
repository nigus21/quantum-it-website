import React from 'react'
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { CMSLink } from '@/components/Link'

export interface ExamAreaItem {
  title: string
  description: string
  badge?: string
}

export interface ExamAreasBlockProps {
  tagline?: string
  heading?: string
  description?: string
  areas?: ExamAreaItem[]
  commitmentHeading?: string
  commitmentText?: string
  cta?: any
}

export const ExamAreasBlockComponent: React.FC<ExamAreasBlockProps> = ({
  tagline,
  heading,
  description,
  areas = [],
  commitmentHeading,
  commitmentText,
  cta,
}) => {
  return (
    <section className="container py-8 md:py-12">
      <div className="max-w-3xl mb-12">
        {heading && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {heading}
          </h2>
        )}
        {description && (
          <p className="text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {areas.map((area, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-emerald-500/40 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                {area.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                    {area.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {(commitmentHeading || commitmentText || cta) && (
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-teal-50/40 to-cyan-50/60 border border-emerald-200/80 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-sm relative overflow-hidden">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Testing Center Integrity</span>
            </div>
            {commitmentHeading && (
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                {commitmentHeading}
              </h3>
            )}
            {commitmentText && (
              <p className="text-slate-600 leading-relaxed">
                {commitmentText}
              </p>
            )}
          </div>
          {cta && (
            <div className="shrink-0">
              <CMSLink {...cta} size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all" />
            </div>
          )}
        </div>
      )}
    </section>
  )
}
