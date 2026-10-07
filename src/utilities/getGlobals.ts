import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

import type { Locale } from '@/i18n/config'

type Global = keyof Config['globals']

async function getGlobal(slug: Global, depth = 0, locale: Locale = 'en') {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
    locale,
  })

  return global
}

/**
 * High-performance cached global fetch.
 * Uses Next.js unstable_cache with tag-based revalidation to prevent repeat DB hits.
 */
export const getCachedGlobal = (slug: Global, depth = 0, locale: Locale = 'en') =>
  unstable_cache(
    async () => getGlobal(slug, depth, locale),
    [`global_${slug}`, `${depth}`, locale],
    {
      tags: [`global_${slug}`],
      revalidate: 300,
    },
  )()
