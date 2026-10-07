'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Palette,
  Lightbulb,
  Layout,
  Code2,
  GraduationCap,
  ShieldCheck,
  Rocket,
  MousePointer,
  CheckCircle2,
} from 'lucide-react'

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

// Visual themes matching the playful, premium infographic aesthetic of Image 2
const stepVisuals = [
  {
    numColor: 'text-amber-500',
    dotColor: 'bg-amber-500',
    lineColor: 'border-amber-400',
    blobBg: 'bg-[#F9ECE0] text-amber-700',
    blobRadius: 'rounded-[32px_14px_24px_18px] rotate-[-2deg]',
    icon: 'palette',
  },
  {
    numColor: 'text-emerald-500',
    dotColor: 'bg-emerald-500',
    lineColor: 'border-emerald-400',
    blobBg: 'bg-[#E2F0D9] text-emerald-700',
    blobRadius: 'rounded-[16px_32px_18px_26px] rotate-[2deg]',
    icon: 'bulb',
  },
  {
    numColor: 'text-orange-500',
    dotColor: 'bg-orange-500',
    lineColor: 'border-orange-400',
    blobBg: 'bg-[#FCEAE6] text-orange-700',
    blobRadius: 'rounded-[26px_16px_28px_14px] rotate-[-1deg]',
    icon: 'wireframe',
  },
  {
    numColor: 'text-pink-500',
    dotColor: 'bg-pink-500',
    lineColor: 'border-pink-400',
    blobBg: 'bg-[#FDE2EC] text-pink-700',
    blobRadius: 'rounded-[18px_28px_14px_30px] rotate-[3deg]',
    icon: 'code',
  },
  {
    numColor: 'text-blue-500',
    dotColor: 'bg-blue-500',
    lineColor: 'border-blue-400',
    blobBg: 'bg-[#E3EFFD] text-blue-700',
    blobRadius: 'rounded-[28px_16px_22px_20px] rotate-[-2deg]',
    icon: 'training',
  },
  {
    numColor: 'text-teal-500',
    dotColor: 'bg-teal-500',
    lineColor: 'border-teal-400',
    blobBg: 'bg-[#E0F5F2] text-teal-700',
    blobRadius: 'rounded-[16px_28px_20px_24px] rotate-[2deg]',
    icon: 'shield',
  },
  {
    numColor: 'text-violet-500',
    dotColor: 'bg-violet-500',
    lineColor: 'border-violet-400',
    blobBg: 'bg-[#F1E8FC] text-violet-700',
    blobRadius: 'rounded-[26px_18px_22px_16px] rotate-[-1deg]',
    icon: 'rocket',
  },
]

// Custom SVG Infographic Badges that closely mirror the illustration artwork in Image 2
function StepIllustrationBadge({ type, idx }: { type: string; idx: number }) {
  const theme = stepVisuals[idx % stepVisuals.length]

  if (type === 'palette' || idx === 0) {
    return (
      <div className={`w-36 h-32 ${theme.blobBg} ${theme.blobRadius} shadow-sm flex flex-col items-center justify-center p-3 relative group-hover:scale-105 transition-transform duration-300`}>
        {/* Color swatch fan illustration */}
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-16 bg-emerald-500 rounded-sm rotate-[-30deg] origin-bottom-left shadow-xs border border-white/40" />
          <div className="w-12 h-16 bg-pink-500 rounded-sm rotate-[-10deg] origin-bottom shadow-xs border border-white/40 -ml-6" />
          <div className="w-12 h-16 bg-amber-400 rounded-sm rotate-[15deg] origin-bottom-right shadow-xs border border-white/40 -ml-6" />
        </div>
        {/* Swatch palette chip row */}
        <div className="mt-2 flex gap-1 bg-white/90 p-1 rounded-md shadow-xs border border-slate-200">
          <span className="w-2.5 h-2.5 bg-slate-800 rounded-xs" />
          <span className="w-2.5 h-2.5 bg-pink-400 rounded-xs" />
          <span className="w-2.5 h-2.5 bg-amber-400 rounded-xs" />
          <span className="w-2.5 h-2.5 bg-emerald-400 rounded-xs" />
        </div>
      </div>
    )
  }

  if (type === 'bulb' || idx === 1) {
    return (
      <div className={`w-36 h-32 ${theme.blobBg} ${theme.blobRadius} shadow-sm flex items-center justify-center p-3 relative group-hover:scale-105 transition-transform duration-300`}>
        <div className="relative flex items-center">
          {/* Glowing yellow bulb */}
          <div className="w-16 h-16 rounded-full bg-amber-300 border-2 border-amber-500 flex flex-col items-center justify-center shadow-xs">
            <Lightbulb className="w-8 h-8 text-amber-700" />
          </div>
          {/* Tilted orange architect pencil */}
          <div className="w-5 h-20 bg-rose-400 border border-rose-600 rounded-t-sm -ml-4 rotate-[25deg] shadow-sm flex flex-col justify-between p-0.5">
            <div className="w-full h-3 bg-slate-800 rounded-xs" />
            <div className="w-full h-1 bg-white/50" />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'wireframe' || idx === 2) {
    return (
      <div className={`w-36 h-32 ${theme.blobBg} ${theme.blobRadius} shadow-sm flex flex-col items-center justify-center p-3 relative group-hover:scale-105 transition-transform duration-300`}>
        {/* Pink UI Browser Window */}
        <div className="w-24 h-16 bg-pink-500 rounded-lg p-1.5 shadow-md border-2 border-pink-600 flex flex-col justify-between">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-white rounded-full w-full" />
            <div className="h-1 bg-emerald-300 rounded-full w-3/4" />
            <div className="h-1 bg-amber-300 rounded-full w-1/2" />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'code' || idx === 3) {
    return (
      <div className={`w-36 h-32 ${theme.blobBg} ${theme.blobRadius} shadow-sm flex flex-col items-center justify-center p-3 relative group-hover:scale-105 transition-transform duration-300`}>
        {/* JAVA / Terminal tag block */}
        <div className="relative">
          <div className="bg-rose-500 text-white font-mono font-black text-xs px-2.5 py-1 rounded-sm shadow-xs border border-rose-600">
            JAVA
          </div>
          <div className="flex items-center gap-1 mt-1.5">
            <div className="bg-amber-400 text-slate-900 font-mono font-bold text-xs px-2 py-0.5 rounded-xs flex items-center shadow-xs">
              &lt;/&gt;
            </div>
            <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-xs">
              <MousePointer className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'training' || idx === 4) {
    return (
      <div className={`w-36 h-32 ${theme.blobBg} ${theme.blobRadius} shadow-sm flex flex-col items-center justify-center p-3 relative group-hover:scale-105 transition-transform duration-300`}>
        <div className="w-14 h-14 rounded-2xl bg-blue-500 text-white flex items-center justify-center shadow-md border-2 border-blue-600 rotate-[-4deg]">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <span className="text-[10px] font-mono font-bold text-blue-700 bg-white/80 px-2 py-0.5 rounded-full mt-1.5">
          Tier-1 Skills
        </span>
      </div>
    )
  }

  if (type === 'shield' || idx === 5) {
    return (
      <div className={`w-36 h-32 ${theme.blobBg} ${theme.blobRadius} shadow-sm flex flex-col items-center justify-center p-3 relative group-hover:scale-105 transition-transform duration-300`}>
        <div className="w-14 h-14 rounded-2xl bg-teal-500 text-white flex items-center justify-center shadow-md border-2 border-teal-600 rotate-[4deg]">
          <ShieldCheck className="w-8 h-8 text-white" />
        </div>
        <span className="text-[10px] font-mono font-bold text-teal-800 bg-white/80 px-2 py-0.5 rounded-full mt-1.5">
          24/7 SLA Support
        </span>
      </div>
    )
  }

  return (
    <div className={`w-36 h-32 ${theme.blobBg} ${theme.blobRadius} shadow-sm flex flex-col items-center justify-center p-3 relative group-hover:scale-105 transition-transform duration-300`}>
      <div className="w-14 h-14 rounded-2xl bg-violet-500 text-white flex items-center justify-center shadow-md border-2 border-violet-600 rotate-[-3deg]">
        <Rocket className="w-8 h-8 text-white" />
      </div>
      <span className="text-[10px] font-mono font-bold text-violet-800 bg-white/80 px-2 py-0.5 rounded-full mt-1.5">
        Continuous ROI
      </span>
    </div>
  )
}

export const ProcessStepsBlockComponent: React.FC<ProcessStepsBlockProps> = ({
  tagline,
  heading,
  description,
  steps = [],
}) => {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Split into alternating rows on desktop for optimal scannability without horizontal clipping
  const row1 = steps.slice(0, 4)
  const row2 = steps.slice(4)

  return (
    <section className="py-14 md:py-24 bg-[#FBF9F4] font-sans relative overflow-hidden border-y border-amber-900/10">
      {/* Playful pastel decorative background shapes matching Image 2 */}
      {/* 4-point star in top-left */}
      <svg
        className="w-24 h-24 text-amber-200/40 absolute top-8 left-10 pointer-events-none fill-current hidden md:block"
        viewBox="0 0 100 100"
      >
        <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
      </svg>
      {/* Organic cloud blob in top-right */}
      <div className="w-72 h-72 bg-amber-200/25 rounded-full blur-3xl absolute -top-16 -right-16 pointer-events-none" />
      {/* Bottom peach tint */}
      <div className="w-96 h-96 bg-rose-200/20 rounded-full blur-3xl absolute -bottom-24 left-1/3 pointer-events-none" />

      <div className="container relative z-10" ref={containerRef}>
        {/* Infographic Title Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {heading || 'Our 7-Step Delivery Methodology'}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {description ||
              'A structured, transparent engineering lifecycle that guarantees predictability, compliance, and enterprise resilience from day one.'}
          </p>
        </div>

        {/* ================================================================ */}
        {/* DESKTOP / TABLET INFOGRAPHIC (Undulating Alternating Flow)       */}
        {/* ================================================================ */}
        <div className="hidden lg:block space-y-24">
          {/* STAGE 1: Steps 01 to 04 */}
          <div className="relative">
            {/* The Continuous Horizontal Stepping Bus Line */}
            <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-slate-300 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {row1.map((step, idx) => {
                const globalIdx = idx
                const visual = stepVisuals[globalIdx % stepVisuals.length]
                const isEven = idx % 2 === 0 // 0, 2: Text on Top, Badge on Bottom. 1, 3: Badge on Top, Text on Bottom.

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveStep(globalIdx)}
                    onMouseLeave={() => setActiveStep(null)}
                    className="flex flex-col items-center justify-between min-h-[460px] text-center group cursor-default"
                  >
                    {isEven ? (
                      // ==========================================
                      // EVEN INDEX: TEXT TOP -> CONNECTOR -> BADGE BOTTOM
                      // ==========================================
                      <>
                        {/* Top Text Block */}
                        <div className="flex-1 flex flex-col items-center justify-end pb-3 max-w-[220px]">
                          <span className={`text-4xl sm:text-5xl font-mono font-black ${visual.numColor} mb-1 transition-transform group-hover:scale-110`}>
                            {step.stepNumber}
                          </span>
                          <h4 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {step.description}
                          </p>

                          {/* Dotted Drop Line down to Node Pin */}
                          <div className="flex flex-col items-center mt-3">
                            <div className={`w-0.5 h-10 border-l-2 border-dashed ${visual.lineColor}`} />
                            <div className={`w-3.5 h-3.5 rounded-full ${visual.dotColor} border-2 border-white shadow-xs group-hover:scale-125 transition-transform`} />
                          </div>
                        </div>

                        {/* Bottom Badge Block */}
                        <div className="flex-1 flex items-center justify-center pt-3">
                          <StepIllustrationBadge type={visual.icon} idx={globalIdx} />
                        </div>
                      </>
                    ) : (
                      // ==========================================
                      // ODD INDEX: BADGE TOP -> CONNECTOR -> TEXT BOTTOM
                      // ==========================================
                      <>
                        {/* Top Badge Block */}
                        <div className="flex-1 flex items-center justify-center pb-3">
                          <StepIllustrationBadge type={visual.icon} idx={globalIdx} />
                        </div>

                        {/* Bottom Text Block */}
                        <div className="flex-1 flex flex-col items-center justify-start pt-3 max-w-[220px]">
                          {/* Node Pin up to Dotted Line */}
                          <div className="flex flex-col items-center mb-3">
                            <div className={`w-3.5 h-3.5 rounded-full ${visual.dotColor} border-2 border-white shadow-xs group-hover:scale-125 transition-transform`} />
                            <div className={`w-0.5 h-10 border-l-2 border-dashed ${visual.lineColor}`} />
                          </div>

                          <span className={`text-4xl sm:text-5xl font-mono font-black ${visual.numColor} mb-1 transition-transform group-hover:scale-110`}>
                            {step.stepNumber}
                          </span>
                          <h4 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* STAGE 2: Steps 05 to 07 (if present) */}
          {row2.length > 0 && (
            <div className="relative pt-6">
              {/* Turnaround connecting pipeline indicator */}
              <div className="flex items-center justify-center gap-3 mb-10 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                <span className="h-px w-24 bg-slate-300" />
                <span>PHASE 2: DEPLOYMENT, GOVERNANCE & LIFECYCLE</span>
                <span className="h-px w-24 bg-slate-300" />
              </div>

              {/* Connecting bus line */}
              <div className="absolute top-1/2 left-20 right-20 h-0.5 bg-slate-300 translate-y-2 z-0" />

              <div className="grid grid-cols-3 gap-12 max-w-4xl mx-auto relative z-10">
                {row2.map((step, idx) => {
                  const globalIdx = idx + 4
                  const visual = stepVisuals[globalIdx % stepVisuals.length]
                  const isEven = idx % 2 === 0

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveStep(globalIdx)}
                      onMouseLeave={() => setActiveStep(null)}
                      className="flex flex-col items-center justify-between min-h-[460px] text-center group cursor-default"
                    >
                      {isEven ? (
                        <>
                          <div className="flex-1 flex flex-col items-center justify-end pb-3 max-w-[240px]">
                            <span className={`text-4xl sm:text-5xl font-mono font-black ${visual.numColor} mb-1 transition-transform group-hover:scale-110`}>
                              {step.stepNumber}
                            </span>
                            <h4 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                              {step.title}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {step.description}
                            </p>

                            <div className="flex flex-col items-center mt-3">
                              <div className={`w-0.5 h-10 border-l-2 border-dashed ${visual.lineColor}`} />
                              <div className={`w-3.5 h-3.5 rounded-full ${visual.dotColor} border-2 border-white shadow-xs group-hover:scale-125 transition-transform`} />
                            </div>
                          </div>

                          <div className="flex-1 flex items-center justify-center pt-3">
                            <StepIllustrationBadge type={visual.icon} idx={globalIdx} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex-1 flex items-center justify-center pb-3">
                            <StepIllustrationBadge type={visual.icon} idx={globalIdx} />
                          </div>

                          <div className="flex-1 flex flex-col items-center justify-start pt-3 max-w-[240px]">
                            <div className="flex flex-col items-center mb-3">
                              <div className={`w-3.5 h-3.5 rounded-full ${visual.dotColor} border-2 border-white shadow-xs group-hover:scale-125 transition-transform`} />
                              <div className={`w-0.5 h-10 border-l-2 border-dashed ${visual.lineColor}`} />
                            </div>

                            <span className={`text-4xl sm:text-5xl font-mono font-black ${visual.numColor} mb-1 transition-transform group-hover:scale-110`}>
                              {step.stepNumber}
                            </span>
                            <h4 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-emerald-700 transition-colors">
                              {step.title}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* ================================================================ */}
        {/* MOBILE & TABLET INFOGRAPHIC (< 1024px)                          */}
        {/* Undulating Vertical Stepper with Center Connecting Pipeline      */}
        {/* ================================================================ */}
        <div className="lg:hidden relative">
          {/* Vertical Center Connector Line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-300 -translate-x-1/2 z-0" />

          <div className="space-y-12 relative z-10">
            {steps.map((step, idx) => {
              const visual = stepVisuals[idx % stepVisuals.length]
              const isEven = idx % 2 === 0

              return (
                <div key={idx} className="relative flex flex-col items-center">
                  {/* Center Node Pin */}
                  <div className={`w-4 h-4 rounded-full ${visual.dotColor} border-2 border-white shadow-sm z-20 mb-4`} />

                  {/* Content Container with Alternating Card Flow */}
                  <div
                    className={`w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 shadow-md flex flex-col ${
                      isEven ? 'items-center text-center' : 'items-center text-center'
                    }`}
                  >
                    <div className="mb-4">
                      <StepIllustrationBadge type={visual.icon} idx={idx} />
                    </div>

                    <span className={`text-3xl font-mono font-black ${visual.numColor} mb-1`}>
                      {step.stepNumber}
                    </span>

                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Infographic Assurance Summary */}
        <div className="mt-16 md:mt-24 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-base">
                Single SLA Accountable Delivery
              </p>
              <p className="text-xs sm:text-sm text-slate-500">
                Direct engineer escalation, zero handoffs to third-party sub-contractors.
              </p>
            </div>
          </div>

          <a
            href="/request-consultation"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-md shadow-emerald-600/20 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Start With Step One</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
