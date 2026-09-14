import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContentPage from '../components/ContentPage.jsx'
import { colors } from '../theme.js'
import { formatMoney } from '../utils.js'
import { loadHistory, removeHistoryEntry, clearHistory } from '../history.js'
import { usePageMeta } from '../usePageMeta.js'

function formatDate(ts) {
  return new Date(ts).toLocaleString(undefined, {
    month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit',
  })
}

function EntryCard({ entry, onRemove }) {
  const currency = entry.currency || '$'
  return (
    <div style={{ background: '#fff', border: `1px solid ${colors.borderMed}`, borderRadius: 16, padding: '16px 18px', marginBottom: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: colors.greenDark, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {entry.mode === 'even' ? 'Split evenly' : 'Split by item'}
          </div>
          <div style={{ fontSize: 12, color: colors.muted3, marginTop: 2 }}>{formatDate(entry.createdAt)}</div>
        </div>
        <button
          type="button"
          onClick={() => onRemove(entry.id)}
          style={{ border: 0, background: 'transparent', color: colors.muted3, fontSize: 12.5, cursor: 'pointer', fontFamily: 'inherit', padding: 4 }}
        >
          Remove
        </button>
      </div>

      {entry.mode === 'even' ? (
        <div style={{ fontSize: 14.5 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
            <span style={{ color: colors.muted1 }}>{entry.headcount} people, {formatMoney(entry.total || 0, currency)} total</span>
            <span style={{ fontWeight: 600 }}>{formatMoney(entry.perPerson || 0, currency)} each</span>
          </div>
          {entry.discount > 0.005 && (
            <div style={{ fontSize: 13, color: colors.green, marginTop: 4 }}>Discount applied: {formatMoney(entry.discount, currency)}</div>
          )}
        </div>
      ) : (
        <div style={{ fontSize: 14.5 }}>
          {(entry.people || []).map((p, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', color: colors.muted1 }}>
              <span>{p.name}</span>
              <span style={{ fontWeight: 600, color: colors.text }}>{formatMoney(p.total, currency)}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0 0', marginTop: 6, borderTop: `1px solid ${colors.divider}`, fontWeight: 600 }}>
            <span>Total</span>
            <span>{formatMoney(entry.grandTotal || 0, currency)}</span>
          </div>
          {entry.savings > 0.005 && (
            <div style={{ fontSize: 13, color: colors.green, marginTop: 4 }}>Saved {formatMoney(entry.savings, currency)}</div>
          )}
        </div>
      )}
    </div>
  )
}

export default function History() {
  usePageMeta(
    'History | EasyBillSplitting',
    'Splits you have saved from the calculator, kept only on your device.'
  )

  const [entries, setEntries] = useState(() => loadHistory())
  const [confirmingClear, setConfirmingClear] = useState(false)

  function handleRemove(id) {
    setEntries(removeHistoryEntry(id))
  }

  function handleClear() {
    setEntries(clearHistory())
    setConfirmingClear(false)
  }

  return (
    <ContentPage
      title="History"
      subtitle="Splits you have chosen to save. This list is stored only on this device and is never sent anywhere."
    >
      {entries.length === 0 ? (
        <p style={{ color: colors.muted1 }}>
          No saved splits yet. Use the "Save this split" or "Save to history" button on the results screen after
          calculating a split, and it will show up here. Try the{' '}
          <Link to="/" style={{ color: colors.greenDark }}>calculator</Link>.
        </p>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
            {confirmingClear ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5 }}>
                <span style={{ color: colors.muted1 }}>Remove all saved splits?</span>
                <button type="button" onClick={handleClear} style={{ border: 0, background: 'transparent', color: '#c0392b', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 }}>Yes, clear</button>
                <button type="button" onClick={() => setConfirmingClear(false)} style={{ border: 0, background: 'transparent', color: colors.muted3, cursor: 'pointer', fontFamily: 'inherit' }}>Cancel</button>
              </div>
            ) : (
              <button type="button" onClick={() => setConfirmingClear(true)} style={{ border: 0, background: 'transparent', color: colors.muted2, fontSize: 13.5, cursor: 'pointer', fontFamily: 'inherit' }}>
                Clear all
              </button>
            )}
          </div>
          {entries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} onRemove={handleRemove} />
          ))}
        </>
      )}
    </ContentPage>
  )
}
