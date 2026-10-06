import React from 'react'
import { ArrowRight } from 'lucide-react'

export interface ProcessStepItem {
  stepNumber: string
  title: string
  description: string
}

export interface ProcessStepsBlockProps {
  tagline?: string
  heading?: string
  description?: string
  steps?: ProcessStepItem[]
}

export const ProcessStepsBlockComponent: React.FC<ProcessStepsBlockProps> = ({
  tagline,
  heading,
  description,
  steps = [],
}) => {
  return (
    <section className="container py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        {tagline && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            {tagline}
          </div>
        )}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step, idx) => {
          return (
            <div
              key={idx}
              className="relative p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/40 transition-all duration-300 group hover:shadow-xl hover:shadow-emerald-600/5 hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl md:text-4xl font-mono font-black text-emerald-600/30 group-hover:text-emerald-600 transition-colors">
                    {step.stepNumber}
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all hidden lg:block" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${((idx + 1) / steps.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
