"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/types";

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm({
  products,
  defaultProduct = "",
}: {
  products: Product[];
  defaultProduct?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/inquiry", {
      method: "POST",
      body: formData,
    });
    const result = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(result.message ?? "Inquiry could not be sent.");
      return;
    }

    event.currentTarget.reset();
    setStatus("success");
    setMessage(result.message ?? "Inquiry sent.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input type="hidden" name="sourcePath" value="/contact" />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input
            name="name"
            required
            className="h-11 rounded-md border border-line bg-white px-3 outline-none transition focus:border-primary"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            required
            className="h-11 rounded-md border border-line bg-white px-3 outline-none transition focus:border-primary"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Company
          <input
            name="company"
            className="h-11 rounded-md border border-line bg-white px-3 outline-none transition focus:border-primary"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Phone
          <input
            name="phone"
            className="h-11 rounded-md border border-line bg-white px-3 outline-none transition focus:border-primary"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium">
        Product Interest
        <select
          name="product"
          defaultValue={defaultProduct}
          className="h-11 rounded-md border border-line bg-white px-3 outline-none transition focus:border-primary"
        >
          <option value="">General inquiry</option>
          {products.map((product) => (
            <option key={product.slug} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none rounded-md border border-line bg-white p-3 outline-none transition focus:border-primary"
        />
      </label>
      <button
        disabled={status === "submitting"}
        className="cta-red inline-flex h-11 items-center justify-center gap-2 rounded-[2px] bg-accent px-5 text-sm font-bold uppercase tracking-[0.7px] transition hover:bg-[#8f0019] disabled:cursor-not-allowed disabled:opacity-65"
        style={{ color: "#ffffff" }}
      >
        <Send size={17} color="#ffffff" />
        <span style={{ color: "#ffffff" }}>
          {status === "submitting" ? "Sending..." : "Send inquiry"}
        </span>
      </button>
      {message ? (
        <p
          className={
            status === "error" ? "text-sm text-red-700" : "text-sm text-primary"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
