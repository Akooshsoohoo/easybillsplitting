import SectionHeading from './SectionHeading.jsx'

export default function TaxTipSection({ style, currency, tax, tip, onTaxChange, onTipChange, onConfirm }) {
  return (
    <section id="sec-taxtip" style={style}>
      <SectionHeading step="02" title="Tax &amp; tip" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ background: '#fff', border: '1px solid #dceae4', borderRadius: 16, padding: 16 }}>
          <div style={{ fontSize: 12, color: '#7b9189', marginBottom: 8 }}>Tax</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 20, color: '#a8bcb4' }}>{currency}</span>
            <input
              inputMode="decimal"
              placeholder="0.00"
              value={tax}
              onChange={(e) => onTaxChange(e.target.value)}
              style={{ width: '100%', minWidth: 0, border: 0, outline: 'none', background: 'transparent', fontSize: 20, fontWeight: 500, fontFamily: "'DM Mono',monospace", color: '#12211c' }}
            />
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid #dceae4', borderRadius: 16, padding: 16 }}>
          <div style={{ fontSize: 12, color: '#7b9189', marginBottom: 8 }}>Tip</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 20, color: '#a8bcb4' }}>{currency}</span>
            <input
              inputMode="decimal"
              placeholder="0.00"
              value={tip}
              onChange={(e) => onTipChange(e.target.value)}
              style={{ width: '100%', minWidth: 0, border: 0, outline: 'none', background: 'transparent', fontSize: 20, fontWeight: 500, fontFamily: "'DM Mono',monospace", color: '#12211c' }}
            />
          </div>
        </div>
      </div>
      <button onClick={onConfirm} style={{ marginTop: 14, width: '100%', padding: 13, borderRadius: 12, border: 0, background: '#19b083', color: '#fff', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
        Continue
      </button>
    </section>
  )
}
