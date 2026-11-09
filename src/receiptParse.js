// Turns raw OCR text from a receipt into items, subtotal, tax, tip and total.
// Rule based and fully on device. OCR is imperfect, so the UI always lets the user review.

const PRICE_END = /(-?\$?\s?\d{1,5}[.,]\d{2})\s*[A-Za-z]{0,2}\s*$/
const SKIP = /\b(cash|change|visa|mastercard|amex|discover|debit|credit|card|auth|approval|ref|tendered|balance|account|table|server|guest|order\s*#|check\s*#|phone|tel)\b/i
const TOTAL = /\b(grand\s*total|total\s*due|amount\s*due|balance\s*due|total)\b/i
const SUBTOTAL = /\bsub\s*-?\s*total\b/i
const TAX = /\b(tax|vat|gst|hst)\b/i
const TIP = /\b(tip|gratuity|service\s*charge)\b/i

function toNumber(raw) {
  const n = parseFloat(raw.replace(/[^0-9.,-]/g, '').replace(',', '.'))
  return Number.isFinite(n) ? n : null
}

function cleanName(s) {
  return s
    .replace(/^\s*\d+\s*[xX@]?\s+/, '')
    .replace(/[\s.\-_*:]+$/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

export function parseReceipt(text) {
  const out = { items: [], subtotal: null, tax: null, tip: null, total: null }
  const prices = []
  for (const line of String(text || '').split(/\r?\n/)) {
    const m = line.match(PRICE_END)
    if (!m) continue
    const amount = toNumber(m[1])
    if (amount === null) continue
    const label = line.slice(0, m.index)
    prices.push(Math.abs(amount))
    if (SUBTOTAL.test(label)) out.subtotal = amount
    else if (TOTAL.test(label)) out.total = amount
    else if (TAX.test(label)) out.tax = (out.tax || 0) + amount
    else if (TIP.test(label)) out.tip = (out.tip || 0) + amount
    else if (SKIP.test(label)) continue
    else {
      const name = cleanName(label)
      if (name.length >= 2 && amount > 0) out.items.push({ name, price: amount })
    }
  }
  if (out.total === null && prices.length) out.total = Math.max(...prices)
  return out
}
