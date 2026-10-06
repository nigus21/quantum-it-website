import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer as FooterType } from '@/payload-types'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { getLocalizedPath, type Locale } from '@/i18n/config'

export async function Footer({ locale = 'en' }: { locale?: Locale }) {
  const footerData: FooterType = await getCachedGlobal('footer', 1, locale)

  const columns = footerData?.columns || []
  const legalLine =
    footerData?.legalLine ||
    '© 2026 Quantum IT & Security Solutions PLC. All Rights Reserved.'
  const socialLinks = footerData?.socialLinks || []

  const homeHref = getLocalizedPath(locale, '/')

  return (
    <footer className="mt-auto border-t border-slate-200/90 bg-slate-50/70 text-slate-800">
      <div className="container py-12 md:py-16 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link className="flex items-center shrink-0" href={homeHref}>
              <Logo />
            </Link>
            <p className="text-sm text-emerald-700 font-bold tracking-wide">
              Powering Digital Transformation. Securing Enterprise. Enabling Sustainable Growth.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              One accountable technology partner for enterprise software, resilient networks, cybersecurity, cloud infrastructure, solar energy and EV charging across Ethiopia.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <ThemeSelector />
              {socialLinks.length > 0 && (
                <ul className="flex gap-3">
                  {socialLinks.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.url ?? '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase font-mono px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-300 transition-colors shadow-xs"
                        aria-label={item.platform ?? 'Social link'}
                      >
                        {item.platform}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Dynamic Link Columns from CMS */}
          {columns.length > 0 ? (
            columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-3">
                {column.heading && (
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                    {column.heading}
                  </span>
                )}
                <ul className="flex flex-col gap-2">
                  {column.links?.map((item, i) => (
                    <li key={i}>
                      <CMSLink
                        className="text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                        {...item.link}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <>
              {/* Default Solutions column */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Solutions
                </span>
                <ul className="flex flex-col gap-2 text-sm text-slate-600">
                  <li><Link href="/solutions/software#erp" className="hover:text-emerald-600 transition-colors">ERP Systems</Link></li>
                  <li><Link href="/solutions/software#biometric-attendance" className="hover:text-emerald-600 transition-colors">Biometric Attendance</Link></li>
                  <li><Link href="/solutions/software#e-invoicing" className="hover:text-emerald-600 transition-colors">Electronic Invoicing</Link></li>
                  <li><Link href="/solutions/web-and-digital-marketing" className="hover:text-emerald-600 transition-colors">Web &amp; Digital Marketing</Link></li>
                  <li><Link href="/solutions/enterprise-networks" className="hover:text-emerald-600 transition-colors">Enterprise Networking</Link></li>
                  <li><Link href="/solutions/systems-and-cloud" className="hover:text-emerald-600 transition-colors">Cloud &amp; Systems</Link></li>
                  <li><Link href="/solutions/cybersecurity" className="hover:text-emerald-600 transition-colors">Cybersecurity Solutions</Link></li>
                  <li><Link href="/solutions/solar-energy" className="hover:text-emerald-600 transition-colors">Solar Systems</Link></li>
                  <li><Link href="/solutions/ev-charging" className="hover:text-emerald-600 transition-colors">EV Charging</Link></li>
                </ul>
              </div>

              {/* Default Services column */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Services
                </span>
                <ul className="flex flex-col gap-2 text-sm text-slate-600">
                  <li><Link href="/solutions" className="hover:text-emerald-600 transition-colors">Technology Consulting</Link></li>
                  <li><Link href="/training" className="hover:text-emerald-600 transition-colors">Professional Training</Link></li>
                  <li><Link href="/exam-center" className="hover:text-emerald-600 transition-colors">Certification Preparation</Link></li>
                  <li><Link href="/exam-center" className="hover:text-emerald-600 transition-colors">Examination Services</Link></li>
                  <li><Link href="/delivery-approach" className="hover:text-emerald-600 transition-colors">Delivery Approach</Link></li>
                  <li><Link href="/why-quantum" className="hover:text-emerald-600 transition-colors">Why Quantum</Link></li>
                  <li><Link href="/projects" className="hover:text-emerald-600 transition-colors">Featured Projects</Link></li>
                </ul>
              </div>
            </>
          )}

          {/* Contact Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Contact
            </span>
            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+251982313233" className="hover:text-emerald-600 transition-colors">
                    +251-982-31-32-33
                  </a>
                  <a href="tel:+251980116187" className="hover:text-emerald-600 transition-colors">
                    +251-980-11-61-87
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="mailto:henok@quantumitss.com" className="hover:text-emerald-600 transition-colors">
                    henok@quantumitss.com
                  </a>
                  <a href="mailto:marketing@quantumitss.com" className="hover:text-emerald-600 transition-colors">
                    marketing@quantumitss.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>www.quantumitss.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-xs text-slate-500">
          <p>{legalLine}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-emerald-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-emerald-600 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
