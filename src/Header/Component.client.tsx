'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { prefixWithLocale, useLocale } from '@/i18n/locale'
import type { Locale } from '@/i18n/config'

interface HeaderClientProps {
  data: Header
  locale?: Locale
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const locale = useLocale()
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] transition-all duration-200"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container py-3.5 flex items-center justify-between">
        <Link href={prefixWithLocale('/', locale)} className="flex items-center">
          <Logo loading="eager" priority="high" />
        </Link>
        <div className="flex items-center gap-4 lg:gap-6">
          <HeaderNav data={data} locale={locale} />
        </div>
      </div>
    </header>
  )
}
