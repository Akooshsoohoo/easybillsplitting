import { Link } from 'react-router-dom'
import { colors } from '../theme.js'
import { formatMoney } from '../utils.js'
import { loadHistory } from '../history.js'

const STEPS = [
  ['1', 'Add the items'],
  ['2', 'Drag to people'],
  ['3', 'Everyone sees their share'],
]

const modeBtn = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, width: '100%',
  padding: '18px 20px', border: '2px solid #1c1b18', borderRadius: 12, background: '#19b083', color: '#fff',
  boxShadow: '4px 4px 0 #1c1b18', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
}

// First screen of the iOS app. Fits one screen and does not scroll (see .native-lock in index.css).
export default function NativeLanding({ onPickEven, onPickItem }) {
  const last = loadHistory()[0]
  const lastLine = last
    ? last.mode === 'even'
      ? `${last.headcount} people, ${formatMoney(last.perPerson || 0, last.currency || '$')} each`
      : `${(last.people || []).length} people, ${formatMoney(last.grandTotal || 0, last.currency || '$')} total`
    : null
  return (
    <div className="native-lock" style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ paddingTop: 20 }}>
        <div className="rise" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', color: colors.greenDark }}>EasyBillSplitting</div>
        <h1 className="rise" style={{ animationDelay: '60ms', margin: '10px 0 0', fontSize: 40, lineHeight: 1.04, fontWeight: 700, letterSpacing: '-0.035em' }}>
          Split any bill in seconds
        </h1>
        <p className="rise" style={{ animationDelay: '120ms', margin: '10px 0 0', fontSize: 16, lineHeight: 1.45, color: '#4a463e' }}>
          No accounts, no math. Pick how you want to split.
        </p>
      </div>

      <div className="rise" style={{ animationDelay: '180ms', display: 'grid', gap: 14 }}>
        <button className="mode-btn" onClick={onPickEven} style={modeBtn}>
          <span>
            <span style={{ display: 'block', fontSize: 21, fontWeight: 700, letterSpacing: '-0.02em' }}>Split evenly</span>
            <span style={{ display: 'block', fontSize: 14, marginTop: 4, color: 'rgba(255,255,255,.9)' }}>One total, everyone pays the same</span>
          </span>
          <span aria-hidden="true" style={{ fontSize: 26, fontWeight: 700 }}>&rsaquo;</span>
        </button>
        <button className="mode-btn" onClick={onPickItem} style={modeBtn}>
          <span>
            <span style={{ display: 'block', fontSize: 21, fontWeight: 700, letterSpacing: '-0.02em' }}>Split by item</span>
            <span style={{ display: 'block', fontSize: 14, marginTop: 4, color: 'rgba(255,255,255,.9)' }}>Each person pays for what they ordered, with tax and tip</span>
          </span>
          <span aria-hidden="true" style={{ fontSize: 26, fontWeight: 700 }}>&rsaquo;</span>
        </button>
      </div>

      <div className="rise" style={{ animationDelay: '240ms', display: 'grid', gap: 14, paddingBottom: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {STEPS.map(([n, t]) => (
            <div key={n} style={{ background: colors.cardSoft, border: '1.5px solid #1c1b18', borderRadius: 10, padding: '10px 10px 12px' }}>
              <div style={{ width: 22, height: 22, borderRadius: 11, background: '#19b083', border: '1.5px solid #1c1b18', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{n}</div>
              <div style={{ marginTop: 8, fontSize: 12.5, lineHeight: 1.3, fontWeight: 500 }}>{t}</div>
            </div>
          ))}
        </div>
        {last && (
          <Link to="/history" style={{ display: 'block', textDecoration: 'none', color: 'inherit', background: '#fff', border: '1.5px solid #1c1b18', borderRadius: 10, padding: '12px 14px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: colors.muted3 }}>Last split</div>
            <div style={{ marginTop: 3, fontSize: 14.5, fontWeight: 500 }}>{lastLine}</div>
          </Link>
        )}
      </div>
    </div>
  )
}
