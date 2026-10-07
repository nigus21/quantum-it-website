import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

import configPromise from '@payload-config'
import { getPayload } from 'payload'

async function updateAbout() {
  try {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'about' } },
      limit: 1,
    })

    if (!result.docs || result.docs.length === 0) {
      console.log('About page not found in DB')
      process.exit(0)
    }

    const aboutPage = result.docs[0]

    // Find the whyQuantum block in layout
    const updatedLayout = (aboutPage.layout || []).map((block: any) => {
      if (block.blockType === 'whyQuantum') {
        return {
          ...block,
          layoutStyle: 'editorial',
          tagline: 'WHO WE ARE',
          heading: 'Delivering Comprehensive Technology Under One Roof',
          description: 'Quantum IT & Security Solutions PLC combines software development, ICT infrastructure, cybersecurity, cloud technologies, digital services, professional training and green energy solutions.',
          items: [
            {
              title: 'Our Mission',
              badge: 'PURPOSE & CONSCIENCE',
              description: "There's a common notion that technology delivery in emerging markets is transactional and fragmented. But we know there's a better way to build. One where what's good for long-term operational resilience is also good for sustainable institutional growth.\n\nWe believe Ethiopian organizations succeed when technology operates with integrity, security by design, and end-to-end accountability. That's why we've built an integrated ecosystem uniting enterprise software, secure networks, and green solar power to help businesses grow better every day.",
              pullquote: 'We believe businesses can grow with a conscience, and succeed with a soul — powered by dependable technology.',
              authorName: 'Engineering Leadership & Co-Founders',
              authorRole: 'Quantum IT & Security Solutions PLC',
              imagePosition: 'right',
              icon: 'excellence',
            },
            {
              title: 'Our Story',
              badge: 'THE JOURNEY & ORIGIN',
              description: 'Founded in Addis Ababa, Quantum was born from a clear operational reality: public institutions and commercial enterprises across Ethiopia were struggling with disjointed vendors. One provider installed software, another routed cabling, a third handled firewalls, and power outages left everything stranded.\n\nOur founding team of veteran systems architects and software engineers united to solve this fundamental bottleneck. Today, Quantum delivers complete operational technology under one roof—from national bank ERP integrations and Customs biometric attendance to commercial EV charging hubs and off-grid solar power.',
              pullquote: 'Connecting software, infrastructure, cybersecurity and renewable energy into a single accountable partner.',
              authorName: 'Addis Ababa Engineering Operations',
              authorRole: 'Headquarters, Addis Ababa, Ethiopia',
              imagePosition: 'left',
              icon: 'innovation',
            },
            {
              title: 'Our Vision',
              badge: 'REGIONAL IMPACT & FUTURE',
              description: 'To become the most trusted digital transformation partner across Ethiopia and the East African region. We continuously bridge local operational realities with global Tier-1 engineering standards—ensuring our clients achieve 99.99% system availability, zero vendor lock-in, and lifelong technical support.',
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
      id: aboutPage.id,
      data: {
        layout: updatedLayout,
      },
      context: {
        disableRevalidate: true,
      },
    })

    console.log('Successfully updated About page in database!')
    process.exit(0)
  } catch (err) {
    console.error('Error updating about page:', err)
    process.exit(1)
  }
}

updateAbout()
