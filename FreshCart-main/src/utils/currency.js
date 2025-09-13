// Centralized currency formatting for Libyan Dinar
export const CURRENCY = "LYD"; // Standard ISO code for Libyan dinar
export const LOCALE = "en-LY"; // Use Arabic/English Libya as needed

export function formatCurrency(value) {
  if (value == null || isNaN(Number(value))) return "";
  try {
    return new Intl.NumberFormat(LOCALE, {
      style: "currency",
      currency: CURRENCY,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(Number(value));
  } catch (e) {
    // Fallback simple format
    return `${Number(value).toFixed(0)} ${CURRENCY}`;
  }
}
