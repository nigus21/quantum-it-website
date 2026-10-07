import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

import configPromise from '@payload-config'
import { getPayload } from 'payload'

async function run() {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'solutions' } },
    limit: 1,
  })

  if (result.docs.length > 0) {
    const doc = result.docs[0]
    const layout = doc.layout.map((block: any) => {
      if (block.blockType === 'whyQuantum') {
        return {
          ...block,
          layoutStyle: 'cards',
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

    console.log('Successfully set layoutStyle to cards on /solutions!')
  }

  process.exit(0)
}

run()
