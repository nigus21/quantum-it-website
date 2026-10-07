import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { up } from '../migrations/20261007_141000_fix_why_quantum_layout_styles'

async function run() {
  try {
    console.log('Initializing payload...')
    const payload = await getPayload({ config: configPromise })
    const db = (payload.db as any).drizzle

    console.log('Running up() migration for fix_why_quantum_layout_styles...')
    await up({ db, payload, req: {} as any })

    const migrationName = '20261007_141000_fix_why_quantum_layout_styles'
    await (payload.db as any).drizzle.execute(
      `INSERT INTO "payload_migrations" ("name", "batch", "created_at", "updated_at")
       SELECT '${migrationName}', 1, NOW(), NOW()
       WHERE NOT EXISTS (
         SELECT 1 FROM "payload_migrations" WHERE "name" = '${migrationName}'
       );`
    )

    console.log('Migration 20261007_141000_fix_why_quantum_layout_styles completed and recorded successfully!')
    process.exit(0)
  } catch (err) {
    console.error('Migration failed:', err)
    process.exit(1)
  }
}

run()
