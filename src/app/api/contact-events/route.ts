import { NextResponse } from "next/server";
import { createContactEvent } from "@/db/contact-events";
import type { ContactEventPayload } from "@/lib/types";

const MAX_LENGTHS = {
  action: 80,
  context: 255,
  documentName: 255,
  sourcePath: 500,
} as const;

function readOptionalString(
  value: unknown,
  maxLength: number,
): string | undefined {
  if (typeof value !== "string") return undefined;

  const normalized = value.trim();
  return normalized ? normalized.slice(0, maxLength) : undefined;
}

function parseContactEvent(value: unknown): ContactEventPayload | null {
  if (!value || typeof value !== "object") return null;

  const body = value as Record<string, unknown>;
  const channel = body.channel;
  const action = readOptionalString(body.action, MAX_LENGTHS.action);

  if ((channel !== "email" && channel !== "whatsapp") || !action) {
    return null;
  }

  return {
    channel,
    action,
    context: readOptionalString(body.context, MAX_LENGTHS.context),
    documentName: readOptionalString(
      body.documentName,
      MAX_LENGTHS.documentName,
    ),
    sourcePath: readOptionalString(body.sourcePath, MAX_LENGTHS.sourcePath),
  };
}

export async function POST(request: Request) {
  let requestBody: unknown;

  try {
    requestBody = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid contact event payload." },
      { status: 400 },
    );
  }

  const payload = parseContactEvent(requestBody);

  if (!payload) {
    return NextResponse.json(
      { message: "Invalid contact event payload." },
      { status: 400 },
    );
  }

  try {
    const result = await createContactEvent(payload);

    return NextResponse.json(
      { record: result },
      { status: result.status === "saved" ? 201 : 202 },
    );
  } catch (error) {
    console.error("Contact event logging failed.", error);

    return NextResponse.json(
      { message: "Contact event could not be recorded." },
      { status: 502 },
    );
  }
}
