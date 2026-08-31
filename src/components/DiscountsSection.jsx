import SectionHeading from './SectionHeading.jsx'
import DiscountForm from './DiscountForm.jsx'
import DiscountList from './DiscountList.jsx'
import { formatMoney } from '../utils.js'
import { stepButtonStyle } from '../theme.js'

const blockLabel = { fontSize: 12, fontWeight: 700, color: '#7b9189', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 10px' }

export default function DiscountsSection({
  style, currency, persons, discounts, savings,
  dLabel, dKind, dValue, dTarget,
  onDLabelChange, onDKindChange, onDValueChange, onDTargetChange,
  onAddDiscount, onRemoveDiscount, onConfirm,
}) {
  const orderDiscounts = discounts.filter((d) => d.target === 'order')
  const personChosen = persons.some((p) => p.id === dTarget)
  const draft = { label: dLabel, kind: dKind, value: dValue, currency }
  const draftHandlers = {
    onLabelChange: onDLabelChange,
    onKindChange: onDKindChange,
    onValueChange: onDValueChange,
  }

  return (
    <section id="sec-discounts" style={style}>
      <SectionHeading step={5} title="Discounts" description="Take money off the whole order, or off one person's share. Skip this step if there's nothing to apply." />

      <div style={{ marginBottom: 22 }}>
        <p style={blockLabel}>Whole order</p>
        <DiscountList discounts={orderDiscounts} onRemove={onRemoveDiscount} currency={currency} empty="No order discounts." />
        <div style={{ marginTop: 10 }}>
          <DiscountForm {...draft} {...draftHandlers} onAdd={() => onAddDiscount('order')} />
        </div>
      </div>

      {persons.length > 0 && (
        <div style={{ marginBottom: 22 }}>
          <p style={blockLabel}>One person</p>
          <select
            value={personChosen ? dTarget : ''}
            onChange={(e) => onDTargetChange(e.target.value)}
            style={{ width: '100%', height: 44, padding: '0 12px', border: '1px solid #dceae4', borderRadius: 14, fontSize: 15, background: '#fff', color: personChosen ? '#12211c' : '#a8bcb4', outline: 'none', marginBottom: 10, fontFamily: 'inherit' }}
          >
            <option value="" disabled>Choose a person…</option>
            {persons.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          {personChosen && (
            <DiscountForm {...draft} {...draftHandlers} onAdd={() => onAddDiscount(dTarget)} />
          )}

          <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
            {persons.map((p) => {
              const mine = discounts.filter((d) => d.target === p.id)
              if (mine.length === 0) return null
              return (
                <div key={p.id}>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{p.name}</div>
                  <DiscountList discounts={mine} onRemove={onRemoveDiscount} currency={currency} />
                </div>
              )
            })}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', background: '#e7f4ee', border: '1px solid #b9dcce', borderRadius: 16 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#0e6b4f' }}>You'll save</span>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 16, fontWeight: 600, color: '#0e6b4f' }}>{formatMoney(savings, currency)}</span>
      </div>

      <button onClick={onConfirm} style={stepButtonStyle(true)}>
        Next step
      </button>
    </section>
  )
}
