import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import DiscountForm from './DiscountForm.jsx'
import DiscountList from './DiscountList.jsx'
import { formatMoney, parseNum, discountAmount } from '../utils.js'

export default function EvenSplitSection({
  currency, total, onTotalChange, headcount, onHeadcountChange, onInc, onDec,
  evenDiscounts = [], eLabel, eKind, eValue,
  onELabelChange, onEKindChange, onEValueChange, onAddEvenDiscount, onRemoveEvenDiscount,
}) {
  const [open, setOpen] = useState(false)
  const head = Math.max(1, parseInt(headcount, 10) || 1)
  const subtotal = parseNum(total)
  const rawDisc = evenDiscounts.reduce((sum, d) => sum + discountAmount(subtotal, d.kind, d.value), 0)
  const discTotal = Math.min(Math.max(rawDisc, 0), subtotal)
  const hasDisc = discTotal > 0.005
  const per = (subtotal - discTotal) / head
  const rawPer = subtotal / head
  const evenNote = `${head}${head === 1 ? ' person' : ' people'} · ${formatMoney(subtotal, currency)} total`

  return (
    <section id="sec-even" style={{ padding: '44px 0 0' }}>
      <SectionHeading step={1} title="Even split" description="Enter the total bill and how many people are splitting it. Updates instantly as you type." />
      <div style={{ background: '#ffffff', border: '1px solid #dceae4', borderRadius: 18, padding: 20 }}>
        <label style={{ display: 'block', fontSize: 12, color: '#7b9189', marginBottom: 7 }}>Total bill</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #e4efea', paddingBottom: 12, marginBottom: 20 }}>
          <span style={{ fontSize: 26, color: '#a8bcb4' }}>{currency}</span>
          <input
            inputMode="decimal"
            placeholder="0.00"
            value={total}
            onChange={(e) => onTotalChange(e.target.value)}
            style={{ flex: 1, border: 0, outline: 'none', fontSize: 26, fontWeight: 500, letterSpacing: '-0.02em', color: '#12211c', background: 'transparent', width: '100%' }}
          />
        </div>
        <label style={{ display: 'block', fontSize: 12, color: '#7b9189', marginBottom: 7 }}>People</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={onDec} style={{ width: 42, height: 42, borderRadius: 12, border: '1px solid #cfe4da', background: '#f6fbf9', fontSize: 20, color: '#12211c', cursor: 'pointer', fontFamily: 'inherit' }}>&minus;</button>
          <input
            inputMode="numeric"
            value={String(headcount)}
            onChange={(e) => onHeadcountChange(e.target.value.replace(/[^0-9]/g, ''))}
            style={{ flex: 1, height: 42, textAlign: 'center', border: '1px solid #e4efea', borderRadius: 12, fontSize: 17, fontWeight: 500, color: '#12211c', background: '#fff', outline: 'none' }}
          />
          <button onClick={onInc} style={{ width: 42, height: 42, borderRadius: 12, border: '1px solid #cfe4da', background: '#f6fbf9', fontSize: 20, color: '#12211c', cursor: 'pointer', fontFamily: 'inherit' }}>+</button>
        </div>

        <div style={{ marginTop: 18, borderTop: '1px solid #e4efea', paddingTop: 14 }}>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: 0, background: 'transparent', padding: 0, fontSize: 13, color: '#0e6b4f', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            <span>{hasDisc ? `Discount · −${formatMoney(discTotal, currency)}` : 'Add a discount'}</span>
            <span style={{ color: '#8ba49b' }}>{open ? '–' : '+'}</span>
          </button>
          {open && (
            <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
              <DiscountList discounts={evenDiscounts} onRemove={onRemoveEvenDiscount} currency={currency} />
              <DiscountForm
                label={eLabel}
                kind={eKind}
                value={eValue}
                currency={currency}
                onLabelChange={onELabelChange}
                onKindChange={onEKindChange}
                onValueChange={onEValueChange}
                onAdd={onAddEvenDiscount}
              />
            </div>
          )}
        </div>
      </div>
      <div style={{ marginTop: 14, background: '#19b083', borderRadius: 18, padding: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', color: '#ffffff' }}>
        <div>
          <div style={{ fontSize: 12, opacity: 0.82, marginBottom: 4 }}>Each person pays</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            {hasDisc && (
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 18, opacity: 0.7, textDecoration: 'line-through' }}>
                {formatMoney(isFinite(rawPer) ? rawPer : 0, currency)}
              </span>
            )}
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 36, fontWeight: 500, letterSpacing: '-0.03em' }}>{formatMoney(isFinite(per) ? per : 0, currency)}</span>
          </div>
          {hasDisc && <div style={{ fontSize: 12, opacity: 0.82, marginTop: 6 }}>You saved {formatMoney(discTotal, currency)}</div>}
        </div>
        <div style={{ fontSize: 12, opacity: 0.82, textAlign: 'right', lineHeight: 1.5 }}>{evenNote}</div>
      </div>
    </section>
  )
}
