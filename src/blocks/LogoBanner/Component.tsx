import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import type { Customer, LogoBannerBlock, Technology } from '@/payload-types'

// Partner Logo renderer component
function PartnerLogoBadge({ item }: { item: any }) {
  // If user uploaded an actual media image in Payload Admin
  const logoUrl =
    typeof item.logo === 'object' && item.logo?.url
      ? item.logo.url
      : typeof item.logo === 'string'
      ? item.logo
      : null

  if (logoUrl) {
    return (
      <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 p-1 overflow-hidden group-hover:border-emerald-300 transition-colors shadow-xs">
        <img
          src={logoUrl}
          alt={item.name || 'Partner Logo'}
          className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    )
  }

  // Pre-configured brand SVG vector emblems for Ethiopian institutions
  const code = (item.logoType || item.name || '').toLowerCase()

  if (code.includes('revenue') || code.includes('mor')) {
    return (
      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/90 flex items-center justify-center text-amber-800 shadow-xs group-hover:scale-110 transition-transform">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
    )
  }

  if (code.includes('customs') || code.includes('ecc')) {
    return (
      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/90 flex items-center justify-center text-blue-700 shadow-xs group-hover:scale-110 transition-transform">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
    )
  }

  if (code.includes('commercial bank') || code.includes('cbe')) {
    return (
      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/90 flex items-center justify-center text-purple-800 font-black text-xs font-mono shadow-xs group-hover:scale-110 transition-transform">
        CBE
      </div>
    )
  }

  if (code.includes('dashen')) {
    return (
      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-100 border border-indigo-200/90 flex items-center justify-center text-indigo-700 shadow-xs group-hover:scale-110 transition-transform">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 22 22 22" />
          <line x1="12" y1="11" x2="12" y2="22" />
        </svg>
      </div>
    )
  }

  if (code.includes('telecom') || code.includes('ethio telecom')) {
    return (
      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100 border border-teal-200/90 flex items-center justify-center text-teal-700 shadow-xs group-hover:scale-110 transition-transform">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4.93 4.93a10 10 0 0 1 14.14 0" />
          <path d="M7.76 7.76a6 6 0 0 1 8.48 0" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path d="M12 14v8" />
        </svg>
      </div>
    )
  }

  if (code.includes('electric') || code.includes('eeu')) {
    return (
      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-100 border border-yellow-300/80 flex items-center justify-center text-amber-600 shadow-xs group-hover:scale-110 transition-transform">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>
    )
  }

  if (code.includes('bottling') || code.includes('coca')) {
    return (
      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200/90 flex items-center justify-center text-red-700 font-black text-[11px] font-mono shadow-xs group-hover:scale-110 transition-transform">
        EABC
      </div>
    )
  }

  if (code.includes('awach')) {
    return (
      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-100 border border-cyan-200/90 flex items-center justify-center text-cyan-800 shadow-xs group-hover:scale-110 transition-transform">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="12" r="5" />
          <circle cx="15" cy="12" r="5" />
        </svg>
      </div>
    )
  }

  if (code.includes('oromia')) {
    return (
      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-rose-50 to-amber-100 border border-amber-200/90 flex items-center justify-center text-amber-900 font-black text-xs font-mono shadow-xs group-hover:scale-110 transition-transform">
        OB
      </div>
    )
  }

  if (code.includes('health') || code.includes('moh')) {
    return (
      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-emerald-50 to-green-100 border border-emerald-200/90 flex items-center justify-center text-emerald-700 shadow-xs group-hover:scale-110 transition-transform">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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
    <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100 border border-emerald-200/90 flex items-center justify-center text-emerald-800 font-black text-xs font-mono shadow-xs group-hover:scale-110 transition-transform">
      {initials}
    </div>
  )
}

async function LogoBannerBlockInner({
  displayType,
  heading,
}: Pick<LogoBannerBlock, 'displayType' | 'heading'>) {
  const payload = await getPayload({ config: configPromise })
  const collection = displayType === 'customers' ? 'customers' : 'technologies'

  const result = await payload.find({
    collection,
    depth: 1,
    limit: 24,
    sort: 'sortOrder',
    where:
      displayType === 'customers'
        ? { featured: { equals: true } }
        : {},
  })

  const docs = (result.docs || []) as (Customer | Technology)[]

  // Verified institutions from source document
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
  ]

  const itemsToRender = docs.length > 0 ? docs : defaultInstitutions

  return (
    <div className="w-full overflow-hidden">
      {heading && (
        <div className="container mb-6 text-center">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500">
            {heading}
          </p>
        </div>
      )}

      {/* Infinite Scrolling Marquee Track with gradient fade masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex items-center gap-6 py-2">
          {/* First loop */}
          {itemsToRender.map((item: any, idx: number) => {
            const name = 'name' in item ? item.name : ''
            const type = item.type || ''

            return (
              <div
                key={`loop1-${idx}`}
                className="shrink-0 px-5 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)] hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex items-center gap-3.5 group cursor-default"
              >
                <PartnerLogoBadge item={item} />
                <div>
                  <span className="text-sm font-bold text-slate-900 tracking-wide block group-hover:text-emerald-700 transition-colors">
                    {name}
                  </span>
                  {type && (
                    <span className="text-[11px] text-slate-500 font-medium block">
                      {type}
                    </span>
                  )}
                </div>
              </div>
            )
          })}

          {/* Duplicate loop for infinite continuous scroll */}
          {itemsToRender.map((item: any, idx: number) => {
            const name = 'name' in item ? item.name : ''
            const type = item.type || ''

            return (
              <div
                key={`loop2-${idx}`}
                className="shrink-0 px-5 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)] hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex items-center gap-3.5 group cursor-default"
              >
                <PartnerLogoBadge item={item} />
                <div>
                  <span className="text-sm font-bold text-slate-900 tracking-wide block group-hover:text-emerald-700 transition-colors">
                    {name}
                  </span>
                  {type && (
                    <span className="text-[11px] text-slate-500 font-medium block">
                      {type}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
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
