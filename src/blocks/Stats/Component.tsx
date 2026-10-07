'use client'

import React, { useState, useEffect, useRef } from 'react'

import type { StatsBlock } from '@/payload-types'

export const StatsBlockComponent: React.FC<StatsBlock> = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  if (!items?.length) return null

  return (
    <section ref={sectionRef} className="container py-6 md:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const colPos = i % 3
          const initialTransform =
            colPos === 0
              ? '-translate-x-10 translate-y-8'
              : colPos === 2
              ? 'translate-x-10 translate-y-8'
              : 'translate-y-10'

          return (
            <div
              key={i}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/50 text-center shadow-[0_4px_25px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.12)] hover:-translate-y-1.5 transition-all duration-700 relative group overflow-hidden ${
                isVisible
                  ? 'opacity-100 translate-x-0 translate-y-0'
                  : `opacity-0 ${initialTransform}`
              }`}
            >
              {/* Subtle corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl group-hover:bg-emerald-400/20 transition-all pointer-events-none" />

              <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">
                {item.value}
              </div>
              <div className="text-sm md:text-base font-bold text-slate-800 tracking-wide uppercase">
                {item.label}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
