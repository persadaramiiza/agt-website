import { NextResponse } from "next/server";
import {
  createInquiry,
  updateInquirySalesforceStatus,
} from "@/db/inquiries";
import { parseInquiry, validateInquiry } from "@/lib/forms";
import { submitLead } from "@/lib/salesforce";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = parseInquiry(formData);
  const errors = validateInquiry(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        message: "Please complete the required fields.",
        errors,
      },
      { status: 400 },
    );
  }

  try {
    const databaseResult = await createInquiry(payload);
    const crmResult = await submitLead(payload);
    await updateInquirySalesforceStatus(
      databaseResult.status === "saved" ? databaseResult.id : undefined,
      crmResult.status,
    );

    return NextResponse.json({
      message:
        crmResult.status === "submitted"
          ? "Inquiry sent and registered for follow-up."
          : "Inquiry received. Salesforce is not configured yet.",
      database: databaseResult,
      crm: crmResult,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Inquiry received by the website, but database or CRM submission failed. Please check server configuration.",
      },
      { status: 502 },
    );
  }
}
