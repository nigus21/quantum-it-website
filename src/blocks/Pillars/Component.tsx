'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Code2,
  Network,
  ShieldCheck,
  SunMedium,
  GraduationCap,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { CMSLink } from '@/components/Link'

export interface PillarItem {
  title: string
  description: string
  icon?: 'software' | 'network' | 'security' | 'energy' | 'training' | 'ev' | string
  items?: { text: string }[]
  cta?: any
}

export interface PillarsBlockProps {
  tagline?: string
  heading?: string
  description?: string
  pillars?: PillarItem[]
}

const iconMap: Record<string, any> = {
  software: Code2,
  network: Network,
  security: ShieldCheck,
  energy: SunMedium,
  training: GraduationCap,
  ev: Zap,
}

const colorMap = {
  software: {
    border: 'hover:border-cyan-500/60',
    topBar: 'from-cyan-500 to-teal-500',
    glow: 'group-hover:shadow-[0_20px_45px_-12px_rgba(6,182,212,0.18)]',
    iconBg:
      'bg-cyan-50 text-cyan-700 border-cyan-200 group-hover:bg-gradient-to-br group-hover:from-cyan-600 group-hover:to-teal-600 group-hover:text-white',
    accentText: 'text-cyan-700',
    itemCheck: 'text-cyan-600',
    tagBg: 'bg-cyan-50 text-cyan-800 border-cyan-200',
  },
  network: {
    border: 'hover:border-blue-500/60',
    topBar: 'from-blue-500 to-indigo-500',
    glow: 'group-hover:shadow-[0_20px_45px_-12px_rgba(59,130,246,0.18)]',
    iconBg:
      'bg-blue-50 text-blue-700 border-blue-200 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white',
    accentText: 'text-blue-700',
    itemCheck: 'text-blue-600',
    tagBg: 'bg-blue-50 text-blue-800 border-blue-200',
  },
  security: {
    border: 'hover:border-emerald-500/60',
    topBar: 'from-emerald-500 to-teal-500',
    glow: 'group-hover:shadow-[0_20px_45px_-12px_rgba(16,185,129,0.2)]',
    iconBg:
      'bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:text-white',
    accentText: 'text-emerald-700',
    itemCheck: 'text-emerald-600',
    tagBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  energy: {
    border: 'hover:border-amber-500/60',
    topBar: 'from-amber-500 to-orange-500',
    glow: 'group-hover:shadow-[0_20px_45px_-12px_rgba(245,158,11,0.18)]',
    iconBg:
      'bg-amber-50 text-amber-700 border-amber-200 group-hover:bg-gradient-to-br group-hover:from-amber-600 group-hover:to-orange-600 group-hover:text-white',
    accentText: 'text-amber-700',
    itemCheck: 'text-amber-600',
    tagBg: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  training: {
    border: 'hover:border-violet-500/60',
    topBar: 'from-violet-500 to-purple-500',
    glow: 'group-hover:shadow-[0_20px_45px_-12px_rgba(139,92,246,0.18)]',
    iconBg:
      'bg-violet-50 text-violet-700 border-violet-200 group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-purple-600 group-hover:text-white',
    accentText: 'text-violet-700',
    itemCheck: 'text-violet-600',
    tagBg: 'bg-violet-50 text-violet-800 border-violet-200',
  },
  ev: {
    border: 'hover:border-emerald-500/60',
    topBar: 'from-emerald-500 to-teal-500',
    glow: 'group-hover:shadow-[0_20px_45px_-12px_rgba(16,185,129,0.18)]',
    iconBg:
      'bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:text-white',
    accentText: 'text-emerald-700',
    itemCheck: 'text-emerald-600',
    tagBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
}

// ============================================================================
// CUSTOM VECTOR SVG ILLUSTRATIONS FOR THE 4 CAPABILITY PILLARS
// ============================================================================
function SoftwareIllustration() {
  return (
    <svg viewBox="0 0 320 230" fill="none" className="w-full h-full max-w-[340px] drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
      {/* Code / Application Window Frame */}
      <rect x="20" y="20" width="280" height="190" rx="14" fill="#ffffff" stroke="#0891b2" strokeWidth="2" />
      {/* Window Title Bar */}
      <rect x="20" y="20" width="280" height="30" rx="14" fill="#f0fdfa" />
      <line x1="20" y1="50" x2="300" y2="50" stroke="#ccfbf1" strokeWidth="1" />
      <circle cx="36" cy="35" r="4" fill="#ef4444" />
      <circle cx="48" cy="35" r="4" fill="#f59e0b" />
      <circle cx="60" cy="35" r="4" fill="#10b981" />
      <rect x="78" y="30" width="70" height="10" rx="5" fill="#e2e8f0" />
      {/* Code Syntax Lines */}
      <rect x="36" y="66" width="55" height="7" rx="3.5" fill="#0891b2" fillOpacity="0.9" />
      <rect x="98" y="66" width="80" height="7" rx="3.5" fill="#94a3b8" />
      <rect x="48" y="80" width="110" height="7" rx="3.5" fill="#0284c7" fillOpacity="0.8" />
      <rect x="48" y="94" width="70" height="7" rx="3.5" fill="#94a3b8" />
      {/* ERP Analytics Graph Box */}
      <rect x="36" y="114" width="130" height="82" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
      <path d="M 46 180 L 68 160 L 94 170 L 122 140 L 152 130" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="152" cy="130" r="4" fill="#0d9488" />
      {/* Bar charts */}
      <rect x="50" y="164" width="7" height="22" rx="2" fill="#38bdf8" fillOpacity="0.7" />
      <rect x="65" y="150" width="7" height="36" rx="2" fill="#0891b2" />
      <rect x="80" y="158" width="7" height="28" rx="2" fill="#38bdf8" fillOpacity="0.7" />
      <rect x="95" y="140" width="7" height="46" rx="2" fill="#0d9488" />
      <rect x="110" y="146" width="7" height="40" rx="2" fill="#0891b2" />
      <rect x="125" y="134" width="7" height="52" rx="2" fill="#06b6d4" />
      {/* Database Cylinder Stack on Right */}
      <ellipse cx="230" cy="74" rx="34" ry="11" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
      <path d="M 196 74 V 96 C 196 102 211 107 230 107 C 249 107 264 102 264 96 V 74" stroke="#0284c7" strokeWidth="2" fill="#f0f9ff" />
      <path d="M 196 96 V 118 C 196 124 211 129 230 129 C 249 129 264 124 264 118 V 96" stroke="#0284c7" strokeWidth="2" fill="#f0f9ff" />
      {/* Biometric / Sync Badge */}
      <rect x="186" y="148" width="90" height="44" rx="10" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5" />
      <circle cx="204" cy="170" r="10" fill="#ccfbf1" />
      <path d="M 200 170 L 203 173 L 208 167" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="222" y="163" width="42" height="6" rx="3" fill="#0891b2" />
      <rect x="222" y="173" width="28" height="5" rx="2.5" fill="#94a3b8" />
    </svg>
  )
}

function NetworkIllustration() {
  return (
    <svg viewBox="0 0 320 230" fill="none" className="w-full h-full max-w-[340px] drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
      {/* Core Server Rack Unit */}
      <rect x="30" y="24" width="260" height="56" rx="10" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
      {/* Switch Port LEDs */}
      <rect x="46" y="38" width="70" height="11" rx="3" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={i} cx={54 + i * 11} cy="43.5" r="2.5" fill={i % 2 === 0 ? '#2563eb' : '#10b981'} />
      ))}
      <rect x="46" y="54" width="70" height="11" rx="3" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={i} cx={54 + i * 11} cy="59.5" r="2.5" fill={i % 3 === 0 ? '#10b981' : '#2563eb'} />
      ))}
      {/* Server Status Display */}
      <rect x="135" y="38" width="80" height="27" rx="5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
      <path d="M 143 52 L 153 46 L 163 56 L 173 44 L 183 54 L 193 48 L 203 52" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
      <circle cx="254" cy="52" r="13" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="254" cy="52" r="4" fill="#2563eb" />
      {/* Fiber Mesh Topology Interconnections */}
      <path d="M 85 80 L 85 125 L 55 160" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 160 80 L 160 135" stroke="#2563eb" strokeWidth="2.5" />
      <path d="M 235 80 L 235 125 L 265 160" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 55 160 L 160 135 L 265 160" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.7" />
      {/* Router / Branch Node 1 */}
      <circle cx="55" cy="172" r="22" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
      <rect x="47" y="166" width="16" height="12" rx="2" fill="#3b82f6" />
      {/* Central Cloud Core Gateway */}
      <circle cx="160" cy="148" r="28" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
      <path d="M 151 148 C 149 141 157 135 163 138 C 168 134 176 138 175 145 C 180 146 180 153 174 155 L 149 155 C 144 155 144 148 151 148 Z" fill="#2563eb" />
      {/* Remote Office Node 2 */}
      <circle cx="265" cy="172" r="22" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
      <path d="M 257 172 L 273 172 M 265 164 L 265 180" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function SecurityIllustration() {
  return (
    <svg viewBox="0 0 320 230" fill="none" className="w-full h-full max-w-[340px] drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
      {/* Ambient Radar Rings */}
      <circle cx="160" cy="115" r="85" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="6 6" />
      <circle cx="160" cy="115" r="62" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.35" />
      {/* Main Hardened Security Shield */}
      <path
        d="M 160 26 L 222 55 V 120 C 222 165 160 198 160 198 C 160 198 98 165 98 120 V 55 Z"
        fill="#ffffff"
        stroke="#059669"
        strokeWidth="2.5"
      />
      {/* Inner Glowing Shield Core */}
      <path
        d="M 160 42 L 208 65 V 116 C 208 150 160 180 160 180 C 160 180 112 150 112 116 V 65 Z"
        fill="#ecfdf5"
        stroke="#10b981"
        strokeWidth="1.5"
      />
      {/* Biometric Padlock Symbol */}
      <rect x="139" y="106" width="42" height="36" rx="8" fill="#10b981" />
      <path d="M 147 106 V 92 C 147 85 152 79 160 79 C 168 79 173 85 173 92 V 106" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="160" cy="122" r="4.5" fill="#ffffff" />
      <path d="M 160 126.5 V 134" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      {/* Floating Firewall & Telemetry Badges */}
      <rect x="36" y="55" width="68" height="25" rx="6" fill="#ffffff" stroke="#10b981" strokeWidth="1.5" />
      <circle cx="48" cy="67.5" r="3" fill="#10b981" />
      <rect x="58" y="65" width="36" height="5" rx="2.5" fill="#34d399" />
      <rect x="216" y="158" width="76" height="25" rx="6" fill="#ffffff" stroke="#0d9488" strokeWidth="1.5" />
      <circle cx="228" cy="170.5" r="3" fill="#0d9488" />
      <rect x="238" y="168" width="42" height="5" rx="2.5" fill="#14b8a6" />
    </svg>
  )
}

function EnergyIllustration() {
  return (
    <svg viewBox="0 0 320 230" fill="none" className="w-full h-full max-w-[340px] drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
      {/* Solar Photovoltaic Array */}
      <g transform="translate(30, 35)">
        <polygon points="10,80 90,40 180,70 100,110" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <line x1="50" y1="60" x2="140" y2="90" stroke="#d97706" strokeWidth="1.5" />
        <line x1="70" y1="50" x2="160" y2="80" stroke="#d97706" strokeWidth="1.5" />
        <line x1="45" y1="95" x2="125" y2="55" stroke="#d97706" strokeWidth="1.5" />
      </g>
      {/* Sun Ray Generator */}
      <circle cx="68" cy="30" r="14" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2.5" />
      <path d="M 68 8 V 14 M 68 46 V 52 M 46 30 H 52 M 84 30 H 90 M 52 14 L 57 19 M 79 41 L 84 46 M 52 46 L 57 41 M 79 19 L 84 14" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      {/* Hybrid Inverter / Battery Storage System */}
      <rect x="200" y="75" width="88" height="108" rx="10" fill="#ffffff" stroke="#059669" strokeWidth="2" />
      <rect x="214" y="90" width="60" height="16" rx="4" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" />
      <circle cx="224" cy="98" r="3" fill="#10b981" />
      <circle cx="236" cy="98" r="3" fill="#3b82f6" />
      <circle cx="248" cy="98" r="3" fill="#f59e0b" />
      {/* Battery Level Indicators */}
      <rect x="214" y="118" width="60" height="8" rx="3" fill="#10b981" />
      <rect x="214" y="132" width="60" height="8" rx="3" fill="#10b981" />
      <rect x="214" y="146" width="60" height="8" rx="3" fill="#10b981" />
      <rect x="214" y="160" width="40" height="8" rx="3" fill="#34d399" />
      {/* Electric Lightning Bolt Pulse Connector */}
      <path d="M 155 100 L 140 130 H 160 L 145 160" stroke="#d97706" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TrainingIllustration() {
  return (
    <svg viewBox="0 0 320 230" fill="none" className="w-full h-full max-w-[340px] drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
      {/* Background terminal / learning deck */}
      <rect x="25" y="24" width="270" height="182" rx="14" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" />
      {/* Top Banner Bar */}
      <rect x="25" y="24" width="270" height="28" rx="14" fill="#f5f3ff" />
      <line x1="25" y1="52" x2="295" y2="52" stroke="#ede9fe" strokeWidth="1" />
      <circle cx="40" cy="38" r="3.5" fill="#a78bfa" />
      <circle cx="52" cy="38" r="3.5" fill="#7c3aed" />
      <rect x="68" y="34" width="80" height="8" rx="4" fill="#e2e8f0" />
      {/* Certification Gold Crest Badge */}
      <circle cx="95" cy="115" r="36" fill="#f5f3ff" stroke="#7c3aed" strokeWidth="2" />
      <circle cx="95" cy="115" r="28" fill="#ffffff" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3 3" />
      {/* Graduation Mortarboard Cap */}
      <path d="M 95 96 L 115 106 L 95 116 L 75 106 Z" fill="#7c3aed" />
      <path d="M 83 111 V 122 C 83 126 107 126 107 122 V 111" stroke="#6d28d9" strokeWidth="2" fill="none" />
      <path d="M 115 106 V 124" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
      <circle cx="115" cy="126" r="2.5" fill="#d97706" />
      {/* Curriculum Competency Bars */}
      <g transform="translate(150, 70)">
        <text x="0" y="10" fill="#334155" fontSize="9" fontFamily="monospace" fontWeight="bold">ORACLE / DB</text>
        <rect x="0" y="15" width="125" height="6" rx="3" fill="#ede9fe" />
        <rect x="0" y="15" width="110" height="6" rx="3" fill="#7c3aed" />

        <text x="0" y="38" fill="#334155" fontSize="9" fontFamily="monospace" fontWeight="bold">MICROSOFT CLOUD</text>
        <rect x="0" y="43" width="125" height="6" rx="3" fill="#ede9fe" />
        <rect x="0" y="43" width="118" height="6" rx="3" fill="#8b5cf6" />

        <text x="0" y="66" fill="#334155" fontSize="9" fontFamily="monospace" fontWeight="bold">CYBER DEFENSE</text>
        <rect x="0" y="71" width="125" height="6" rx="3" fill="#ede9fe" />
        <rect x="0" y="71" width="102" height="6" rx="3" fill="#a855f7" />
      </g>
      {/* Authorized testing seal badge */}
      <rect x="150" y="166" width="125" height="22" rx="6" fill="#f5f3ff" stroke="#7c3aed" strokeWidth="1.5" />
      <circle cx="164" cy="177" r="4" fill="#10b981" />
      <text x="174" y="180" fill="#6d28d9" fontSize="8" fontFamily="monospace" fontWeight="bold">AUTHORIZED CENTER</text>
    </svg>
  )
}

function EVIllustration() {
  return (
    <svg viewBox="0 0 320 230" fill="none" className="w-full h-full max-w-[340px] drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
      {/* EV Charging Station Pedestal */}
      <rect x="50" y="35" width="85" height="160" rx="14" fill="#ffffff" stroke="#059669" strokeWidth="2.5" />
      {/* Top Status Screen */}
      <rect x="62" y="50" width="61" height="35" rx="6" fill="#ecfdf5" stroke="#059669" strokeWidth="1" />
      <text x="70" y="66" fill="#059669" fontSize="11" fontFamily="monospace" fontWeight="bold">100%</text>
      <text x="70" y="78" fill="#10b981" fontSize="8" fontFamily="sans-serif" fontWeight="bold">FAST CHARGE</text>
      {/* Pulse Status Ring */}
      <circle cx="92.5" cy="115" r="16" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
      <path d="M 92.5 106 L 87 116 H 93.5 L 91.5 124 L 98 114 H 92 L 94 106 Z" fill="#059669" />
      {/* Cable Connector dock */}
      <rect x="68" y="145" width="49" height="35" rx="5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
      {/* Heavy-Duty Flexible Cable */}
      <path d="M 117 165 C 150 165 155 190 190 190 C 220 190 230 155 240 135" stroke="#059669" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M 117 165 C 150 165 155 190 190 190 C 220 190 230 155 240 135" stroke="#34d399" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="6 4" />
      {/* Vehicle Connector Plug */}
      <g transform="translate(230, 95) rotate(-25)">
        <rect x="0" y="0" width="35" height="50" rx="7" fill="#ffffff" stroke="#059669" strokeWidth="2" />
        <rect x="6" y="50" width="23" height="15" rx="3" fill="#ecfdf5" />
        <circle cx="12" cy="16" r="4" fill="#059669" />
        <circle cx="23" cy="16" r="4" fill="#059669" />
        <circle cx="12" cy="30" r="3" fill="#10b981" />
        <circle cx="23" cy="30" r="3" fill="#10b981" />
      </g>
      {/* Electric Energy Surge */}
      <path d="M 210 50 L 225 35 M 240 55 L 260 40 M 235 75 L 255 70" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />
    </svg>
  )
}

function getPillarIllustration(pillar: PillarItem, idx: number) {
  const icon = (pillar.icon || '').toLowerCase()
  const title = (pillar.title || '').toLowerCase()

  // 1. Training / Professional Development (Always for pillar 4 / idx 3 if training)
  if (
    icon === 'training' ||
    title.includes('training') ||
    title.includes('development') ||
    title.includes('professional') ||
    idx === 3
  ) {
    return <TrainingIllustration />
  }

  // 2. Software / Digital Business (Pillar 1 / idx 0)
  if (
    icon === 'software' ||
    title.includes('software') ||
    title.includes('digital') ||
    idx === 0
  ) {
    return <SoftwareIllustration />
  }

  // 3. Network / Enterprise IT / Cybersecurity (Pillar 2 / idx 1)
  if (
    icon === 'network' ||
    title.includes('network') ||
    title.includes('cyber') ||
    idx === 1
  ) {
    return <NetworkIllustration />
  }

  // 4. EV Charging Infrastructure (Only if specifically EV charging, not matching 'development')
  if (
    icon === 'ev' ||
    title.includes('charging') ||
    title.includes('electric') ||
    /\bev\b/i.test(title)
  ) {
    return <EVIllustration />
  }

  // 5. Energy / Solar Infrastructure (Pillar 3 / idx 2)
  if (
    icon === 'energy' ||
    icon === 'solar' ||
    title.includes('energy') ||
    title.includes('solar') ||
    title.includes('power') ||
    idx === 2
  ) {
    return <EnergyIllustration />
  }

  if (icon === 'security' || title.includes('security')) {
    return <SecurityIllustration />
  }

  return <TrainingIllustration />
}

// Curated high-resolution professional images for training tracks
const trackImages: Record<string, string> = {
  oracle: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  microsoft: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  cybersecurity: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
  project: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
  default: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
}

function getTrackImage(title: string): string {
  const lower = (title || '').toLowerCase()
  if (lower.includes('oracle') || lower.includes('database') || lower.includes('sql')) {
    return trackImages.oracle
  }
  if (lower.includes('microsoft') || lower.includes('azure') || lower.includes('windows')) {
    return trackImages.microsoft
  }
  if (lower.includes('security') || lower.includes('cyber') || lower.includes('defense')) {
    return trackImages.cybersecurity
  }
  if (lower.includes('project') || lower.includes('management') || lower.includes('pmp') || lower.includes('agile')) {
    return trackImages.project
  }
  return trackImages.default
}

// ============================================================================
// TRAINING TRACKS COMPONENT (http://localhost:3000/training)
// Each track is an image; on hover brightness decreases and text reveals!
// ============================================================================
function TrainingTracksComponent({
  heading,
  description,
  pillars = [],
}: PillarsBlockProps) {
  return (
    <section className="container py-8 md:py-12 relative overflow-hidden font-sans">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[55rem] h-[30rem] bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {(heading || description) && (
        <div className="max-w-3xl mb-8 md:mb-10">
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

      {/* Grid of Image Track Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar, idx) => {
          const imageUrl = getTrackImage(pillar.title)
          const iconType = pillar.icon || 'software'
          const IconComponent = iconMap[iconType] || Code2
          const trackNumber = String(idx + 1).padStart(2, '0')

          return (
            <div
              key={idx}
              className="group relative h-[360px] sm:h-[400px] md:h-[430px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 bg-slate-950 flex flex-col justify-end p-6 sm:p-8 cursor-pointer"
            >
              {/* Background Image: Brightness decreases on hover */}
              <img
                src={imageUrl}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 brightness-95 group-hover:brightness-[0.25]"
                loading="lazy"
              />

              {/* Dynamic Gradient Shroud */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-950/10 group-hover:from-slate-950/95 group-hover:via-slate-950/85 group-hover:to-slate-950/70 transition-all duration-500 pointer-events-none" />

              {/* Top Track Pill */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 shadow-sm">
                  TRACK {trackNumber}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              {/* Text Content: Revealed smoothly when hover */}
              <div className="relative z-10 flex flex-col justify-end">
                {/* Title is always visible */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {pillar.title}
                </h3>

                {/* Description: Expands & reveals on hover */}
                <p className="text-slate-300 text-sm leading-relaxed mb-0 group-hover:mb-4 max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden font-normal">
                  {pillar.description}
                </p>

                {/* Checklist items: Expand & reveal on hover */}
                {pillar.items && pillar.items.length > 0 && (
                  <ul className="space-y-2 mb-0 group-hover:mb-5 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden border-t border-white/15 pt-0 group-hover:pt-3">
                    {pillar.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA Link: Shows on hover */}
                {pillar.cta && (
                  <div className="max-h-0 group-hover:max-h-14 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden pt-0 group-hover:pt-2">
                    <CMSLink
                      {...pillar.cta}
                      label={null}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-emerald-400 transition-all shadow-md group/link"
                    >
                      <span>{pillar.cta.label || 'Inquire Track'}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </CMSLink>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ============================================================================
// STANDARD PILLARS COMPONENT (HOME PAGE & SOLUTIONS PAGE)
// Reversible alternating layout:
// - Card 1: Text on Left, SVG on Right
// - Card 2: SVG on Left, Text on Right
// - Card 3: Text on Left, SVG on Right
// - Card 4: SVG on Left, Text on Right
// ============================================================================
function StandardPillarsComponent({
  heading,
  description,
  pillars = [],
}: PillarsBlockProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(pillars.length).fill(false),
  )

  useEffect(() => {
    const cardEls = document.querySelectorAll('.pillar-card-item')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = entry.target.getAttribute('data-card-index')
          if (indexAttr !== null) {
            const idx = parseInt(indexAttr, 10)
            setVisibleCards((prev) => {
              const next = [...prev]
              next[idx] = entry.isIntersecting
              return next
            })
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      },
    )

    cardEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pillars.length])

  return (
    <section className="container py-8 md:py-14 relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {(heading || description) && (
        <div className="max-w-3xl mb-8 md:mb-12">
          {heading && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-3">
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

      {/* Alternating Reversible 4-Card Stack: Text Left / SVG Right <-> SVG Left / Text Right */}
      <div className="space-y-6 sm:space-y-8">
        {pillars.map((pillar, idx) => {
          const iconType = pillar.icon || 'software'
          const colors = colorMap[iconType as keyof typeof colorMap] || colorMap.software
          const isHovered = hoveredIdx === idx
          const isCardVisible = visibleCards[idx]

          // Reversible pattern:
          // Card 1 (idx 0): Text LEFT, SVG RIGHT (isSvgRight = true)
          // Card 2 (idx 1): SVG LEFT, Text RIGHT (isSvgRight = false)
          // Card 3 (idx 2): Text LEFT, SVG RIGHT (isSvgRight = true)
          // Card 4 (idx 3): SVG LEFT, Text RIGHT (isSvgRight = false)
          const isSvgRight = idx % 2 === 0
          const trackNumber = String(idx + 1).padStart(2, '0')
          const IconComponent = iconMap[iconType as keyof typeof iconMap] || Code2

          // Smooth vertical reveal animation with index stagger
          const entranceClass = isCardVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-6 scale-[0.99]'

          return (
            <div
              key={idx}
              data-card-index={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`pillar-card-item group relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.08)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden p-6 sm:p-8 md:p-10 ${
                colors.border
              } ${colors.glow} ${entranceClass} ${isHovered ? '-translate-y-1.5' : ''}`}
              style={{
                transitionDelay: `${(idx % 4) * 120}ms`,
              }}
            >
              {/* Top Accent Gradient Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.topBar} transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-x-100' : 'opacity-80 scale-x-100'
                }`}
              />

              {/* Prismatic Shimmer Sweep on Hover */}
              <div className="card-shimmer-effect absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Reversible Flex Container: Text Left / SVG Right (Card 1,3) <-> SVG Left / Text Right (Card 2,4) */}
              <div
                className={`flex flex-col ${
                  isSvgRight ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center justify-between gap-8 lg:gap-12`}
              >
                {/* Text Content Column: Slides in smoothly */}
                <div
                  className={`w-full lg:w-7/12 flex flex-col justify-between transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isCardVisible
                      ? 'opacity-100 translate-x-0'
                      : isSvgRight
                        ? 'opacity-0 -translate-x-10'
                        : 'opacity-0 translate-x-10'
                  }`}
                >
                  <div>
                    {/* Pillar Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${colors.tagBg} transition-all duration-300 flex items-center gap-1.5`}
                      >
                        <IconComponent className="w-3.5 h-3.5" />
                        PILLAR {trackNumber}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-emerald-700 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                      {pillar.description}
                    </p>

                    {/* Feature Checklist Grid */}
                    {pillar.items && pillar.items.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-5 border-t border-slate-100">
                        {pillar.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium transition-transform duration-200 group-hover:translate-x-0.5"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 mt-0.5 shrink-0 ${colors.itemCheck} transition-transform duration-200 group-hover:scale-110`}
                            />
                            <span>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Action Button */}
                  {pillar.cta && (
                    <div className="pt-2">
                      <CMSLink
                        {...pillar.cta}
                        label={null}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 hover:bg-emerald-600 transition-all shadow-md group/link`}
                      >
                        <span>{pillar.cta.label || 'Explore Capabilities'}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1.5" />
                      </CMSLink>
                    </div>
                  )}
                </div>

                {/* SVG Illustration Column: 100% Transparent, Animated from Left or Right */}
                <div className="w-full lg:w-5/12 flex items-center justify-center shrink-0">
                  <div
                    className={`w-full max-w-[360px] p-2 flex items-center justify-center relative select-none transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isCardVisible
                        ? 'opacity-100 translate-x-0 scale-100'
                        : isSvgRight
                          ? 'opacity-0 translate-x-16 scale-95'
                          : 'opacity-0 -translate-x-16 scale-95'
                    } group-hover:scale-105 group-hover:-translate-y-1`}
                  >
                    {/* Vector Illustration */}
                    {getPillarIllustration(pillar, idx)}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ============================================================================
// MAIN EXPORT
// Dispatches to TrainingTracksComponent for /training, StandardPillarsComponent for other pages
// ============================================================================
export const PillarsBlockComponent: React.FC<PillarsBlockProps> = (props) => {
  const { heading, tagline, pillars = [] } = props

  const isTrainingPage = Boolean(
    heading?.toLowerCase().includes('track') ||
      heading?.toLowerCase().includes('training') ||
      tagline?.toLowerCase().includes('track') ||
      tagline?.toLowerCase().includes('training') ||
      pillars.some((p) => p.title?.toLowerCase().includes('oracle')),
  )

  if (isTrainingPage) {
    return <TrainingTracksComponent {...props} />
  }

  return <StandardPillarsComponent {...props} />
}
