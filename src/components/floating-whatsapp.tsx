import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-[0_16px_36px_-12px_rgba(22,163,74,0.7)] transition hover:bg-[#15803d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16a34a]"
      aria-label="Chat with AGT on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
