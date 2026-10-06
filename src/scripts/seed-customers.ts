import dotenv from 'dotenv'
dotenv.config()

import config from '../payload.config'
import { getPayload } from 'payload'

const defaultCustomers = [
  {
    name: 'Ministry of Revenues (MOR)',
    website: 'https://www.mor.gov.et',
    featured: true,
    sortOrder: 1,
  },
  {
    name: 'Ethiopian Customs Commission',
    website: 'https://www.ecc.gov.et',
    featured: true,
    sortOrder: 2,
  },
  {
    name: 'Commercial Bank of Ethiopia',
    website: 'https://www.combanketh.et',
    featured: true,
    sortOrder: 3,
  },
  {
    name: 'Dashen Bank',
    website: 'https://dashenbanksc.com',
    featured: true,
    sortOrder: 4,
  },
  {
    name: 'Ethio Telecom',
    website: 'https://www.ethiotelecom.et',
    featured: true,
    sortOrder: 5,
  },
  {
    name: 'Ethiopian Electric Utility (EEU)',
    website: 'https://www.eeu.gov.et',
    featured: true,
    sortOrder: 6,
  },
  {
    name: 'East Africa Bottling (Coca-Cola)',
    website: 'https://www.ccbagroup.com',
    featured: true,
    sortOrder: 7,
  },
  {
    name: 'Awach SACCO',
    website: 'https://awachsacco.com',
    featured: true,
    sortOrder: 8,
  },
  {
    name: 'Oromia Bank',
    website: 'https://www.oromiabank.com',
    featured: true,
    sortOrder: 9,
  },
  {
    name: 'Ministry of Health',
    website: 'https://www.moh.gov.et',
    featured: true,
    sortOrder: 10,
  },
]

async function seedCustomers() {
  console.log('--- Seeding Customers & Partners ---')
  const payload = await getPayload({ config })

  for (const c of defaultCustomers) {
    const existing = await payload.find({
      collection: 'customers',
      where: {
        name: {
          equals: c.name,
        },
      },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`[Customer Exists] ${c.name}`)
      await payload.update({
        collection: 'customers',
        id: existing.docs[0].id,
        data: {
          featured: true,
          sortOrder: c.sortOrder,
          website: c.website,
        },
      })
    } else {
      console.log(`[Creating Customer] ${c.name}`)
      await payload.create({
        collection: 'customers',
        data: {
          name: c.name,
          featured: true,
          sortOrder: c.sortOrder,
          website: c.website,
        },
      })
    }
  }

  console.log('--- Customers Seeded Successfully! ---')
  process.exit(0)
}

seedCustomers().catch((err) => {
  console.error('Error seeding customers:', err)
  process.exit(1)
})
