export function parseNum(v) {
  const n = parseFloat(String(v).replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

export function formatMoney(n, currency = '$') {
  return currency + n.toFixed(2);
}
