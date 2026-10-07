import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import type { Customer, LogoBannerBlock, Technology } from '@/payload-types'

// Partner Logo renderer component
// Partner Logo renderer component - large, bright, crisp logos by default
function PartnerLogoBadge({ item }: { item: any }) {
  const name = item.name || 'Partner'
  const logoUrl =
    typeof item.logo === 'object' && item.logo?.url
      ? item.logo.url
      : typeof item.logo === 'string'
      ? item.logo
      : null

  if (logoUrl) {
    return (
      <div className="h-12 md:h-14 w-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <img
          src={logoUrl}
          alt={name}
          className="h-full w-auto max-w-[160px] object-contain opacity-100 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    )
  }

  // Pre-configured bright brand vector emblems for Ethiopian institutions
  const code = (item.logoType || item.name || '').toLowerCase()

  if (code.includes('revenue') || code.includes('mor')) {
    return (
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/25 flex items-center justify-center group-hover:scale-110 transition-all duration-300" title={name}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
    )
  }

  if (code.includes('customs') || code.includes('ecc')) {
    return (
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-600/25 flex items-center justify-center group-hover:scale-110 transition-all duration-300" title={name}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
    )
  }

  if (code.includes('commercial bank') || code.includes('cbe')) {
    return (
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-700 to-fuchsia-900 text-white shadow-md shadow-purple-700/25 flex items-center justify-center font-black text-sm md:text-base font-mono group-hover:scale-110 transition-all duration-300" title={name}>
        CBE
      </div>
    )
  }

  if (code.includes('dashen')) {
    return (
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-md shadow-indigo-600/25 flex items-center justify-center group-hover:scale-110 transition-all duration-300" title={name}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 22 22 22" />
          <line x1="12" y1="11" x2="12" y2="22" />
        </svg>
      </div>
    )
  }

  if (code.includes('telecom') || code.includes('ethio telecom')) {
    return (
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-md shadow-emerald-600/25 flex items-center justify-center group-hover:scale-110 transition-all duration-300" title={name}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M4.93 4.93a10 10 0 0 1 14.14 0" />
          <path d="M7.76 7.76a6 6 0 0 1 8.48 0" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <path d="M12 14v8" />
        </svg>
      </div>
    )
  }

  if (code.includes('electric') || code.includes('eeu')) {
    return (
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 shadow-md shadow-amber-400/25 flex items-center justify-center group-hover:scale-110 transition-all duration-300" title={name}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 fill-current">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>
    )
  }

  if (code.includes('bottling') || code.includes('coca')) {
    return (
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-md shadow-red-600/25 flex items-center justify-center font-black text-xs md:text-sm font-mono group-hover:scale-110 transition-all duration-300" title={name}>
        EABC
      </div>
    )
  }

  if (code.includes('awach')) {
    return (
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-teal-700 text-white shadow-md shadow-teal-600/25 flex items-center justify-center group-hover:scale-110 transition-all duration-300" title={name}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="9" cy="12" r="5" />
          <circle cx="15" cy="12" r="5" />
        </svg>
      </div>
    )
  }

  if (code.includes('oromia')) {
    return (
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-rose-600 to-amber-700 text-white shadow-md shadow-rose-700/25 flex items-center justify-center font-black text-xs md:text-sm font-mono group-hover:scale-110 transition-all duration-300" title={name}>
        OB
      </div>
    )
  }

  if (code.includes('health') || code.includes('moh')) {
    return (
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-700 text-white shadow-md shadow-green-600/25 flex items-center justify-center group-hover:scale-110 transition-all duration-300" title={name}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
    )
  }

  // Fallback monogram
  const initials = (item.name || 'QP')
    .split(' ')
    .map((w: string) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-600/25 flex items-center justify-center font-black text-sm font-mono group-hover:scale-110 transition-all duration-300" title={name}>
      {initials}
    </div>
  )
}

import { unstable_cache } from 'next/cache'

const getCachedLogos = (displayType: string) =>
  unstable_cache(
    async () => {
      const payload = await getPayload({ config: configPromise })
      const collection = displayType === 'customers' ? 'customers' : 'technologies'
      const result = await payload.find({
        collection,
        depth: 1,
        limit: 24,
        sort: 'sortOrder',
        where: displayType === 'customers' ? { featured: { equals: true } } : {},
      })
      return (result.docs || []) as (Customer | Technology)[]
    },
    ['logo-banner', displayType],
    {
      tags: [displayType === 'customers' ? 'customers' : 'technologies'],
      revalidate: 300,
    },
  )()

async function LogoBannerBlockInner({
  displayType,
  heading,
}: Pick<LogoBannerBlock, 'displayType' | 'heading'>) {
  const docs = await getCachedLogos(displayType || 'customers')

  // Verified institutions & global enterprise partners
  const defaultInstitutions = [
    { name: 'Ministry of Revenues (MOR)', type: 'Government · E-Invoicing', logoType: 'mor' },
    { name: 'Ethiopian Customs Commission', type: 'Government · Biometrics & Network', logoType: 'ecc' },
    { name: 'Commercial Bank of Ethiopia', type: 'Financial · Core Infrastructure', logoType: 'cbe' },
    { name: 'Dashen Bank', type: 'Financial · Infrastructure & Security', logoType: 'dashen' },
    { name: 'Ethio Telecom', type: 'Telecom · Enterprise Connectivity', logoType: 'telecom' },
    { name: 'Ethiopian Electric Utility (EEU)', type: 'Energy · Solar & ICT', logoType: 'eeu' },
    { name: 'East Africa Bottling (Coca-Cola)', type: 'Enterprise · Power Systems', logoType: 'eabc' },
    { name: 'Awach SACCO', type: 'Financial · Core ERP & Membership', logoType: 'awach' },
    { name: 'Oromia Bank', type: 'Financial · Enterprise IT', logoType: 'ob' },
    { name: 'Ministry of Health', type: 'Government · Data Center & Security', logoType: 'moh' },
    { name: 'Cisco Systems', type: 'Networking · Enterprise Partner', logoType: 'cisco' },
    { name: 'Microsoft Enterprise', type: 'Cloud & Software', logoType: 'microsoft' },
    { name: 'Oracle Corporation', type: 'Database & ERP Systems', logoType: 'oracle' },
    { name: 'Fortinet Security', type: 'Cybersecurity Firewall', logoType: 'fortinet' },
    { name: 'Amazon Web Services', type: 'Cloud Infrastructure', logoType: 'aws' },
    { name: 'Red Hat Enterprise', type: 'Enterprise Linux & OpenShift', logoType: 'redhat' },
    { name: 'Dell Technologies', type: 'Servers & Storage', logoType: 'dell' },
    { name: 'Huawei Enterprise', type: 'Telecommunications & ICT', logoType: 'huawei' },
  ]

  const pool = docs.length > 0 ? docs : defaultInstitutions

  // Distribute items evenly and deterministically into 3 balanced rows
  const line1Base: (Customer | Technology | (typeof defaultInstitutions)[number])[] = []
  const line2Base: (Customer | Technology | (typeof defaultInstitutions)[number])[] = []
  const line3Base: (Customer | Technology | (typeof defaultInstitutions)[number])[] = []

  pool.forEach((item, idx) => {
    if (idx % 3 === 0) line1Base.push(item)
    else if (idx % 3 === 1) line2Base.push(item)
    else line3Base.push(item)
  })

  // Balance all 3 rows to have the exact same item count
  const targetCount = Math.max(line1Base.length, line2Base.length, line3Base.length)
  while (line1Base.length < targetCount) line1Base.push(pool[line1Base.length % pool.length])
  while (line2Base.length < targetCount) line2Base.push(pool[line2Base.length % pool.length])
  while (line3Base.length < targetCount) line3Base.push(pool[line3Base.length % pool.length])

  // Duplicate each base line 4 times (2 identical halves of 2 sets each).
  // Because keyframes translateX(-50%) shifts by exactly half (2 full base sets),
  // the looped position at -50% is identical to 0%, making the infinite loop mathematically seamless.
  const line1 = [...line1Base, ...line1Base, ...line1Base, ...line1Base]
  const line2 = [...line2Base, ...line2Base, ...line2Base, ...line2Base]
  const line3 = [...line3Base, ...line3Base, ...line3Base, ...line3Base]

  return (
    <div className="w-full overflow-hidden">
      {heading && (
        <div className="container mb-6 text-center">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
            {heading}
          </p>
        </div>
      )}

      {/* 3 Continuous Scrolling Marquee Lines */}
      <div className="flex flex-col gap-4 md:gap-6 py-2">
        {/* Line 1 (Top): Moves to the LEFT */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee-left flex items-center gap-10 md:gap-14 py-1">
            {line1.map((item: any, idx: number) => {
              const name = 'name' in item ? item.name : ''
              return (
                <div
                  key={`line1-${idx}`}
                  className="shrink-0 flex items-center justify-center group cursor-pointer"
                  title={name}
                >
                  <PartnerLogoBadge item={item} />
                </div>
              )
            })}
          </div>
        </div>

        {/* Line 2 (Middle): Moves to the RIGHT */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee-right flex items-center gap-10 md:gap-14 py-1">
            {line2.map((item: any, idx: number) => {
              const name = 'name' in item ? item.name : ''
              return (
                <div
                  key={`line2-${idx}`}
                  className="shrink-0 flex items-center justify-center group cursor-pointer"
                  title={name}
                >
                  <PartnerLogoBadge item={item} />
                </div>
              )
            })}
          </div>
        </div>

        {/* Line 3 (Bottom): Moves to the LEFT */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee-left flex items-center gap-10 md:gap-14 py-1">
            {line3.map((item: any, idx: number) => {
              const name = 'name' in item ? item.name : ''
              return (
                <div
                  key={`line3-${idx}`}
                  className="shrink-0 flex items-center justify-center group cursor-pointer"
                  title={name}
                >
                  <PartnerLogoBadge item={item} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export const LogoBannerBlockComponent: React.FC<LogoBannerBlock> = async (props) => {
  const inner = await LogoBannerBlockInner({
    displayType: props.displayType,
    heading: props.heading,
  })
  return (
    <section className="border-y border-slate-200/80 bg-slate-50/70 py-6">
      {inner}
    </section>
  )
}
