import SectionHeading from './SectionHeading.jsx'
import { stepButtonStyle } from '../theme.js'

export default function TaxTipSection({ style, currency, tax, tip, onTaxChange, onTipChange, onConfirm }) {
  return (
    <section id="sec-taxtip" style={style}>
      <SectionHeading step={2} title="Tax & tip" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div className="hard-card" style={{ background: '#fff', border: '2px solid #1c1b18', boxShadow: '4px 4px 0 #1c1b18', borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 12, color: '#7d776b', marginBottom: 8 }}>Tax</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 20, color: '#b0aa9e' }}>{currency}</span>
            <input
              inputMode="decimal"
              placeholder="0.00"
              value={tax}
              onChange={(e) => onTaxChange(e.target.value)}
              style={{ width: '100%', minWidth: 0, border: 0, outline: 'none', background: 'transparent', fontSize: 20, fontWeight: 500, fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums', color: '#1c1b18' }}
            />
          </div>
        </div>
        <div className="hard-card" style={{ background: '#fff', border: '2px solid #1c1b18', boxShadow: '4px 4px 0 #1c1b18', borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 12, color: '#7d776b', marginBottom: 8 }}>Tip</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 20, color: '#b0aa9e' }}>{currency}</span>
            <input
              inputMode="decimal"
              placeholder="0.00"
              value={tip}
              onChange={(e) => onTipChange(e.target.value)}
              style={{ width: '100%', minWidth: 0, border: 0, outline: 'none', background: 'transparent', fontSize: 20, fontWeight: 500, fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums', color: '#1c1b18' }}
            />
          </div>
        </div>
      </div>
      <button className="hard-btn" onClick={onConfirm} style={stepButtonStyle(true)}>
        Next step
      </button>
    </section>
  )
}
