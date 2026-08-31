import { formatMoney, parseNum } from '../utils.js'

function discountLabel(d, currency) {
  const val = d.kind === 'percent'
    ? `−${parseNum(d.value)}%`
    : `−${formatMoney(parseNum(d.value), currency)}`
  return d.label ? `${d.label} · ${val}` : val
}

export default function DiscountList({ discounts, onRemove, currency = '$', empty }) {
  if (discounts.length === 0) {
    return empty ? <div style={{ fontSize: 13, color: '#a8bcb4', padding: '2px 0' }}>{empty}</div> : null
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {discounts.map((d) => (
        <button
          key={d.id}
          onClick={() => onRemove(d.id)}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', border: '1px solid #cfe4da', borderRadius: 999, background: '#fff', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', color: '#12211c' }}
        >
          {discountLabel(d, currency)}<span style={{ color: '#a8bcb4', fontSize: 14 }}>&times;</span>
        </button>
      ))}
    </div>
  )
}
