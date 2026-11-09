import SectionHeading from './SectionHeading.jsx'
import { formatMoney } from '../utils.js'
import { stepButtonStyle } from '../theme.js'
import ReceiptScanner from './ReceiptScanner.jsx'

export default function ItemsSection({ currency, items, onRemoveItem, nName, nPrice, onNNameChange, onNPriceChange, onItemKeyDown, onAddItem, onNext, onScanned }) {
  const canProceed = items.length > 0
  return (
    <section style={{ padding: '44px 0 0' }}>
      <SectionHeading step={1} title="Items" description="Add each item that was ordered, with its price." />
      <ReceiptScanner mode="items" currency={currency} onItems={onScanned} />
      <div className="hard-card" style={{ background: '#fff', border: '2px solid #1c1b18', boxShadow: '4px 4px 0 #1c1b18', borderRadius: 10, padding: 8 }}>
        {items.map((it) => (
          <div key={it.id} className="pop-in" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 12px', borderBottom: '1px solid #efebe3' }}>
            <span style={{ flex: 1, fontSize: 15 }}>{it.name}</span>
            <span style={{ fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums', fontSize: 14, color: '#4a463e' }}>{formatMoney(it.price, currency)}</span>
            <button onClick={() => onRemoveItem(it.id)} style={{ width: 26, height: 26, borderRadius: 8, border: 0, background: '#f6f3ee', color: '#8d877b', cursor: 'pointer', fontSize: 15, lineHeight: 1, fontFamily: 'inherit' }}>&times;</button>
          </div>
        ))}
        <div style={{ display: 'flex', gap: 8, padding: 10 }}>
          <input
            placeholder="Item"
            value={nName}
            onChange={(e) => onNNameChange(e.target.value)}
            onKeyDown={onItemKeyDown}
            style={{ flex: 1, minWidth: 0, height: 42, padding: '0 12px', border: '1px solid #e8e4dc', borderRadius: 8, fontSize: 16, outline: 'none', background: '#fbf9f5' }}
          />
          <input
            inputMode="decimal"
            placeholder="0.00"
            value={nPrice}
            onChange={(e) => onNPriceChange(e.target.value)}
            onKeyDown={onItemKeyDown}
            style={{ width: 88, height: 42, padding: '0 12px', border: '1px solid #e8e4dc', borderRadius: 8, fontSize: 16, outline: 'none', background: '#fbf9f5', fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums' }}
          />
          <button className="hard-btn" onClick={onAddItem} style={{ width: 42, height: 42, borderRadius: 8, border: '2px solid #1c1b18', boxShadow: '3px 3px 0 #1c1b18', fontWeight: 600, background: '#19b083', color: '#fff', fontSize: 20, cursor: 'pointer', fontFamily: 'inherit' }}>+</button>
        </div>
      </div>
      <button className="hard-btn" onClick={onNext} disabled={!canProceed} style={stepButtonStyle(canProceed)}>
        Next step
      </button>
    </section>
  )
}
