import { contactEvents } from "./schema";
import { getDb } from "./client";
import type { ContactEventPayload } from "@/lib/types";

export async function createContactEvent(payload: ContactEventPayload) {
  const db = getDb();

  if (!db) {
    return {
      status: "skipped" as const,
      reason: "DATABASE_URL is not configured.",
    };
  }

  const [row] = await db
    .insert(contactEvents)
    .values({
      channel: payload.channel,
      action: payload.action,
      context: payload.context || null,
      documentName: payload.documentName || null,
      sourcePath: payload.sourcePath || null,
    })
    .returning({ id: contactEvents.id });

  return {
    status: "saved" as const,
    id: row.id,
  };
}
