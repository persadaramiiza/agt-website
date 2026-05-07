import { inquiries } from "./schema";
import { getDb } from "./client";
import type { InquiryPayload } from "@/lib/types";
import { eq } from "drizzle-orm";

export async function createInquiry(payload: InquiryPayload) {
  const db = getDb();

  if (!db) {
    return {
      status: "skipped" as const,
      reason: "DATABASE_URL is not configured.",
    };
  }

  const [row] = await db
    .insert(inquiries)
    .values({
      name: payload.name,
      email: payload.email,
      company: payload.company || null,
      phone: payload.phone || null,
      productName: payload.product || null,
      message: payload.message,
      sourcePath: payload.sourcePath || null,
      salesforceStatus: "pending",
    })
    .returning({ id: inquiries.id });

  return {
    status: "saved" as const,
    id: row.id,
  };
}

export async function updateInquirySalesforceStatus(
  inquiryId: string | undefined,
  status: "submitted" | "skipped" | "failed",
  salesforceLeadId?: string,
) {
  const db = getDb();

  if (!db || !inquiryId) {
    return;
  }

  await db
    .update(inquiries)
    .set({
      salesforceStatus: status,
      salesforceLeadId: salesforceLeadId || null,
    })
    .where(eq(inquiries.id, inquiryId));
}
