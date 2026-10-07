'use client'

import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { prefixWithLocale } from '@/i18n/locale'
import type { Locale } from '@/i18n/config'

export const HeaderNav: React.FC<{ data: HeaderType; locale?: Locale }> = ({
  data,
  locale = 'en',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Lock body scroll when mobile menu is open to prevent double scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(index)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 180)
  }

  const toggleDropdown = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown((prev) => (prev === index ? null : index))
  }

  const toggleMobileDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index))
  }

  const navItems = data?.navItems || []
  const ctaButtons = data?.ctaButtons || []

  return (
    <div ref={navRef}>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        {navItems.map((item, i) => {
          const hasDropdown =
            Boolean((item as any).enableDropdown) &&
            Array.isArray((item as any).dropdownItems) &&
            (item as any).dropdownItems.length > 0

          if (!hasDropdown) {
            return (
              <div key={i}>
                <CMSLink
                  {...item.link}
                  appearance="link"
                  className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
                />
              </div>
            )
          }

          return (
            <div
              key={i}
              className="relative group py-2"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDropdown(i)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-emerald-600 group-hover:text-emerald-600 transition-colors cursor-pointer py-1"
                aria-expanded={openDropdown === i}
              >
                <span>{item.link?.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-400 group-hover:text-emerald-600 ${
                    openDropdown === i ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>

              {/* Dropdown container with 0-gap bridge */}
              <div
                className={`absolute left-0 top-full pt-1.5 w-80 transition-all duration-150 z-50 ${
                  openDropdown === i
                    ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                    : 'opacity-0 -translate-y-1 pointer-events-none invisible'
                }`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Visual dropdown panel */}
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                  <div className="space-y-1">
                    {(item as any).dropdownItems.map((sub: any, subIdx: number) => (
                      <div key={subIdx} onClick={() => setOpenDropdown(null)}>
                        <CMSLink
                          {...sub.link}
                          appearance="link"
                          className="block px-3 py-2 rounded-xl hover:bg-emerald-50 text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* Header CTAs */}
        {ctaButtons.length > 0 ? (
          ctaButtons.map(({ link }, i) => (
            <CMSLink
              key={i}
              {...link}
              size="sm"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-5 py-2.5 rounded-full text-xs shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all"
            />
          ))
        ) : (
          <Link
            href={prefixWithLocale('/request-consultation', locale)}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-5 py-2.5 rounded-full text-xs shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all inline-block"
          >
            Book a Consultation
          </Link>
        )}
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className="flex lg:hidden items-center">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm hover:border-emerald-300 transition-colors cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-600" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer rendered via portal to escape header backdrop containment */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-x-0 top-[65px] bottom-0 bg-white z-[99999] flex flex-col justify-between overflow-y-auto lg:hidden border-t border-slate-200 shadow-2xl">
            <div className="p-6 space-y-2">
              {navItems.map((item, i) => {
                const hasDropdown =
                  Boolean((item as any).enableDropdown) &&
                  Array.isArray((item as any).dropdownItems) &&
                  (item as any).dropdownItems.length > 0

                if (!hasDropdown) {
                  return (
                    <div
                      key={i}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3 border-b border-slate-100"
                    >
                      <CMSLink
                        {...item.link}
                        appearance="link"
                        className="text-base font-semibold text-slate-800 hover:text-emerald-600 block"
                      />
                    </div>
                  )
                }

                const isOpen = openDropdown === i

                return (
                  <div key={i} className="py-1 border-b border-slate-100">
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(i)}
                      className="w-full flex items-center justify-between text-base font-semibold text-slate-800 py-3 cursor-pointer"
                    >
                      <span>{item.link?.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="pl-2 py-2 space-y-1.5 bg-slate-50/80 rounded-xl my-1 border border-slate-100/80">
                        {(item as any).dropdownItems.map((sub: any, subIdx: number) => (
                          <div key={subIdx} onClick={() => setMobileMenuOpen(false)}>
                            <CMSLink
                              {...sub.link}
                              appearance="link"
                              className="block text-sm font-medium text-slate-700 hover:text-emerald-600 py-2 px-3 rounded-lg hover:bg-white"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50/60 space-y-3">
              {ctaButtons.length > 0 ? (
                ctaButtons.map(({ link }, i) => (
                  <div key={i} onClick={() => setMobileMenuOpen(false)}>
                    <CMSLink
                      {...link}
                      className="w-full text-center block bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3.5 rounded-xl text-sm shadow-md shadow-emerald-600/20"
                    />
                  </div>
                ))
              ) : (
                <Link
                  href={prefixWithLocale('/request-consultation', locale)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3.5 rounded-xl text-sm shadow-md shadow-emerald-600/20"
                >
                  Book a Consultation
                </Link>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
