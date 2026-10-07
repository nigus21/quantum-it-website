'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
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
  Activity,
  ArrowRight,
  Sparkles,
  Compass,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Zap,
} from 'lucide-react'

export interface WhyQuantumItem {
  title: string
  description: string
  icon?: string
  badge?: string
  pullquote?: string
  image?: any
  authorName?: string
  authorRole?: string
  imagePosition?: 'right' | 'left'
}

export interface WhyQuantumBlockProps {
  layoutStyle?: 'editorial' | 'zigzag' | 'navigator' | 'cards'
  tagline?: string
  heading?: string
  description?: string
  items?: WhyQuantumItem[]
}

// Curated high-resolution fallback photos matching the editorial narrative
const editorialFallbackImages: Record<string, string> = {
  mission: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  story: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  vision: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  default: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
}

function getStoryImage(item: WhyQuantumItem, index: number): string {
  if (item.image && typeof item.image === 'object' && item.image?.url) {
    return item.image.url
  }
  if (typeof item.image === 'string' && item.image) {
    return item.image
  }
  const title = (item.title || '').toLowerCase()
  if (title.includes('mission')) return editorialFallbackImages.mission
  if (title.includes('story') || title.includes('origin') || title.includes('journey')) return editorialFallbackImages.story
  if (title.includes('vision') || title.includes('presence')) return editorialFallbackImages.vision
  const keys = ['mission', 'story', 'vision']
  return editorialFallbackImages[keys[index % keys.length]] || editorialFallbackImages.default
}

// ============================================================================
// COMPONENT 0: HUBSPOT-STYLE EDITORIAL STORYTELLING (/about)
// Clean narrative sections with organic pebble/blob photo frames & signature badges
// ============================================================================
function EditorialStoryComponent({
  tagline,
  heading,
  description,
  items = [],
}: WhyQuantumBlockProps) {
  return (
    <section className="py-12 md:py-20 bg-white font-sans overflow-hidden">
      <div className="container">
        {/* Optional Section Overview Header */}
        {(heading || tagline || description) && (
          <div className="max-w-3xl mb-14 md:mb-20">
            {heading && (
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Alternating Editorial Story Rows */}
        <div className="space-y-20 md:space-y-32">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0
            const imageOnRight =
              item.imagePosition ? item.imagePosition === 'right' : isEven

            const imageUrl = getStoryImage(item, idx)
            const badge =
              item.badge ||
              (item.title.toLowerCase().includes('mission')
                ? 'PURPOSE & VALUES'
                : item.title.toLowerCase().includes('vision')
                ? 'FUTURE OUTLOOK'
                : item.title.toLowerCase().includes('story')
                ? 'THE JOURNEY'
                : 'WHO WE ARE')

            const authorName =
              item.authorName ||
              (idx === 0
                ? 'Leadership & Engineering Team'
                : 'Addis Ababa Technical Specialists')

            const authorRole =
              item.authorRole ||
              (idx === 0
                ? 'Quantum IT & Security Solutions PLC'
                : 'Enterprise Delivery Specialists')

            // Distinct organic pebble/blob frame radius per story
            const photoBlobRadius = isEven
              ? 'rounded-[45px_110px_40px_95px]'
              : 'rounded-[105px_45px_95px_40px]'

            const backdropBlobRadius = isEven
              ? 'rounded-[90px_45px_100px_40px] bg-gradient-to-tr from-emerald-100/70 via-teal-100/40 to-cyan-100/60'
              : 'rounded-[40px_100px_45px_90px] bg-gradient-to-tr from-cyan-100/70 via-blue-100/40 to-indigo-100/60'

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 ${
                    imageOnRight ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                >
                  <div className="max-w-xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
                      {item.title}
                    </h3>

                    <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-4 font-normal">
                      {item.description
                        .split('\n\n')
                        .map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                    </div>

                    {item.pullquote && (
                      <div className="mt-6 p-4 rounded-2xl bg-slate-50 border-l-4 border-emerald-500 text-slate-800 italic font-medium text-sm md:text-base">
                        “{item.pullquote}”
                      </div>
                    )}
                  </div>
                </div>

                {/* Organic Media Column */}
                <div
                  className={`lg:col-span-6 ${
                    imageOnRight ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <div className="relative mx-auto max-w-lg lg:max-w-none">
                    {/* Layered Organic Backdrop Blob */}
                    <div
                      className={`absolute -inset-4 sm:-inset-6 pointer-events-none transform -rotate-2 ${backdropBlobRadius} blur-xs opacity-80`}
                    />

                    {/* Secondary subtle floating glow */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

                    {/* Organic Pebble Photo Frame */}
                    <div
                      className={`relative w-full h-[360px] sm:h-[440px] md:h-[480px] overflow-hidden ${photoBlobRadius} shadow-2xl border-4 border-white bg-slate-900 group`}
                    >
                      <img
                        src={imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Subtle Dark Bottom Gradient for Signature Legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                      {/* Founder / Leadership Signature Badge */}
                      <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-auto bg-slate-950/85 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 text-white shadow-xl max-w-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                          <div>
                            <p className="text-xs font-mono font-bold tracking-wide text-white">
                              {authorName}
                            </p>
                            <p className="text-[11px] text-slate-300 font-medium truncate mt-0.5">
                              {authorRole}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Verified Enterprise Facts Bar (Non-card, sleek ribbon) */}
        <div className="mt-20 md:mt-28 pt-10 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-2xl sm:text-3xl font-black font-mono text-slate-900">Addis Ababa</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Headquarters & Tech Center</p>
            </div>
            <div className="p-4">
              <p className="text-2xl sm:text-3xl font-black font-mono text-emerald-600">30+ Institutions</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Government & Commercial</p>
            </div>
            <div className="p-4">
              <p className="text-2xl sm:text-3xl font-black font-mono text-cyan-600">20+ Projects</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Complex Infrastructure</p>
            </div>
            <div className="p-4">
              <p className="text-2xl sm:text-3xl font-black font-mono text-slate-900">99.99%</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Enterprise SLA Target</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
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

// Distinct corporate color themes for each milestone
const milestoneThemes = [
  {
    code: 'ARCH-01',
    metric: '99.99% Enterprise Uptime Design',
    badge: 'Multi-Pillar Synergy',
    textColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dotColor: 'bg-emerald-500',
    glowColor: '#10b981',
  },
  {
    code: 'CERT-02',
    metric: 'National Bank & Enterprise Proven',
    badge: 'Tier-1 Reliability',
    textColor: 'text-cyan-600',
    badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    dotColor: 'bg-cyan-500',
    glowColor: '#06b6d4',
  },
  {
    code: 'TECH-03',
    metric: 'Zero Vendor Lock-in Architecture',
    badge: 'Open Standards',
    textColor: 'text-blue-600',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    dotColor: 'bg-blue-500',
    glowColor: '#3b82f6',
  },
  {
    code: 'OPS-04',
    metric: 'Single SLA Accountable Delivery',
    badge: 'End-to-End Delivery',
    textColor: 'text-indigo-600',
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    dotColor: 'bg-indigo-500',
    glowColor: '#6366f1',
  },
  {
    code: 'GLOBAL-05',
    metric: 'Ethiopian Rooted, Global Spec',
    badge: 'Local Excellence',
    textColor: 'text-violet-600',
    badgeBg: 'bg-violet-50 text-violet-700 border-violet-200',
    dotColor: 'bg-violet-500',
    glowColor: '#8b5cf6',
  },
  {
    code: 'PARTNER-06',
    metric: 'Long-term Lifecycle & SLA Commitment',
    badge: 'Shared Accountability',
    textColor: 'text-amber-600',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    dotColor: 'bg-amber-500',
    glowColor: '#f59e0b',
  },
]

// ============================================================================
// COMPONENT 1: INTERACTIVE ENTERPRISE SOLUTION NAVIGATOR (/solutions)
// Replaces cards & zigzag with an interactive Split-Screen Architecture Studio
// ============================================================================
function BusinessGoalNavigator({
  tagline,
  heading,
  description,
  items = [],
}: WhyQuantumBlockProps) {
  const [activeIdx, setActiveIdx] = useState(0)

  // Curated engineering blueprints tailored to each enterprise challenge
  const blueprints = [
    {
      domain: 'DIGITAL OPERATIONS & MOR COMPLIANCE',
      title: 'Integrated Enterprise Digitization Blueprint',
      systemOverview:
        'Synchronize core enterprise ledger, biometric workforce attendance, and Ethiopian Ministry of Revenues electronic invoicing into one accountable operational pipeline.',
      stackNodes: [
        { title: 'ERP Core & Ledger', desc: 'Financials, inventory & procurement' },
        { title: 'Biometric Attendance', desc: 'Real-time hardware shift sync' },
        { title: 'MOR Invoicing API', desc: 'Automated tax & e-invoicing' },
        { title: 'Bank Direct Payroll', desc: 'Automated employee disbursement' },
      ],
      metrics: [
        { label: 'MOR Invoicing', value: '100% Compliant' },
        { label: 'Reconciliation', value: '3.5x Faster' },
        { label: 'Manual Error Rate', value: '0%' },
      ],
      ctaLabel: 'Explore Digital Business Solutions',
      ctaUrl: '/solutions/software',
      themeGradient: 'from-emerald-600 to-teal-600',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      domain: 'ENTERPRISE NETWORKING & CYBER DEFENSE',
      title: 'Hardened Resilient Infrastructure Blueprint',
      systemOverview:
        'Tier-1 structured cabling, redundant routing, Fortinet next-gen firewall inspection, and server virtualization clusters engineered for 99.99% mission-critical availability.',
      stackNodes: [
        { title: 'Fiber LAN / WAN Core', desc: 'High-density multi-gigabit switching' },
        { title: 'Next-Gen Firewall', desc: 'Fortinet IPS & SSL-VPN inspection' },
        { title: 'Server Virtualization', desc: 'VMware & Hyper-V HA clusters' },
        { title: 'Offsite Cloud DR', desc: 'Automated ransomware-safe backup' },
      ],
      metrics: [
        { label: 'Network Uptime', value: '99.99%' },
        { label: 'Branch Latency', value: '< 1.5ms' },
        { label: 'Disaster Recovery', value: 'Near-Zero RPO' },
      ],
      ctaLabel: 'Explore IT & Security Solutions',
      ctaUrl: '/solutions/enterprise-networks',
      themeGradient: 'from-cyan-600 to-blue-600',
      badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    },
    {
      domain: 'COMMERCIAL ENERGY & SMART MOBILITY',
      title: 'Power Independence & EV Charging Blueprint',
      systemOverview:
        'Industrial-grade solar photovoltaics, hybrid inverters, and battery storage engineered to eliminate generator fuel dependency and power commercial EV fleets.',
      stackNodes: [
        { title: 'Tier-1 Solar PV Array', desc: 'High-efficiency monocrystalline modules' },
        { title: 'Hybrid Inverters', desc: 'Seamless grid & generator sync' },
        { title: 'LiFePO4 Storage Bank', desc: 'Deep-cycle continuous power backup' },
        { title: 'Smart EV Chargers', desc: 'Commercial Level 2 & DC Fast Hub' },
      ],
      metrics: [
        { label: 'Fuel & Grid Savings', value: 'Up to 65%' },
        { label: 'Power Continuity', value: '24/7 Redundant' },
        { label: 'Fleet EV Ready', value: 'AC / DC Fast Hub' },
      ],
      ctaLabel: 'Explore Green Infrastructure',
      ctaUrl: '/solutions/solar-energy',
      themeGradient: 'from-amber-600 to-emerald-600',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    },
  ]

  const currentBlueprint = blueprints[activeIdx % blueprints.length]

  return (
    <section className="container py-8 md:py-14 font-sans">
      {/* Section Header */}
      <div className="max-w-3xl mb-8 md:mb-10">
        {heading && (
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            {heading}
          </h2>
        )}
        {description && (
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Main Interactive Studio Console (NOT CARDS, NOT ZIGZAG) */}
      <div className="rounded-3xl border border-slate-200/90 bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side: Challenge Selector (5 cols) */}
        <div className="lg:col-span-5 p-6 md:p-8 bg-slate-50/90 border-b lg:border-b-0 lg:border-r border-slate-200/80 flex flex-col justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
              Select Your Core Challenge
            </p>
            <div className="space-y-3">
              {items.map((item, idx) => {
                const isSelected = activeIdx === idx
                const stepNum = String(idx + 1).padStart(2, '0')

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-300 relative group cursor-pointer border ${
                      isSelected
                        ? 'bg-white shadow-md shadow-emerald-900/5 border-emerald-500/50 translate-x-1'
                        : 'bg-white/60 hover:bg-white border-slate-200/60 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg border shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                            : 'bg-slate-100 text-slate-500 border-slate-200 group-hover:bg-slate-200'
                        }`}
                      >
                        {stepNum}
                      </span>
                      <div className="flex-1 pr-2">
                        <h4
                          className={`font-bold text-base leading-snug mb-1 transition-colors ${
                            isSelected ? 'text-slate-900' : 'text-slate-800 group-hover:text-emerald-700'
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 shrink-0 transition-transform ${
                          isSelected ? 'text-emerald-600 translate-x-1' : 'text-slate-300 group-hover:text-slate-400'
                        }`}
                      />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
            <span className="font-mono">Live Architecture Blueprint</span>
            <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Interactive Console
            </span>
          </div>
        </div>

        {/* Right Side: Architecture Blueprint & Outcome Console (7 cols) */}
        <div className="lg:col-span-7 p-7 md:p-10 flex flex-col justify-between relative bg-gradient-to-br from-white via-white to-emerald-50/25">
          <div>
            {/* Top Domain Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${currentBlueprint.badgeColor}`}>
                {currentBlueprint.domain}
              </span>
              <span className="text-xs font-mono text-slate-400 font-semibold">
                RECOMMENDED ARCHITECTURE
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">
              {currentBlueprint.title}
            </h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
              {currentBlueprint.systemOverview}
            </p>

            {/* Visual Engineering Stack Pipeline */}
            <div className="mb-6">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                Target System Pipeline
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentBlueprint.stackNodes.map((node, nodeIdx) => (
                  <div
                    key={nodeIdx}
                    className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:border-emerald-300 transition-colors flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {nodeIdx + 1}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">
                        {node.title}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {node.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* KPI Impact Row */}
            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <p className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-2.5">
                Guaranteed Enterprise Outcomes
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                {currentBlueprint.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="border-r last:border-r-0 border-white/10 px-1.5">
                    <p className="text-base md:text-lg font-black font-mono text-white">
                      {m.value}
                    </p>
                    <p className="text-[11px] text-slate-300 font-medium truncate mt-0.5">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <Link
              href={currentBlueprint.ctaUrl}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm bg-gradient-to-r ${currentBlueprint.themeGradient} shadow-md shadow-emerald-700/20 hover:scale-105 active:scale-95 transition-all`}
            >
              <span>{currentBlueprint.ctaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/request-consultation"
              className="text-xs font-bold text-slate-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-1"
            >
              <span>Custom Solution Audit</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// COMPONENT 2: ZIGZAG ENERGY CONDUIT TIMELINE (HOME PAGE)
// ============================================================================
function WhyQuantumZigzagComponent({
  heading,
  description,
  items = [],
}: WhyQuantumBlockProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(items.length).fill(false))

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const startOffset = windowHeight * 0.75
      const totalScrollable = rect.height + windowHeight * 0.5
      const currentScroll = startOffset - rect.top

      const rawProgress = currentScroll / totalScrollable
      const clamped = Math.min(Math.max(rawProgress, 0), 1)
      setScrollProgress(clamped)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const itemEls = document.querySelectorAll('.why-quantum-item')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = entry.target.getAttribute('data-index')
          if (indexAttr !== null) {
            const idx = parseInt(indexAttr, 10)
            setVisibleItems((prev) => {
              const next = [...prev]
              next[idx] = entry.isIntersecting
              return next
            })
          }
        })
      },
      { threshold: 0.15 },
    )

    itemEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items.length])

  const itemCount = Math.max(items.length, 2)
  const desktopPath = items.length > 0
    ? items.map((_, i) => {
        const x = i % 2 === 0 ? 320 : 680
        const y = Math.round(80 + (i / (itemCount - 1)) * 840)
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
      }).join(' ')
    : 'M 320 80 L 680 360 L 320 640 L 680 920'

  const mobilePath = items.length > 0
    ? items.map((_, i) => {
        const x = i % 2 === 0 ? 100 : 900
        const y = Math.round(80 + (i / (itemCount - 1)) * 840)
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
      }).join(' ')
    : 'M 100 80 L 900 360 L 100 640 L 900 920'

  return (
    <section
      ref={sectionRef}
      className="container py-8 md:py-14 relative overflow-hidden font-sans"
    >
      <div className="absolute inset-0 quantum-grid-pattern opacity-40 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[55rem] h-[35rem] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
        {heading && (
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-4 leading-tight">
            {heading}
          </h2>
        )}

        {description && (
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute inset-0 pointer-events-none -z-10 md:z-0">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="colorfulZigzagGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="20%" stopColor="#06b6d4" />
                <stop offset="40%" stopColor="#3b82f6" />
                <stop offset="60%" stopColor="#6366f1" />
                <stop offset="80%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>

              <filter id="zigzagGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d={desktopPath}
              className="hidden md:block"
              stroke="#cbd5e1"
              strokeWidth="3"
              strokeDasharray="8 8"
            />

            <path
              d={desktopPath}
              className="hidden md:block transition-all duration-75 ease-linear"
              stroke="url(#colorfulZigzagGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#zigzagGlow)"
              pathLength={1}
              strokeDasharray="1"
              strokeDashoffset={1 - scrollProgress}
            />

            <path
              d={mobilePath}
              className="md:hidden"
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeOpacity="0.25"
              strokeDasharray="5 5"
            />

            <path
              d={mobilePath}
              className="md:hidden transition-all duration-75 ease-linear"
              stroke="url(#colorfulZigzagGradient)"
              strokeWidth="2"
              strokeOpacity="0.35"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              strokeDashoffset={1 - scrollProgress}
            />
          </svg>
        </div>

        <div className="space-y-12 md:space-y-16 relative z-10">
          {items.map((item, idx) => {
            const Icon = (item.icon && iconMap[item.icon]) || Check
            const theme = milestoneThemes[idx % milestoneThemes.length]
            const isEven = idx % 2 === 0
            const isItemVisible = visibleItems[idx]
            const stepNumber = String(idx + 1).padStart(2, '0')

            const nodeProgressThreshold = idx / (Math.max(items.length, 2) - 1)
            const isNodeReached = scrollProgress >= nodeProgressThreshold * 0.85

            return (
              <div
                key={idx}
                data-index={idx}
                className={`why-quantum-item flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-14 group relative ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`flex-1 transition-all duration-700 ease-out ${
                    isEven
                      ? `pl-20 pr-3 md:pl-0 md:text-right md:pr-10 ${
                          isItemVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-12'
                        }`
                      : `pr-20 pl-3 md:pr-0 text-right md:text-left md:pl-10 ${
                          isItemVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-12'
                        }`
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-2.5 transition-all duration-500 delay-100 ${
                      isEven ? 'justify-start md:justify-end' : 'justify-end md:justify-start'
                    } ${isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  >
                    <span className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded border ${theme.badgeBg}`}>
                      {theme.code}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      {theme.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 group-hover:text-emerald-700 transition-all duration-500 delay-150 ${
                      isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-slate-600 leading-relaxed text-base md:text-lg mb-4 max-w-lg inline-block transition-all duration-500 delay-200 ${
                      isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {item.description}
                  </p>

                  <div
                    className={`pt-1 flex items-center gap-2.5 transition-all duration-500 delay-300 ${
                      isEven ? 'justify-start md:justify-end' : 'justify-end md:justify-start'
                    } ${isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  >
                    <span className={`w-3 h-3 rounded-full ${theme.dotColor} animate-pulse shrink-0`} />
                    <span className={`font-black text-base md:text-xl font-mono tracking-tight ${theme.textColor}`}>
                      {theme.metric}
                    </span>
                  </div>
                </div>

                <div
                  className={`absolute ${
                    isEven ? 'left-[10%]' : 'left-[90%]'
                  } md:relative md:left-auto md:translate-x-0 -translate-x-1/2 flex items-center justify-center shrink-0 z-20`}
                >
                  <div className="relative flex items-center justify-center">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        isNodeReached
                          ? 'bg-slate-900 text-white border-emerald-400 shadow-lg shadow-emerald-500/30 scale-110 rotate-6'
                          : 'bg-white text-slate-700 border-slate-300 group-hover:bg-slate-900 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <span
                      className={`absolute -bottom-5 px-2 py-0.5 rounded-full font-mono text-[10px] font-bold border transition-colors ${
                        isNodeReached
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : 'bg-white text-slate-500 border-slate-200'
                      }`}
                    >
                      {stepNumber}
                    </span>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// COMPONENT 3: ORIGINAL CLEAN CARDS (SOLUTIONS & GENERAL PAGES)
// Reverses /solutions and other pages back to their clean, focused cards
// ============================================================================
function OriginalWhyQuantumCardsComponent({
  tagline,
  heading,
  description,
  items = [],
}: WhyQuantumBlockProps) {
  return (
    <section className="container py-10 md:py-16 relative font-sans">
      <div className="text-center max-w-3xl mx-auto mb-10">
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
              className="relative p-7 md:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.12)] hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
            >
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

// ============================================================================
// MAIN EXPORT: ADAPTIVE BLOCK COMPONENT
// - / (Home): Why Organizations Choose Quantum -> Zigzag Energy Conduit timeline
// - /about: HubSpot-style editorial storytelling (Image 1)
// - /solutions: Original clean business goal cards (reversed)
// - /training & others: Clean focused cards
// ============================================================================
export const WhyQuantumBlockComponent: React.FC<WhyQuantumBlockProps> = (props) => {
  const { layoutStyle, tagline, heading, items = [] } = props

  // 1. Home Page: "Why Organizations Choose Quantum" ALWAYS uses the Zigzag Conduit
  const isHomepageZigzag = Boolean(
    layoutStyle === 'zigzag' ||
      heading?.toLowerCase().includes('why organizations choose quantum') ||
      tagline?.toLowerCase().includes('why quantum') ||
      (heading?.toLowerCase().includes('why') && heading?.toLowerCase().includes('quantum')),
  )

  if (isHomepageZigzag && layoutStyle !== 'cards') {
    return <WhyQuantumZigzagComponent {...props} />
  }

  // 2. Solutions Hub: "Start With Your Business Goal" -> Clean Cards
  const isSolutionsGoal = Boolean(
    layoutStyle === 'cards' ||
      heading?.toLowerCase().includes('goal') ||
      heading?.toLowerCase().includes('challenge') ||
      tagline?.toLowerCase().includes('where to start') ||
      tagline?.toLowerCase().includes('not sure where to start') ||
      (heading?.toLowerCase().includes('business') && items.length <= 4),
  )

  if (isSolutionsGoal && layoutStyle !== 'editorial') {
    return <OriginalWhyQuantumCardsComponent {...props} />
  }

  // 3. About Us / Mission / Vision / Who We Are -> HubSpot-style Editorial Story (Image 1)
  const isEditorial = Boolean(
    layoutStyle === 'editorial' ||
      tagline?.toLowerCase().includes('who we are') ||
      heading?.toLowerCase().includes('delivering comprehensive technology') ||
      items.some(
        (i) =>
          i.title?.toLowerCase().includes('mission') ||
          i.title?.toLowerCase().includes('story') ||
          i.title?.toLowerCase().includes('vision'),
      ),
  )

  if (isEditorial) {
    return <EditorialStoryComponent {...props} />
  }

  if (layoutStyle === 'navigator') {
    return <BusinessGoalNavigator {...props} />
  }

  // 4. Default: Clean Cards
  return <OriginalWhyQuantumCardsComponent {...props} />
}


