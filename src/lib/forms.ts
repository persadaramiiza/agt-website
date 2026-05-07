import type { InquiryPayload } from "./types";

export function parseInquiry(formData: FormData): InquiryPayload {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    product: String(formData.get("product") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    sourcePath: String(formData.get("sourcePath") ?? "").trim(),
  };
}

export function validateInquiry(payload: InquiryPayload) {
  const errors: Record<string, string> = {};

  if (!payload.name) errors.name = "Name is required.";
  if (!payload.email || !payload.email.includes("@")) {
    errors.email = "A valid email is required.";
  }
  if (!payload.message) errors.message = "Message is required.";

  return errors;
}
