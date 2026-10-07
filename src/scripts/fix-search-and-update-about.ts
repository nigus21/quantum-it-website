import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

import configPromise from '@payload-config'
import { getPayload } from 'payload'

async function run() {
  const payload = await getPayload({ config: configPromise })
  try {
    await (payload.db as any).drizzle.execute(
      `ALTER TABLE "search_rels"
       ADD COLUMN IF NOT EXISTS "pages_id" integer REFERENCES "pages"("id") ON DELETE CASCADE;`
    )
    console.log('Added pages_id to search_rels!')
  } catch (err) {
    console.log('Error adding to search_rels (may already exist):', err)
  }

  // Now update the about page directly
  try {
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'about' } },
      limit: 1,
    })

    if (result.docs.length > 0) {
      const doc = result.docs[0]
      const layout = doc.layout.map((block: any) => {
        if (block.blockType === 'whyQuantum') {
          return {
            ...block,
            layoutStyle: 'editorial',
            tagline: 'WHO WE ARE',
            heading: 'Delivering Comprehensive Technology Under One Roof',
            description:
              'Quantum IT & Security Solutions PLC combines software development, ICT infrastructure, cybersecurity, cloud technologies, digital services, professional training and green energy solutions under one roof.',
            items: [
              {
                title: 'Our Mission',
                badge: 'PURPOSE & CONSCIENCE',
                description:
                  "There's this notion that technology delivery in emerging markets must be fragmented and transactional. But we know there's a better way to build. One where what's good for the bottom line is also good for long-term customer resilience.\n\nWe believe businesses can grow with a conscience, and succeed with a soul — powered by dependable, integrated systems. That's why we've built an accountable technology ecosystem uniting software, infrastructure, cybersecurity, and green power to help Ethiopian enterprises grow better every day.",
                pullquote:
                  'We believe businesses can grow with a conscience, and succeed with a soul — powered by dependable technology.',
                authorName: 'Engineering Leadership & Co-Founders',
                authorRole: 'Quantum IT & Security Solutions PLC',
                imagePosition: 'right',
                icon: 'excellence',
              },
              {
                title: 'Our Story',
                badge: 'THE JOURNEY & ORIGIN',
                description:
                  'Founded in Addis Ababa, Quantum began with a clear realization: Ethiopian organizations were struggling with disconnected vendors. One provider handled accounting software, another laid network cables, a third sold firewalls, and power outages left everything stranded.\n\nOur founding team of systems architects and software engineers united to solve this fundamental bottleneck. Today, Quantum delivers complete operational technology under one roof—from national bank ERP integrations and Customs biometric attendance to commercial EV charging hubs and off-grid solar power.',
                pullquote:
                  'Uniting software, infrastructure, cybersecurity and renewable energy into a single accountable partner.',
                authorName: 'Addis Ababa Operations Hub',
                authorRole: 'Headquarters, Addis Ababa, Ethiopia',
                imagePosition: 'left',
                icon: 'innovation',
              },
              {
                title: 'Our Vision',
                badge: 'REGIONAL IMPACT & FUTURE',
                description:
                  'To become the most trusted digital transformation partner across Ethiopia and the East African region. We continuously bridge local operational realities with global Tier-1 engineering standards—ensuring our clients achieve 99.99% system availability, zero vendor lock-in, and lifelong technical support.',
                authorName: 'Client Success & Technical Governance',
                authorRole: 'Enterprise Solutions Division',
                imagePosition: 'right',
                icon: 'globe',
              },
            ],
          }
        }
        return block
      })

      await payload.update({
        collection: 'pages',
        id: doc.id,
        data: { layout },
        context: { disableRevalidate: true },
      })
      console.log('Successfully updated About page with Our Mission, Our Story, and Our Vision!')
    }
  } catch (e) {
    console.error('Update error:', e)
  }
  process.exit(0)
}

run()
