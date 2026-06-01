const defaultWhatsAppPhone = "628138080876";

function buildWhatsAppMessageUrl(message: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? defaultWhatsAppPhone;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppUrl(productName?: string) {
  const message = productName
    ? `Hello AGT, I would like to request an instant quote for ${productName}.`
    : "Hello AGT, I would like to request a product quote.";

  return buildWhatsAppMessageUrl(message);
}

export function buildWhatsAppDocumentUrl(
  productName: string,
  documentLabel?: string,
) {
  const documentName = documentLabel ? ` ${documentLabel}` : "";

  return buildWhatsAppMessageUrl(
    `Hello AGT, I would like to request${documentName} documentation for ${productName}.`,
  );
}
