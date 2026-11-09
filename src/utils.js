// "$18.50 items · $1.33 tax": leaves out tax or tip when they are zero.
export function breakdownText(r, currency) {
  const parts = [`${formatMoney(r.sub, currency)} items`]
  if (r.tax > 0.005) parts.push(`${formatMoney(r.tax, currency)} tax`)
  if (r.tip > 0.005) parts.push(`${formatMoney(r.tip, currency)} tip`)
  return parts.join(' · ')
}

export function parseNum(v) {
  const n = parseFloat(String(v).replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

export function formatMoney(n, currency = '$') {
  return currency + n.toFixed(2);
}

export function discountAmount(base, kind, value) {
  const v = parseNum(value);
  return kind === 'percent' ? (base * v) / 100 : v;
}
