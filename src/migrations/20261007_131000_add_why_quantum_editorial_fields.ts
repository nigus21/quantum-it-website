import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_why_quantum"
      ADD COLUMN IF NOT EXISTS "layout_style" varchar DEFAULT 'editorial';

    ALTER TABLE "_pages_v_blocks_why_quantum"
      ADD COLUMN IF NOT EXISTS "layout_style" varchar DEFAULT 'editorial';

    ALTER TABLE "pages_blocks_why_quantum_items"
      ADD COLUMN IF NOT EXISTS "badge" varchar,
      ADD COLUMN IF NOT EXISTS "pullquote" varchar,
      ADD COLUMN IF NOT EXISTS "image_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
      ADD COLUMN IF NOT EXISTS "author_name" varchar,
      ADD COLUMN IF NOT EXISTS "author_role" varchar,
      ADD COLUMN IF NOT EXISTS "image_position" varchar DEFAULT 'right';

    ALTER TABLE "_pages_v_blocks_why_quantum_items"
      ADD COLUMN IF NOT EXISTS "badge" varchar,
      ADD COLUMN IF NOT EXISTS "pullquote" varchar,
      ADD COLUMN IF NOT EXISTS "image_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
      ADD COLUMN IF NOT EXISTS "author_name" varchar,
      ADD COLUMN IF NOT EXISTS "author_role" varchar,
      ADD COLUMN IF NOT EXISTS "image_position" varchar DEFAULT 'right';
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_why_quantum"
      DROP COLUMN IF EXISTS "layout_style";

    ALTER TABLE "_pages_v_blocks_why_quantum"
      DROP COLUMN IF EXISTS "layout_style";

    ALTER TABLE "pages_blocks_why_quantum_items"
      DROP COLUMN IF EXISTS "badge",
      DROP COLUMN IF EXISTS "pullquote",
      DROP COLUMN IF EXISTS "image_id",
      DROP COLUMN IF EXISTS "author_name",
      DROP COLUMN IF EXISTS "author_role",
      DROP COLUMN IF EXISTS "image_position";

    ALTER TABLE "_pages_v_blocks_why_quantum_items"
      DROP COLUMN IF EXISTS "badge",
      DROP COLUMN IF EXISTS "pullquote",
      DROP COLUMN IF EXISTS "image_id",
      DROP COLUMN IF EXISTS "author_name",
      DROP COLUMN IF EXISTS "author_role",
      DROP COLUMN IF EXISTS "image_position";
  `)
}
