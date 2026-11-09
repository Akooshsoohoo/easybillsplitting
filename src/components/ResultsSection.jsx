import { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { formatMoney, breakdownText } from '../utils.js'
import { stepButtonStyle } from '../theme.js'
import { generateShareCard, buildShareText } from '../shareCard.js'
import { upsertHistoryEntry } from '../history.js'
import { isNative } from '../platform.js'
import { shareImageNative } from '../nativeShare.js'
import { tapSuccess } from '../haptics.js'
import Avatar from './Avatar.jsx'

export default function ResultsSection({ style, currency, rows, tipEven, onTipModeChange, grandTotal, savings = 0, hasUnassigned, unassignedAmount }) {
  const [sharing, setSharing] = useState(false)
  const hasSavings = savings > 0.005

  const entryIdRef = useRef(null)
  useEffect(() => {
    if (rows.length === 0) return
    const timer = setTimeout(() => {
      const record = upsertHistoryEntry(entryIdRef.current, {
        mode: 'item', people: rows.map((r) => ({ name: r.name, total: r.total, avatar: r.avatar })), grandTotal, savings, currency,
      })
      entryIdRef.current = record.id
    }, 700)
    return () => clearTimeout(timer)
  }, [rows, grandTotal, savings, currency])

  async function handleShare() {
    if (sharing || rows.length === 0) return
    setSharing(true)
    try {
      const blob = await generateShareCard({ rows, grandTotal, currency, savings, hasUnassigned, unassignedAmount })
      const file = new File([blob], 'bill-split.png', { type: 'image/png' })
      const text = buildShareText({ rows, grandTotal, currency, savings })

      if (isNative) {
        await shareImageNative(blob, text)
        tapSuccess()
      } else if (navigator.canShare && navigator.canShare({ files: [file] })) {
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
      <SectionHeading step={5} title="Who owes what" />
      <label style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', background: '#fff', border: '2px solid #1c1b18', boxShadow: '4px 4px 0 #1c1b18', borderRadius: 10, marginBottom: 12, cursor: 'pointer' }}>
        <input type="checkbox" checked={tipEven} onChange={(e) => onTipModeChange(e.target.checked)} style={{ width: 18, height: 18, accentColor: '#19b083', margin: 0 }} />
        <span style={{ fontSize: 14 }}>Split the tip evenly</span>
      </label>
      <div className="hard-card" style={{ background: '#fff', border: '2px solid #1c1b18', boxShadow: '4px 4px 0 #1c1b18', borderRadius: 10, overflow: 'hidden' }}>
        {rows.map((r) => {
          const off = (r.orderDisc || 0) + (r.personDisc || 0)
          return (
          <div
            key={r.id}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14,
              padding: '18px 20px', borderBottom: '1px solid #efebe3', borderLeft: '4px solid #19b083',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar avatar={r.avatar} name={r.name} size={40} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{r.name}</div>
                <div style={{ fontSize: 12, color: '#8d877b', marginTop: 3 }}>
                  {breakdownText(r, currency)}
                  {off > 0.005 && <span style={{ color: '#19b083' }}> · −{formatMoney(off, currency)} off</span>}
                </div>
              </div>
            </div>
            <div style={{ fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums', fontSize: 21, fontWeight: 600, letterSpacing: '-0.02em', color: '#0e6b4f' }}>
              {formatMoney(r.total, currency)}
            </div>
          </div>
          )
        })}
        {hasSavings && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderTop: '1px solid #efebe3', color: '#19b083' }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>You saved</span>
            <span style={{ fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums', fontSize: 14, fontWeight: 600 }}>{formatMoney(savings, currency)}</span>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#e7f4ee', borderTop: '1px solid #b9dcce' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#0e6b4f' }}>Bill total</span>
          <span style={{ fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums', fontSize: 16, fontWeight: 600, color: '#0e6b4f' }}>{formatMoney(grandTotal, currency)}</span>
        </div>
      </div>
      {hasUnassigned && (
        <div style={{ marginTop: 10, padding: '12px 14px', borderRadius: 9, background: '#fff5e8', border: '1px solid #f2ddc0', fontSize: 13, color: '#8a6a3a' }}>
          {formatMoney(unassignedAmount, currency)} of items isn&rsquo;t assigned to anyone yet.
        </div>
      )}
      <button className="hard-btn" onClick={handleShare} disabled={sharing || rows.length === 0} style={stepButtonStyle(!sharing && rows.length > 0)}>
        {sharing ? 'Preparing…' : 'Share breakdown'}
      </button>
    </section>
  )
}
