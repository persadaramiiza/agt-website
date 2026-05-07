import type { InquiryPayload } from "./types";

export async function submitLead(payload: InquiryPayload) {
  const endpoint = process.env.SALESFORCE_LEAD_ENDPOINT;
  const token = process.env.SALESFORCE_ACCESS_TOKEN;

  if (!endpoint || !token) {
    return {
      status: "skipped" as const,
      reason: "Salesforce environment variables are not configured.",
    };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: payload.name,
      email: payload.email,
      company: payload.company || "Website inquiry",
      phone: payload.phone,
      description: payload.message,
      productInterest: payload.product,
      source: "AGT Website",
    }),
  });

  if (!response.ok) {
    throw new Error(`Salesforce lead submission failed with ${response.status}`);
  }

  return { status: "submitted" as const };
}
