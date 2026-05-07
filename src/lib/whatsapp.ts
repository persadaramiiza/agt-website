export function buildWhatsAppUrl(productName?: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "62895395063333";
  const message = productName
    ? `Hello AGT, I would like to request an instant quote for ${productName}.`
    : "Hello AGT, I would like to request a product quote.";

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
