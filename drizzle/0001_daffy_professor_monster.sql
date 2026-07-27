CREATE TABLE "contact_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"channel" text NOT NULL,
	"action" text NOT NULL,
	"context" text,
	"document_name" text,
	"source_path" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "contact_events_channel_idx" ON "contact_events" USING btree ("channel");--> statement-breakpoint
CREATE INDEX "contact_events_created_at_idx" ON "contact_events" USING btree ("created_at");