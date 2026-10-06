import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "customers" ALTER COLUMN "logo_id" DROP NOT NULL;
  ALTER TABLE "technologies" ALTER COLUMN "logo_id" DROP NOT NULL;
  ALTER TABLE "header_nav_items" ALTER COLUMN "link_label" DROP NOT NULL;
  ALTER TABLE "header_cta_buttons" ALTER COLUMN "link_label" DROP NOT NULL;
  ALTER TABLE "footer_columns_links" ALTER COLUMN "link_label" DROP NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "customers" ALTER COLUMN "logo_id" SET NOT NULL;
  ALTER TABLE "technologies" ALTER COLUMN "logo_id" SET NOT NULL;
  ALTER TABLE "header_nav_items" ALTER COLUMN "link_label" SET NOT NULL;
  ALTER TABLE "header_cta_buttons" ALTER COLUMN "link_label" SET NOT NULL;
  ALTER TABLE "footer_columns_links" ALTER COLUMN "link_label" SET NOT NULL;`)
}
