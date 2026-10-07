import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "site_settings"
      ADD COLUMN IF NOT EXISTS "email_notifications_enabled" boolean DEFAULT true,
      ADD COLUMN IF NOT EXISTS "email_notifications_recipient_emails" varchar DEFAULT 'henok@quantumitss.com, marketing@quantumitss.com',
      ADD COLUMN IF NOT EXISTS "whatsapp_enabled" boolean DEFAULT true,
      ADD COLUMN IF NOT EXISTS "whatsapp_phone_number" varchar DEFAULT '+251911234567',
      ADD COLUMN IF NOT EXISTS "whatsapp_default_message" varchar DEFAULT 'Hello Quantum IT! I would like to inquire about your services.',
      ADD COLUMN IF NOT EXISTS "whatsapp_tooltip_text" varchar DEFAULT 'Chat on WhatsApp';
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "site_settings"
      DROP COLUMN IF EXISTS "email_notifications_enabled",
      DROP COLUMN IF EXISTS "email_notifications_recipient_emails",
      DROP COLUMN IF EXISTS "whatsapp_enabled",
      DROP COLUMN IF EXISTS "whatsapp_phone_number",
      DROP COLUMN IF EXISTS "whatsapp_default_message",
      DROP COLUMN IF EXISTS "whatsapp_tooltip_text";
  `)
}
