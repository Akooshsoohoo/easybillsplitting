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
    border: `1px solid ${active ? '#19b083' : '#e4efea'}`,
    background: active ? '#19b083' : '#f9fcfb',
    color: active ? '#fff' : '#7b9189',
    fontSize: 15,
    fontFamily: 'inherit',
    cursor: 'pointer',
  })

  return (
    <div style={{ background: '#fff', border: '1px solid #dceae4', borderRadius: 16, padding: 12, display: 'grid', gap: 10 }}>
      <input
        placeholder="Label (optional)"
        value={label}
        onChange={(e) => onLabelChange(e.target.value)}
        onKeyDown={onKeyDown}
        style={{ height: 42, padding: '0 12px', border: '1px solid #e4efea', borderRadius: 12, fontSize: 16, outline: 'none', background: '#f9fcfb' }}
      />
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ display: 'flex', borderRadius: 12, overflow: 'hidden', border: '1px solid #e4efea', flex: '0 0 118px' }}>
          <button type="button" onClick={() => onKindChange('percent')} style={{ ...toggleBtn(kind === 'percent'), borderRadius: 0, borderWidth: 0, borderRight: '1px solid #e4efea' }}>%</button>
          <button type="button" onClick={() => onKindChange('amount')} style={{ ...toggleBtn(kind === 'amount'), borderRadius: 0, borderWidth: 0 }}>{currency}</button>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6, minWidth: 0, border: '1px solid #e4efea', borderRadius: 12, padding: '0 12px', background: '#f9fcfb' }}>
          <span style={{ fontSize: 16, color: '#a8bcb4' }}>{kind === 'percent' ? '%' : currency}</span>
          <input
            inputMode="decimal"
            placeholder="0"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            onKeyDown={onKeyDown}
            style={{ width: '100%', minWidth: 0, height: 42, border: 0, outline: 'none', background: 'transparent', fontSize: 16, fontFamily: "'DM Mono',monospace", color: '#12211c' }}
          />
        </div>
        <button
          type="button"
          onClick={onAdd}
          disabled={!canAdd}
          style={{ width: 42, height: 42, borderRadius: 12, border: 0, background: canAdd ? '#19b083' : '#e4efea', color: canAdd ? '#fff' : '#a8bcb4', fontSize: 20, cursor: canAdd ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}
        >
          +
        </button>
      </div>
    </div>
  )
}
