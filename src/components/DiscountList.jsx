import { formatMoney, parseNum } from '../utils.js'

function discountLabel(d, currency) {
  const val = d.kind === 'percent'
    ? `−${parseNum(d.value)}%`
    : `−${formatMoney(parseNum(d.value), currency)}`
  return d.label ? `${d.label} · ${val}` : val
}

export default function DiscountList({ discounts, onRemove, currency = '$', empty }) {
  if (discounts.length === 0) {
    return empty ? <div style={{ fontSize: 13, color: '#b0aa9e', padding: '2px 0' }}>{empty}</div> : null
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {discounts.map((d) => (
        <button
          className="chip pop-in"
          key={d.id}
          onClick={() => onRemove(d.id)}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', border: '1px solid #d9d3c7', borderRadius: 999, background: '#fff', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', color: '#1c1b18' }}
        >
          {discountLabel(d, currency)}<span style={{ color: '#b0aa9e', fontSize: 14 }}>&times;</span>
        </button>
      ))}
    </div>
  )
}
