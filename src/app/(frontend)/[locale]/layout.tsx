import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'

import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { isValidLocale, type Locale } from '@/i18n/config'

type LayoutArgs = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

async function LocaleContent({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  // Fetch site-settings to pass WhatsApp config
  let siteSettings: any = null
  try {
    siteSettings = await getCachedGlobal('site-settings', 1)
  } catch (err) {
    console.error('Failed to fetch site settings in layout:', err)
  }

  const whatsappConfig = siteSettings?.whatsapp

  return (
    <>
      <Header locale={locale as Locale} />
      {children}
      <Footer locale={locale as Locale} />
      <WhatsAppButton
        enabled={whatsappConfig?.enabled !== false}
        phoneNumber={whatsappConfig?.phoneNumber}
        defaultMessage={whatsappConfig?.defaultMessage}
        tooltipText={whatsappConfig?.tooltipText}
      />
    </>
  )
}

export default function LocaleLayout({ children, params }: LayoutArgs) {
  return (
    <Suspense fallback={null}>
      <LocaleContent params={params}>{children}</LocaleContent>
    </Suspense>
  )
}
