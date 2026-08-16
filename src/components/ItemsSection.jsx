import SectionHeading from './SectionHeading.jsx'
import { formatMoney } from '../utils.js'
import { stepButtonStyle } from '../theme.js'

export default function ItemsSection({ currency, items, onRemoveItem, nName, nPrice, onNNameChange, onNPriceChange, onItemKeyDown, onAddItem, onNext }) {
  const canProceed = items.length > 0
  return (
    <section style={{ padding: '44px 0 0' }}>
      <SectionHeading step={1} title="Items" description="Add each item that was ordered, with its price." />
      <div style={{ background: '#ffffff', border: '1px solid #dceae4', borderRadius: 18, padding: 8 }}>
        {items.map((it) => (
          <div key={it.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 12px', borderBottom: '1px solid #f0f6f3' }}>
            <span style={{ flex: 1, fontSize: 15 }}>{it.name}</span>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 14, color: '#3f5a51' }}>{formatMoney(it.price, currency)}</span>
            <button onClick={() => onRemoveItem(it.id)} style={{ width: 26, height: 26, borderRadius: 8, border: 0, background: '#f2f7f4', color: '#8ba49b', cursor: 'pointer', fontSize: 15, lineHeight: 1, fontFamily: 'inherit' }}>&times;</button>
          </div>
        ))}
        <div style={{ display: 'flex', gap: 8, padding: 10 }}>
          <input
            placeholder="Item"
            value={nName}
            onChange={(e) => onNNameChange(e.target.value)}
            onKeyDown={onItemKeyDown}
            style={{ flex: 1, minWidth: 0, height: 42, padding: '0 12px', border: '1px solid #e4efea', borderRadius: 12, fontSize: 16, outline: 'none', background: '#f9fcfb' }}
          />
          <input
            inputMode="decimal"
            placeholder="0.00"
            value={nPrice}
            onChange={(e) => onNPriceChange(e.target.value)}
            onKeyDown={onItemKeyDown}
            style={{ width: 88, height: 42, padding: '0 12px', border: '1px solid #e4efea', borderRadius: 12, fontSize: 16, outline: 'none', background: '#f9fcfb', fontFamily: "'DM Mono',monospace" }}
          />
          <button onClick={onAddItem} style={{ width: 42, height: 42, borderRadius: 12, border: 0, background: '#19b083', color: '#fff', fontSize: 20, cursor: 'pointer', fontFamily: 'inherit' }}>+</button>
        </div>
      </div>
      <button onClick={onNext} disabled={!canProceed} style={stepButtonStyle(canProceed)}>
        Next step
      </button>
    </section>
  )
}
