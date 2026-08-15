import { formatMoney } from '../utils.js'

export default function ResultsSection({ style, currency, rows, tipEven, onTipModeChange, grandTotal, hasUnassigned, unassignedAmount }) {
  return (
    <section id="sec-results" style={style}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 18 }}>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: '#19b083' }}>05</span>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 500, letterSpacing: '-0.025em' }}>Who owes what</h2>
      </div>
      <label style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', background: '#fff', border: '1px solid #dceae4', borderRadius: 16, marginBottom: 12, cursor: 'pointer' }}>
        <input type="checkbox" checked={tipEven} onChange={(e) => onTipModeChange(e.target.checked)} style={{ width: 18, height: 18, accentColor: '#19b083', margin: 0 }} />
        <span style={{ fontSize: 14 }}>Split the tip evenly</span>
        <span style={{ marginLeft: 'auto', fontSize: 12, color: '#8ba49b' }}>{tipEven ? 'even' : 'proportional'}</span>
      </label>
      <div style={{ background: '#fff', border: '1px solid #dceae4', borderRadius: 18, overflow: 'hidden' }}>
        {rows.map((r) => (
          <div key={r.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '16px 18px', borderBottom: '1px solid #f0f6f3' }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 500 }}>{r.name}</div>
              <div style={{ fontSize: 12, color: '#8ba49b', marginTop: 3 }}>
                {formatMoney(r.sub, currency)} items · {formatMoney(r.tax, currency)} tax · {formatMoney(r.tip, currency)} tip
              </div>
            </div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 19, fontWeight: 500, letterSpacing: '-0.02em' }}>{formatMoney(r.total, currency)}</div>
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', background: '#f6fbf9' }}>
          <span style={{ fontSize: 13, color: '#7b9189' }}>Bill total</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 15, fontWeight: 500 }}>{formatMoney(grandTotal, currency)}</span>
        </div>
      </div>
      {hasUnassigned && (
        <div style={{ marginTop: 10, padding: '12px 14px', borderRadius: 14, background: '#fff5e8', border: '1px solid #f2ddc0', fontSize: 13, color: '#8a6a3a' }}>
          {formatMoney(unassignedAmount, currency)} of items isn&rsquo;t assigned to anyone yet.
        </div>
      )}
    </section>
  )
}
