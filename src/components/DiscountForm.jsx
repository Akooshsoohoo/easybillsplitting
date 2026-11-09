import { parseNum } from '../utils.js'

export default function DiscountForm({
  label, kind, value, currency,
  onLabelChange, onKindChange, onValueChange, onAdd,
}) {
  const canAdd = parseNum(value) > 0

  function onKeyDown(e) {
    if (e.key === 'Enter' && canAdd) onAdd()
  }

  const toggleBtn = (active) => ({
    flex: 1,
    height: 42,
    border: `1px solid ${active ? '#19b083' : '#e8e4dc'}`,
    background: active ? '#19b083' : '#fbf9f5',
    color: active ? '#fff' : '#7d776b',
    fontSize: 15,
    fontFamily: 'inherit',
    cursor: 'pointer',
  })

  return (
    <div className="hard-card" style={{ background: '#fff', border: '2px solid #1c1b18', boxShadow: '4px 4px 0 #1c1b18', borderRadius: 10, padding: 12, display: 'grid', gap: 10 }}>
      <input
        placeholder="Label (optional)"
        value={label}
        onChange={(e) => onLabelChange(e.target.value)}
        onKeyDown={onKeyDown}
        style={{ height: 42, padding: '0 12px', border: '1px solid #e8e4dc', borderRadius: 8, fontSize: 16, outline: 'none', background: '#fbf9f5' }}
      />
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ display: 'flex', borderRadius: 8, overflow: 'hidden', border: '1px solid #e8e4dc', flex: '0 0 118px' }}>
          <button type="button" onClick={() => onKindChange('percent')} style={{ ...toggleBtn(kind === 'percent'), borderRadius: 0, borderWidth: 0, borderRight: '1px solid #e8e4dc' }}>%</button>
          <button type="button" onClick={() => onKindChange('amount')} style={{ ...toggleBtn(kind === 'amount'), borderRadius: 0, borderWidth: 0 }}>{currency}</button>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6, minWidth: 0, border: '1px solid #e8e4dc', borderRadius: 8, padding: '0 12px', background: '#fbf9f5' }}>
          <span style={{ fontSize: 16, color: '#b0aa9e' }}>{kind === 'percent' ? '%' : currency}</span>
          <input
            inputMode="decimal"
            placeholder="0"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            onKeyDown={onKeyDown}
            style={{ width: '100%', minWidth: 0, height: 42, border: 0, outline: 'none', background: 'transparent', fontSize: 16, fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums', color: '#1c1b18' }}
          />
        </div>
        <button
          type="button"
          className="hard-btn"
          onClick={onAdd}
          disabled={!canAdd}
          style={{ width: 42, height: 42, borderRadius: 8, border: canAdd ? '2px solid #1c1b18' : 0, boxShadow: canAdd ? '3px 3px 0 #1c1b18' : 'none', fontWeight: 600, background: canAdd ? '#19b083' : '#e8e4dc', color: canAdd ? '#fff' : '#b0aa9e', fontSize: 20, cursor: canAdd ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}
        >
          +
        </button>
      </div>
    </div>
  )
}
