import React from 'react'
import {
  Layers,
  Globe2,
  ShieldCheck,
  RefreshCw,
  Lightbulb,
  Award,
  Leaf,
  Handshake,
  Check,
} from 'lucide-react'

export interface WhyQuantumItem {
  title: string
  description: string
  icon?: string
}

export interface WhyQuantumBlockProps {
  tagline?: string
  heading?: string
  description?: string
  items?: WhyQuantumItem[]
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  layers: Layers,
  globe: Globe2,
  shield: ShieldCheck,
  lifecycle: RefreshCw,
  innovation: Lightbulb,
  excellence: Award,
  sustainability: Leaf,
  integrity: Handshake,
}

export const WhyQuantumBlockComponent: React.FC<WhyQuantumBlockProps> = ({
  heading,
  description,
  items = [],
}) => {
  return (
    <section className="container py-10 md:py-14 relative">
      <div className="text-center max-w-3xl mx-auto mb-8">
        {heading && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-3">
            {heading}
          </h2>
        )}
        {description && (
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const Icon = (item.icon && iconMap[item.icon]) || Check

          return (
            <div
              key={idx}
              className="relative p-6 md:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.12)] hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="w-12 h-1 bg-emerald-500/0 group-hover:bg-emerald-500 rounded-full mb-5 transition-all duration-300" />

              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/70 text-emerald-700 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-600/20">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
