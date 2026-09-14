import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { formatMoney } from '../utils.js'
import { stepButtonStyle } from '../theme.js'
import { generateShareCard, buildShareText } from '../shareCard.js'

export default function ResultsSection({ style, currency, rows, tipEven, onTipModeChange, grandTotal, savings = 0, hasUnassigned, unassignedAmount, onSave, saved }) {
  const [sharing, setSharing] = useState(false)
  const hasSavings = savings > 0.005

  async function handleShare() {
    if (sharing || rows.length === 0) return
    setSharing(true)
    try {
      const blob = await generateShareCard({ rows, grandTotal, currency, savings, hasUnassigned, unassignedAmount })
      const file = new File([blob], 'bill-split.png', { type: 'image/png' })
      const text = buildShareText({ rows, grandTotal, currency, savings })

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: 'Bill split', text })
      } else {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'bill-split.png'
        document.body.appendChild(a)
        a.click()
        a.remove()
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      if (err?.name !== 'AbortError') console.error(err)
    } finally {
      setSharing(false)
    }
  }

  return (
    <section id="sec-results" style={style}>
      <SectionHeading step={5} title="Who owes what" description="Here's the final breakdown, including tax and tip." />
      <label style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', background: '#fff', border: '1px solid #dceae4', borderRadius: 16, marginBottom: 12, cursor: 'pointer' }}>
        <input type="checkbox" checked={tipEven} onChange={(e) => onTipModeChange(e.target.checked)} style={{ width: 18, height: 18, accentColor: '#19b083', margin: 0 }} />
        <span style={{ fontSize: 14 }}>Split the tip evenly</span>
        <span style={{ marginLeft: 'auto', fontSize: 12, color: '#8ba49b' }}>{tipEven ? 'even' : 'proportional'}</span>
      </label>
      <div style={{ background: '#fff', border: '1px solid #b9dcce', borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 28px rgba(25,176,131,.1)' }}>
        {rows.map((r) => {
          const off = (r.orderDisc || 0) + (r.personDisc || 0)
          return (
          <div
            key={r.id}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14,
              padding: '18px 20px', borderBottom: '1px solid #eaf5f0', borderLeft: '4px solid #19b083',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #19b083, #0e6b4f)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: 15, fontWeight: 600,
                }}
              >
                {r.name.trim().charAt(0).toUpperCase() || '?'}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{r.name}</div>
                <div style={{ fontSize: 12, color: '#8ba49b', marginTop: 3 }}>
                  {formatMoney(r.sub, currency)} items · {formatMoney(r.tax, currency)} tax · {formatMoney(r.tip, currency)} tip
                  {off > 0.005 && <span style={{ color: '#19b083' }}> · −{formatMoney(off, currency)} off</span>}
                </div>
              </div>
            </div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 21, fontWeight: 600, letterSpacing: '-0.02em', color: '#0e6b4f' }}>
              {formatMoney(r.total, currency)}
            </div>
          </div>
          )
        })}
        {hasSavings && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderTop: '1px solid #eaf5f0', color: '#19b083' }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>You saved</span>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 14, fontWeight: 600 }}>{formatMoney(savings, currency)}</span>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#e7f4ee', borderTop: '1px solid #b9dcce' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#0e6b4f' }}>Bill total</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 16, fontWeight: 600, color: '#0e6b4f' }}>{formatMoney(grandTotal, currency)}</span>
        </div>
      </div>
      {hasUnassigned && (
        <div style={{ marginTop: 10, padding: '12px 14px', borderRadius: 14, background: '#fff5e8', border: '1px solid #f2ddc0', fontSize: 13, color: '#8a6a3a' }}>
          {formatMoney(unassignedAmount, currency)} of items isn&rsquo;t assigned to anyone yet.
        </div>
      )}
      <button onClick={handleShare} disabled={sharing || rows.length === 0} style={stepButtonStyle(!sharing && rows.length > 0)}>
        {sharing ? 'Preparing…' : 'Share breakdown'}
      </button>
      {onSave && (
        <button
          type="button"
          onClick={() => onSave({ mode: 'item', people: rows.map((r) => ({ name: r.name, total: r.total })), grandTotal, savings, currency })}
          disabled={rows.length === 0}
          style={{ marginTop: 10, width: '100%', padding: 13, borderRadius: 14, border: '1px solid #dceae4', background: 'transparent', fontSize: 14, color: rows.length > 0 ? '#0e6b4f' : '#a8bcb4', cursor: rows.length > 0 ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}
        >
          {saved ? 'Saved' : 'Save to history'}
        </button>
      )}
    </section>
  )
}
