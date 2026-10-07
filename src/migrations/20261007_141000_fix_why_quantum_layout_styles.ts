import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    -- 1. Change default layout_style on pages_blocks_why_quantum to 'cards'
    ALTER TABLE "pages_blocks_why_quantum"
      ALTER COLUMN "layout_style" SET DEFAULT 'cards';

    ALTER TABLE "_pages_v_blocks_why_quantum"
      ALTER COLUMN "layout_style" SET DEFAULT 'cards';

    -- 2. Update home page Why Organizations Choose Quantum block to 'zigzag'
    UPDATE "pages_blocks_why_quantum"
      SET "layout_style" = 'zigzag'
      WHERE "heading" ILIKE '%Why Organizations Choose Quantum%'
         OR "_parent_id" = 22;

    UPDATE "_pages_v_blocks_why_quantum"
      SET "layout_style" = 'zigzag'
      WHERE "heading" ILIKE '%Why Organizations Choose Quantum%'
         OR "_parent_id" = 22;

    -- 3. Ensure about page keeps 'editorial'
    UPDATE "pages_blocks_why_quantum"
      SET "layout_style" = 'editorial'
      WHERE "heading" ILIKE '%Delivering Comprehensive Technology%'
         OR "_parent_id" = 34;

    UPDATE "_pages_v_blocks_why_quantum"
      SET "layout_style" = 'editorial'
      WHERE "heading" ILIKE '%Delivering Comprehensive Technology%'
         OR "_parent_id" = 34;

    -- 4. Set other pages to 'cards' so they don't share the same editorial layout
    UPDATE "pages_blocks_why_quantum"
      SET "layout_style" = 'cards'
      WHERE "_parent_id" NOT IN (22, 34)
        AND "heading" NOT ILIKE '%Why Organizations Choose Quantum%'
        AND "heading" NOT ILIKE '%Delivering Comprehensive Technology%';

    UPDATE "_pages_v_blocks_why_quantum"
      SET "layout_style" = 'cards'
      WHERE "_parent_id" NOT IN (22, 34)
        AND "heading" NOT ILIKE '%Why Organizations Choose Quantum%'
        AND "heading" NOT ILIKE '%Delivering Comprehensive Technology%';
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_why_quantum"
      ALTER COLUMN "layout_style" SET DEFAULT 'editorial';

    ALTER TABLE "_pages_v_blocks_why_quantum"
      ALTER COLUMN "layout_style" SET DEFAULT 'editorial';
  `)
}
