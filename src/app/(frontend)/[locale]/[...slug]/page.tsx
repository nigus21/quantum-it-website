import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import { connection } from 'next/server'
import React, { cache } from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import { getLocalizedPath, isValidLocale, type Locale } from '@/i18n/config'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

type Args = {
  params: Promise<{ locale: string; slug?: string | string[] }>
}

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise })
    const locales: Locale[] = ['en', 'bg']
    const allParams: { locale: string; slug: string[] }[] = []

    for (const locale of locales) {
      const pages = await payload.find({
        collection: 'pages',
        draft: false,
        limit: 1000,
        locale,
        overrideAccess: false,
        pagination: false,
        select: { slug: true },
      })

      const slugs =
        pages.docs
          ?.filter((doc) => doc.slug !== 'home')
          .map((doc) => ({
            locale,
            slug: (doc.slug as string).split('/').filter(Boolean),
          })) ?? []
      allParams.push(...slugs)
    }

    if (allParams.length === 0) {
      return [{ locale: 'en', slug: ['home'] }]
    }
    return allParams
  } catch {
    return [{ locale: 'en', slug: ['home'] }]
  }
}

export default async function Page({ params: paramsPromise }: Args) {
  await connection()
  const { isEnabled: draft } = await draftMode()
  const { locale: localeParam, slug: rawSlug = 'home' } = await paramsPromise
  const locale = isValidLocale(localeParam) ? localeParam : 'en'

  const slugArray = Array.isArray(rawSlug) ? rawSlug : [rawSlug]
  const fullSlug = slugArray.map(decodeURIComponent).join('/')
  const path = fullSlug === 'home' ? '/' : `/${fullSlug}`
  const url = getLocalizedPath(locale, path)

  let page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
    slugArray,
    locale,
  })

  if (!page && fullSlug === 'home') {
    page = homeStatic
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article>
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  await connection()
  const { locale: localeParam, slug: rawSlug = 'home' } = await paramsPromise
  const locale = isValidLocale(localeParam) ? localeParam : 'en'

  const slugArray = Array.isArray(rawSlug) ? rawSlug : [rawSlug]
  const page = await queryPageBySlug({
    slugArray,
    locale,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(
  async ({ slugArray, locale }: { slugArray: string[]; locale: Locale }) => {
    const { isEnabled: draft } = await draftMode()
    const payload = await getPayload({ config: configPromise })

    const fullSlug = slugArray.map(decodeURIComponent).join('/')
    const lastSlug = slugArray[slugArray.length - 1]
      ? decodeURIComponent(slugArray[slugArray.length - 1])
      : fullSlug

    const result = await payload.find({
      collection: 'pages',
      draft,
      limit: 1,
      locale,
      pagination: false,
      overrideAccess: draft,
      where: {
        or: [
          {
            slug: {
              equals: fullSlug,
            },
          },
          {
            slug: {
              equals: lastSlug,
            },
          },
        ],
      },
    })

    return result.docs?.[0] || null
  },
)
