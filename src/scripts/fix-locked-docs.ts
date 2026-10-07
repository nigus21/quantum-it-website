import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

import configPromise from '@payload-config'
import { getPayload } from 'payload'

async function fix() {
  const payload = await getPayload({ config: configPromise })
  await (payload.db as any).drizzle.execute(
    `ALTER TABLE "payload_locked_documents_rels"
     ADD COLUMN IF NOT EXISTS "inquiries_id" integer REFERENCES "inquiries"("id") ON DELETE CASCADE;`
  )
  console.log('Fixed payload_locked_documents_rels!')
  process.exit(0)
}

fix()
