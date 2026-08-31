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
