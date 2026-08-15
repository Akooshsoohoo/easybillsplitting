import SectionHeading from './SectionHeading.jsx'
import { formatMoney, parseNum } from '../utils.js'

export default function EvenSplitSection({ currency, total, onTotalChange, headcount, onHeadcountChange, onInc, onDec }) {
  const head = Math.max(1, parseInt(headcount, 10) || 1)
  const per = parseNum(total) / head
  const evenNote = `${head}${head === 1 ? ' person' : ' people'} · ${formatMoney(parseNum(total), currency)} total`

  return (
    <section id="sec-even" style={{ padding: '44px 0 0' }}>
      <SectionHeading step="01" title="Even split" />
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
      </div>
      <div style={{ marginTop: 14, background: '#19b083', borderRadius: 18, padding: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', color: '#ffffff' }}>
        <div>
          <div style={{ fontSize: 12, opacity: 0.82, marginBottom: 4 }}>Each person pays</div>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 36, fontWeight: 500, letterSpacing: '-0.03em' }}>{formatMoney(isFinite(per) ? per : 0, currency)}</div>
        </div>
        <div style={{ fontSize: 12, opacity: 0.82, textAlign: 'right', lineHeight: 1.5 }}>{evenNote}</div>
      </div>
    </section>
  )
}
