"use client";

import type { ComponentPropsWithoutRef } from "react";
import type { ContactEventPayload } from "@/lib/types";

type TrackedContactLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "onClick"
> & {
  tracking: Omit<ContactEventPayload, "sourcePath">;
};

export function TrackedContactLink({
  tracking,
  ...linkProps
}: TrackedContactLinkProps) {
  function recordContactEvent() {
    const payload: ContactEventPayload = {
      ...tracking,
      sourcePath: window.location.pathname,
    };
    const body = JSON.stringify(payload);

    if (typeof navigator.sendBeacon === "function") {
      const data = new Blob([body], { type: "application/json" });
      navigator.sendBeacon("/api/contact-events", data);
      return;
    }

    void fetch("/api/contact-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => undefined);
  }

  return <a {...linkProps} onClick={recordContactEvent} />;
}
