import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      CREATE TYPE "public"."enum_inquiries_request_type" AS ENUM('consultation', 'proposal', 'demo');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_inquiries_status" AS ENUM('new', 'in-review', 'contacted', 'closed');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE TABLE IF NOT EXISTS "inquiries" (
      "id" serial PRIMARY KEY NOT NULL,
      "full_name" varchar NOT NULL,
      "email" varchar NOT NULL,
      "phone" varchar,
      "organization" varchar,
      "job_title" varchar,
      "solution" varchar,
      "request_type" "enum_inquiries_request_type" DEFAULT 'consultation',
      "timeline" varchar,
      "message" varchar,
      "status" "enum_inquiries_status" DEFAULT 'new',
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE INDEX IF NOT EXISTS "inquiries_created_at_idx" ON "inquiries" ("created_at");
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "inquiries" CASCADE;
    DROP TYPE IF EXISTS "enum_inquiries_request_type";
    DROP TYPE IF EXISTS "enum_inquiries_status";
  `)
}
