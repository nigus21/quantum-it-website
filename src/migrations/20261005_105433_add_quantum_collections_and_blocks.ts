import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_pillars_pillars_icon" AS ENUM('software', 'network', 'security', 'energy', 'training');
  CREATE TYPE "public"."enum_pages_blocks_pillars_pillars_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_why_quantum_items_icon" AS ENUM('layers', 'globe', 'shield', 'lifecycle', 'innovation', 'excellence', 'sustainability', 'integrity');
  CREATE TYPE "public"."enum_pages_blocks_featured_projects_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_featured_projects_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_service_modules_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_service_modules_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_exam_areas_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_exam_areas_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_consultation_form_form_mode" AS ENUM('consultation', 'contact');
  CREATE TYPE "public"."enum__pages_v_blocks_pillars_pillars_icon" AS ENUM('software', 'network', 'security', 'energy', 'training');
  CREATE TYPE "public"."enum__pages_v_blocks_pillars_pillars_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_why_quantum_items_icon" AS ENUM('layers', 'globe', 'shield', 'lifecycle', 'innovation', 'excellence', 'sustainability', 'integrity');
  CREATE TYPE "public"."enum__pages_v_blocks_featured_projects_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_featured_projects_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_service_modules_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_service_modules_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_exam_areas_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_exam_areas_cta_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_consultation_form_form_mode" AS ENUM('consultation', 'contact');
  CREATE TYPE "public"."enum_services_pillar" AS ENUM('digital-business', 'enterprise-it', 'green-smart', 'professional-development');
  CREATE TYPE "public"."enum__services_v_version_pillar" AS ENUM('digital-business', 'enterprise-it', 'green-smart', 'professional-development');
  CREATE TYPE "public"."enum_projects_category" AS ENUM('government', 'financial', 'enterprise', 'energy', 'security');
  CREATE TYPE "public"."enum_training_programs_track" AS ENUM('oracle', 'microsoft', 'cybersecurity', 'project-management', 'corporate');
  CREATE TYPE "public"."enum_training_programs_level" AS ENUM('beginner', 'intermediate', 'advanced', 'certification-prep');
  CREATE TYPE "public"."enum_header_nav_items_dropdown_items_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "pages_blocks_pillars_pillars_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_pillars_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum_pages_blocks_pillars_pillars_icon" DEFAULT 'software',
  	"cta_type" "enum_pages_blocks_pillars_pillars_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar
  );
  
  CREATE TABLE "pages_blocks_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar DEFAULT 'Four Pillars. One Accountable Partner.',
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_why_quantum_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum_pages_blocks_why_quantum_items_icon" DEFAULT 'layers'
  );
  
  CREATE TABLE "pages_blocks_why_quantum" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar DEFAULT 'Why Organizations Choose Quantum',
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_featured_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar DEFAULT 'Proven in Complex Environments',
  	"description" varchar,
  	"show_category_filter" boolean DEFAULT true,
  	"featured_only" boolean DEFAULT false,
  	"limit" numeric DEFAULT 6,
  	"cta_type" "enum_pages_blocks_featured_projects_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum_pages_blocks_featured_projects_cta_appearance" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_process_steps_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_number" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar DEFAULT 'From Business Need to Working Solution',
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_service_modules_modules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_service_modules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" varchar,
  	"badge" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"proof_point" varchar,
  	"target_audience" varchar,
  	"cta_type" "enum_pages_blocks_service_modules_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum_pages_blocks_service_modules_cta_appearance" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_exam_areas_areas" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"badge" varchar DEFAULT 'Upcoming'
  );
  
  CREATE TABLE "pages_blocks_exam_areas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'EXAMINATION AREAS',
  	"heading" varchar DEFAULT 'Planned Examination Areas',
  	"description" varchar DEFAULT 'Quantum is developing a professional examination center to make globally recognized certifications more accessible to Ethiopian technology and business professionals.',
  	"commitment_heading" varchar DEFAULT 'A Professional, Secure Testing Environment',
  	"commitment_text" varchar DEFAULT 'Our objective is to open the door to world-class certification for Ethiopian professionals while maintaining the integrity and security that exams demand.',
  	"cta_type" "enum_pages_blocks_exam_areas_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum_pages_blocks_exam_areas_cta_appearance" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_consultation_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_mode" "enum_pages_blocks_consultation_form_form_mode" DEFAULT 'consultation',
  	"tagline" varchar,
  	"heading" varchar DEFAULT 'Tell Us Your Challenge. We''ll Recommend the Right Approach.',
  	"description" varchar DEFAULT 'Choose how you would like to start. Our specialists will study your requirements and recommend a clear, practical approach.',
  	"show_next_steps" boolean DEFAULT true,
  	"success_message" varchar DEFAULT 'Thank you! Your request has been received. Our team will contact you within 1 business day.',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pillars_pillars_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pillars_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum__pages_v_blocks_pillars_pillars_icon" DEFAULT 'software',
  	"cta_type" "enum__pages_v_blocks_pillars_pillars_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar DEFAULT 'Four Pillars. One Accountable Partner.',
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_why_quantum_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon" "enum__pages_v_blocks_why_quantum_items_icon" DEFAULT 'layers',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_why_quantum" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar DEFAULT 'Why Organizations Choose Quantum',
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_featured_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar DEFAULT 'Proven in Complex Environments',
  	"description" varchar,
  	"show_category_filter" boolean DEFAULT true,
  	"featured_only" boolean DEFAULT false,
  	"limit" numeric DEFAULT 6,
  	"cta_type" "enum__pages_v_blocks_featured_projects_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum__pages_v_blocks_featured_projects_cta_appearance" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_process_steps_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"step_number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar DEFAULT 'From Business Need to Working Solution',
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_service_modules_modules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_service_modules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_id" varchar,
  	"badge" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"proof_point" varchar,
  	"target_audience" varchar,
  	"cta_type" "enum__pages_v_blocks_service_modules_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum__pages_v_blocks_service_modules_cta_appearance" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_exam_areas_areas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"badge" varchar DEFAULT 'Upcoming',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_exam_areas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'EXAMINATION AREAS',
  	"heading" varchar DEFAULT 'Planned Examination Areas',
  	"description" varchar DEFAULT 'Quantum is developing a professional examination center to make globally recognized certifications more accessible to Ethiopian technology and business professionals.',
  	"commitment_heading" varchar DEFAULT 'A Professional, Secure Testing Environment',
  	"commitment_text" varchar DEFAULT 'Our objective is to open the door to world-class certification for Ethiopian professionals while maintaining the integrity and security that exams demand.',
  	"cta_type" "enum__pages_v_blocks_exam_areas_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum__pages_v_blocks_exam_areas_cta_appearance" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_consultation_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_mode" "enum__pages_v_blocks_consultation_form_form_mode" DEFAULT 'consultation',
  	"tagline" varchar,
  	"heading" varchar DEFAULT 'Tell Us Your Challenge. We''ll Recommend the Right Approach.',
  	"description" varchar DEFAULT 'Choose how you would like to start. Our specialists will study your requirements and recommend a clear, practical approach.',
  	"show_next_steps" boolean DEFAULT true,
  	"success_message" varchar DEFAULT 'Thank you! Your request has been received. Our team will contact you within 1 business day.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"client" varchar NOT NULL,
  	"category" "enum_projects_category" DEFAULT 'enterprise' NOT NULL,
  	"solution" varchar NOT NULL,
  	"summary" varchar NOT NULL,
  	"focus" varchar,
  	"result" varchar,
  	"image_id" integer,
  	"featured" boolean DEFAULT false,
  	"sort_order" numeric DEFAULT 0,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "training_programs_topics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"topic" varchar NOT NULL
  );
  
  CREATE TABLE "training_programs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"track" "enum_training_programs_track" DEFAULT 'cybersecurity' NOT NULL,
  	"level" "enum_training_programs_level" DEFAULT 'intermediate',
  	"duration" varchar,
  	"description" varchar NOT NULL,
  	"target_audience" varchar,
  	"featured" boolean DEFAULT false,
  	"sort_order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_nav_items_dropdown_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_dropdown_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"description" varchar
  );
  
  ALTER TABLE "services" ADD COLUMN "pillar" "enum_services_pillar";
  ALTER TABLE "_services_v" ADD COLUMN "version_pillar" "enum__services_v_version_pillar";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "projects_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "training_programs_id" integer;
  ALTER TABLE "header_nav_items" ADD COLUMN "enable_dropdown" boolean DEFAULT false;
  ALTER TABLE "site_settings" ADD COLUMN "brand_line" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "secondary_email" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "secondary_phone" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "business_hours" varchar;
  ALTER TABLE "pages_blocks_pillars_pillars_items" ADD CONSTRAINT "pages_blocks_pillars_pillars_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pillars_pillars"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pillars_pillars" ADD CONSTRAINT "pages_blocks_pillars_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pillars"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pillars" ADD CONSTRAINT "pages_blocks_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_quantum_items" ADD CONSTRAINT "pages_blocks_why_quantum_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_why_quantum"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_quantum" ADD CONSTRAINT "pages_blocks_why_quantum_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_featured_projects" ADD CONSTRAINT "pages_blocks_featured_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_steps_steps" ADD CONSTRAINT "pages_blocks_process_steps_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_steps" ADD CONSTRAINT "pages_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_modules_modules" ADD CONSTRAINT "pages_blocks_service_modules_modules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_service_modules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_service_modules" ADD CONSTRAINT "pages_blocks_service_modules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_exam_areas_areas" ADD CONSTRAINT "pages_blocks_exam_areas_areas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_exam_areas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_exam_areas" ADD CONSTRAINT "pages_blocks_exam_areas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_consultation_form" ADD CONSTRAINT "pages_blocks_consultation_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pillars_pillars_items" ADD CONSTRAINT "_pages_v_blocks_pillars_pillars_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pillars_pillars"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pillars_pillars" ADD CONSTRAINT "_pages_v_blocks_pillars_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pillars"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pillars" ADD CONSTRAINT "_pages_v_blocks_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_why_quantum_items" ADD CONSTRAINT "_pages_v_blocks_why_quantum_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_why_quantum"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_why_quantum" ADD CONSTRAINT "_pages_v_blocks_why_quantum_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_featured_projects" ADD CONSTRAINT "_pages_v_blocks_featured_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_process_steps_steps" ADD CONSTRAINT "_pages_v_blocks_process_steps_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_process_steps" ADD CONSTRAINT "_pages_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_modules_modules" ADD CONSTRAINT "_pages_v_blocks_service_modules_modules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_service_modules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_service_modules" ADD CONSTRAINT "_pages_v_blocks_service_modules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_exam_areas_areas" ADD CONSTRAINT "_pages_v_blocks_exam_areas_areas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_exam_areas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_exam_areas" ADD CONSTRAINT "_pages_v_blocks_exam_areas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_consultation_form" ADD CONSTRAINT "_pages_v_blocks_consultation_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "training_programs_topics" ADD CONSTRAINT "training_programs_topics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."training_programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_dropdown_items" ADD CONSTRAINT "header_nav_items_dropdown_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_pillars_pillars_items_order_idx" ON "pages_blocks_pillars_pillars_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_pillars_pillars_items_parent_id_idx" ON "pages_blocks_pillars_pillars_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pillars_pillars_items_locale_idx" ON "pages_blocks_pillars_pillars_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_pillars_pillars_order_idx" ON "pages_blocks_pillars_pillars" USING btree ("_order");
  CREATE INDEX "pages_blocks_pillars_pillars_parent_id_idx" ON "pages_blocks_pillars_pillars" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pillars_pillars_locale_idx" ON "pages_blocks_pillars_pillars" USING btree ("_locale");
  CREATE INDEX "pages_blocks_pillars_order_idx" ON "pages_blocks_pillars" USING btree ("_order");
  CREATE INDEX "pages_blocks_pillars_parent_id_idx" ON "pages_blocks_pillars" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pillars_path_idx" ON "pages_blocks_pillars" USING btree ("_path");
  CREATE INDEX "pages_blocks_pillars_locale_idx" ON "pages_blocks_pillars" USING btree ("_locale");
  CREATE INDEX "pages_blocks_why_quantum_items_order_idx" ON "pages_blocks_why_quantum_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_quantum_items_parent_id_idx" ON "pages_blocks_why_quantum_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_quantum_items_locale_idx" ON "pages_blocks_why_quantum_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_why_quantum_order_idx" ON "pages_blocks_why_quantum" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_quantum_parent_id_idx" ON "pages_blocks_why_quantum" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_quantum_path_idx" ON "pages_blocks_why_quantum" USING btree ("_path");
  CREATE INDEX "pages_blocks_why_quantum_locale_idx" ON "pages_blocks_why_quantum" USING btree ("_locale");
  CREATE INDEX "pages_blocks_featured_projects_order_idx" ON "pages_blocks_featured_projects" USING btree ("_order");
  CREATE INDEX "pages_blocks_featured_projects_parent_id_idx" ON "pages_blocks_featured_projects" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_featured_projects_path_idx" ON "pages_blocks_featured_projects" USING btree ("_path");
  CREATE INDEX "pages_blocks_featured_projects_locale_idx" ON "pages_blocks_featured_projects" USING btree ("_locale");
  CREATE INDEX "pages_blocks_process_steps_steps_order_idx" ON "pages_blocks_process_steps_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_steps_steps_parent_id_idx" ON "pages_blocks_process_steps_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_steps_steps_locale_idx" ON "pages_blocks_process_steps_steps" USING btree ("_locale");
  CREATE INDEX "pages_blocks_process_steps_order_idx" ON "pages_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_steps_parent_id_idx" ON "pages_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_steps_path_idx" ON "pages_blocks_process_steps" USING btree ("_path");
  CREATE INDEX "pages_blocks_process_steps_locale_idx" ON "pages_blocks_process_steps" USING btree ("_locale");
  CREATE INDEX "pages_blocks_service_modules_modules_order_idx" ON "pages_blocks_service_modules_modules" USING btree ("_order");
  CREATE INDEX "pages_blocks_service_modules_modules_parent_id_idx" ON "pages_blocks_service_modules_modules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_service_modules_modules_locale_idx" ON "pages_blocks_service_modules_modules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_service_modules_order_idx" ON "pages_blocks_service_modules" USING btree ("_order");
  CREATE INDEX "pages_blocks_service_modules_parent_id_idx" ON "pages_blocks_service_modules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_service_modules_path_idx" ON "pages_blocks_service_modules" USING btree ("_path");
  CREATE INDEX "pages_blocks_service_modules_locale_idx" ON "pages_blocks_service_modules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_exam_areas_areas_order_idx" ON "pages_blocks_exam_areas_areas" USING btree ("_order");
  CREATE INDEX "pages_blocks_exam_areas_areas_parent_id_idx" ON "pages_blocks_exam_areas_areas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_exam_areas_areas_locale_idx" ON "pages_blocks_exam_areas_areas" USING btree ("_locale");
  CREATE INDEX "pages_blocks_exam_areas_order_idx" ON "pages_blocks_exam_areas" USING btree ("_order");
  CREATE INDEX "pages_blocks_exam_areas_parent_id_idx" ON "pages_blocks_exam_areas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_exam_areas_path_idx" ON "pages_blocks_exam_areas" USING btree ("_path");
  CREATE INDEX "pages_blocks_exam_areas_locale_idx" ON "pages_blocks_exam_areas" USING btree ("_locale");
  CREATE INDEX "pages_blocks_consultation_form_order_idx" ON "pages_blocks_consultation_form" USING btree ("_order");
  CREATE INDEX "pages_blocks_consultation_form_parent_id_idx" ON "pages_blocks_consultation_form" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_consultation_form_path_idx" ON "pages_blocks_consultation_form" USING btree ("_path");
  CREATE INDEX "pages_blocks_consultation_form_locale_idx" ON "pages_blocks_consultation_form" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_pillars_pillars_items_order_idx" ON "_pages_v_blocks_pillars_pillars_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pillars_pillars_items_parent_id_idx" ON "_pages_v_blocks_pillars_pillars_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pillars_pillars_items_locale_idx" ON "_pages_v_blocks_pillars_pillars_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_pillars_pillars_order_idx" ON "_pages_v_blocks_pillars_pillars" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pillars_pillars_parent_id_idx" ON "_pages_v_blocks_pillars_pillars" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pillars_pillars_locale_idx" ON "_pages_v_blocks_pillars_pillars" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_pillars_order_idx" ON "_pages_v_blocks_pillars" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pillars_parent_id_idx" ON "_pages_v_blocks_pillars" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pillars_path_idx" ON "_pages_v_blocks_pillars" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pillars_locale_idx" ON "_pages_v_blocks_pillars" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_why_quantum_items_order_idx" ON "_pages_v_blocks_why_quantum_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_why_quantum_items_parent_id_idx" ON "_pages_v_blocks_why_quantum_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_why_quantum_items_locale_idx" ON "_pages_v_blocks_why_quantum_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_why_quantum_order_idx" ON "_pages_v_blocks_why_quantum" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_why_quantum_parent_id_idx" ON "_pages_v_blocks_why_quantum" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_why_quantum_path_idx" ON "_pages_v_blocks_why_quantum" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_why_quantum_locale_idx" ON "_pages_v_blocks_why_quantum" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_featured_projects_order_idx" ON "_pages_v_blocks_featured_projects" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_featured_projects_parent_id_idx" ON "_pages_v_blocks_featured_projects" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_featured_projects_path_idx" ON "_pages_v_blocks_featured_projects" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_featured_projects_locale_idx" ON "_pages_v_blocks_featured_projects" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_process_steps_steps_order_idx" ON "_pages_v_blocks_process_steps_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_process_steps_steps_parent_id_idx" ON "_pages_v_blocks_process_steps_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_process_steps_steps_locale_idx" ON "_pages_v_blocks_process_steps_steps" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_process_steps_order_idx" ON "_pages_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_process_steps_parent_id_idx" ON "_pages_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_process_steps_path_idx" ON "_pages_v_blocks_process_steps" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_process_steps_locale_idx" ON "_pages_v_blocks_process_steps" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_service_modules_modules_order_idx" ON "_pages_v_blocks_service_modules_modules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_service_modules_modules_parent_id_idx" ON "_pages_v_blocks_service_modules_modules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_service_modules_modules_locale_idx" ON "_pages_v_blocks_service_modules_modules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_service_modules_order_idx" ON "_pages_v_blocks_service_modules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_service_modules_parent_id_idx" ON "_pages_v_blocks_service_modules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_service_modules_path_idx" ON "_pages_v_blocks_service_modules" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_service_modules_locale_idx" ON "_pages_v_blocks_service_modules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_exam_areas_areas_order_idx" ON "_pages_v_blocks_exam_areas_areas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_exam_areas_areas_parent_id_idx" ON "_pages_v_blocks_exam_areas_areas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_exam_areas_areas_locale_idx" ON "_pages_v_blocks_exam_areas_areas" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_exam_areas_order_idx" ON "_pages_v_blocks_exam_areas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_exam_areas_parent_id_idx" ON "_pages_v_blocks_exam_areas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_exam_areas_path_idx" ON "_pages_v_blocks_exam_areas" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_exam_areas_locale_idx" ON "_pages_v_blocks_exam_areas" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_consultation_form_order_idx" ON "_pages_v_blocks_consultation_form" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_consultation_form_parent_id_idx" ON "_pages_v_blocks_consultation_form" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_consultation_form_path_idx" ON "_pages_v_blocks_consultation_form" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_consultation_form_locale_idx" ON "_pages_v_blocks_consultation_form" USING btree ("_locale");
  CREATE UNIQUE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX "projects_image_idx" ON "projects" USING btree ("image_id");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "training_programs_topics_order_idx" ON "training_programs_topics" USING btree ("_order");
  CREATE INDEX "training_programs_topics_parent_id_idx" ON "training_programs_topics" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "training_programs_slug_idx" ON "training_programs" USING btree ("slug");
  CREATE INDEX "training_programs_updated_at_idx" ON "training_programs" USING btree ("updated_at");
  CREATE INDEX "training_programs_created_at_idx" ON "training_programs" USING btree ("created_at");
  CREATE INDEX "header_nav_items_dropdown_items_order_idx" ON "header_nav_items_dropdown_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_dropdown_items_parent_id_idx" ON "header_nav_items_dropdown_items" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_dropdown_items_locale_idx" ON "header_nav_items_dropdown_items" USING btree ("_locale");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_training_programs_fk" FOREIGN KEY ("training_programs_id") REFERENCES "public"."training_programs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_training_programs_id_idx" ON "payload_locked_documents_rels" USING btree ("training_programs_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_pillars_pillars_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_pillars_pillars" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_pillars" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_why_quantum_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_why_quantum" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_featured_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_process_steps_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_process_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_modules_modules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_service_modules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_exam_areas_areas" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_exam_areas" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_consultation_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_pillars_pillars_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_pillars_pillars" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_pillars" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_why_quantum_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_why_quantum" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_featured_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_process_steps_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_process_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_modules_modules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_service_modules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_exam_areas_areas" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_exam_areas" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_consultation_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "training_programs_topics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "training_programs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items_dropdown_items" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_pillars_pillars_items" CASCADE;
  DROP TABLE "pages_blocks_pillars_pillars" CASCADE;
  DROP TABLE "pages_blocks_pillars" CASCADE;
  DROP TABLE "pages_blocks_why_quantum_items" CASCADE;
  DROP TABLE "pages_blocks_why_quantum" CASCADE;
  DROP TABLE "pages_blocks_featured_projects" CASCADE;
  DROP TABLE "pages_blocks_process_steps_steps" CASCADE;
  DROP TABLE "pages_blocks_process_steps" CASCADE;
  DROP TABLE "pages_blocks_service_modules_modules" CASCADE;
  DROP TABLE "pages_blocks_service_modules" CASCADE;
  DROP TABLE "pages_blocks_exam_areas_areas" CASCADE;
  DROP TABLE "pages_blocks_exam_areas" CASCADE;
  DROP TABLE "pages_blocks_consultation_form" CASCADE;
  DROP TABLE "_pages_v_blocks_pillars_pillars_items" CASCADE;
  DROP TABLE "_pages_v_blocks_pillars_pillars" CASCADE;
  DROP TABLE "_pages_v_blocks_pillars" CASCADE;
  DROP TABLE "_pages_v_blocks_why_quantum_items" CASCADE;
  DROP TABLE "_pages_v_blocks_why_quantum" CASCADE;
  DROP TABLE "_pages_v_blocks_featured_projects" CASCADE;
  DROP TABLE "_pages_v_blocks_process_steps_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_process_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_service_modules_modules" CASCADE;
  DROP TABLE "_pages_v_blocks_service_modules" CASCADE;
  DROP TABLE "_pages_v_blocks_exam_areas_areas" CASCADE;
  DROP TABLE "_pages_v_blocks_exam_areas" CASCADE;
  DROP TABLE "_pages_v_blocks_consultation_form" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "training_programs_topics" CASCADE;
  DROP TABLE "training_programs" CASCADE;
  DROP TABLE "header_nav_items_dropdown_items" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_projects_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_training_programs_fk";
  
  DROP INDEX "payload_locked_documents_rels_projects_id_idx";
  DROP INDEX "payload_locked_documents_rels_training_programs_id_idx";
  ALTER TABLE "services" DROP COLUMN "pillar";
  ALTER TABLE "_services_v" DROP COLUMN "version_pillar";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "projects_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "training_programs_id";
  ALTER TABLE "header_nav_items" DROP COLUMN "enable_dropdown";
  ALTER TABLE "site_settings" DROP COLUMN "brand_line";
  ALTER TABLE "site_settings" DROP COLUMN "secondary_email";
  ALTER TABLE "site_settings" DROP COLUMN "secondary_phone";
  ALTER TABLE "site_settings" DROP COLUMN "business_hours";
  DROP TYPE "public"."enum_pages_blocks_pillars_pillars_icon";
  DROP TYPE "public"."enum_pages_blocks_pillars_pillars_cta_type";
  DROP TYPE "public"."enum_pages_blocks_why_quantum_items_icon";
  DROP TYPE "public"."enum_pages_blocks_featured_projects_cta_type";
  DROP TYPE "public"."enum_pages_blocks_featured_projects_cta_appearance";
  DROP TYPE "public"."enum_pages_blocks_service_modules_cta_type";
  DROP TYPE "public"."enum_pages_blocks_service_modules_cta_appearance";
  DROP TYPE "public"."enum_pages_blocks_exam_areas_cta_type";
  DROP TYPE "public"."enum_pages_blocks_exam_areas_cta_appearance";
  DROP TYPE "public"."enum_pages_blocks_consultation_form_form_mode";
  DROP TYPE "public"."enum__pages_v_blocks_pillars_pillars_icon";
  DROP TYPE "public"."enum__pages_v_blocks_pillars_pillars_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_why_quantum_items_icon";
  DROP TYPE "public"."enum__pages_v_blocks_featured_projects_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_featured_projects_cta_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_service_modules_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_service_modules_cta_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_exam_areas_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_exam_areas_cta_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_consultation_form_form_mode";
  DROP TYPE "public"."enum_services_pillar";
  DROP TYPE "public"."enum__services_v_version_pillar";
  DROP TYPE "public"."enum_projects_category";
  DROP TYPE "public"."enum_training_programs_track";
  DROP TYPE "public"."enum_training_programs_level";
  DROP TYPE "public"."enum_header_nav_items_dropdown_items_link_type";`)
}
