import { useEffect, useRef, useState } from 'react'
import Avatar from './Avatar.jsx'
import { colors, wallpaper } from '../theme.js'
import { tapLight } from '../haptics.js'
import { setGate, introSeen, markIntroSeen } from '../adGate.js'

const SAM = { animal: 'fox', hat: 'tophat', face: null, neck: null, bg: '#fbdcc2' }
const ALEX = { animal: 'frog', hat: null, face: 'monocle', neck: 'bowtie', bg: '#d7efe4' }

const card = { background: '#fff', border: '2px solid #1c1b18', borderRadius: 12, boxShadow: '4px 4px 0 #1c1b18' }
const h = { margin: '0', fontSize: 32, lineHeight: 1.08, fontWeight: 700, letterSpacing: '-0.03em' }
const p = { margin: '10px 0 0', fontSize: 16, lineHeight: 1.5, color: '#4a463e' }

function Coin() {
  return (
    <svg width="170" height="170" viewBox="0 0 170 170" aria-hidden="true">
      <circle cx="90" cy="90" r="64" fill="#1c1b18" />
      <circle cx="84" cy="84" r="64" fill="#19b083" stroke="#1c1b18" strokeWidth="3" />
      <circle cx="84" cy="84" r="48" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="2.5" strokeDasharray="4 6" />
      <text x="84" y="106" textAnchor="middle" fontSize="70" fontWeight="700" fill="#fff" fontFamily="General Sans, system-ui, sans-serif">$</text>
      <path d="M142 28 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" fill="#f5c542" stroke="#1c1b18" strokeWidth="1.5" />
    </svg>
  )
}

function Chip({ name, price, tilt = 0 }) {
  return (
    <div style={{ ...card, padding: '8px 12px', fontSize: 14, fontWeight: 600, display: 'flex', gap: 10, transform: `rotate(${tilt}deg)`, boxShadow: '3px 3px 0 #1c1b18' }}>
      <span>{name}</span><span style={{ color: colors.greenDark }}>{price}</span>
    </div>
  )
}

function Assign() {
  return (
    <div style={{ width: '100%', maxWidth: 300 }}>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Chip name="Fries" price="$8" tilt={-3} />
        <Chip name="Pizza" price="$22" tilt={2} />
      </div>
      <svg width="100%" height="64" viewBox="0 0 300 64" aria-hidden="true" style={{ display: 'block' }}>
        <path d="M105 6 C105 30 80 34 80 56" stroke="#1c1b18" strokeWidth="2.5" fill="none" strokeDasharray="5 5" strokeLinecap="round" />
        <path d="M74 50 L80 60 L86 50" stroke="#1c1b18" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M195 6 C195 30 220 34 220 56" stroke="#1c1b18" strokeWidth="2.5" fill="none" strokeDasharray="5 5" strokeLinecap="round" />
        <path d="M214 50 L220 60 L226 50" stroke="#1c1b18" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {[['Sam', SAM], ['Alex', ALEX]].map(([n, a]) => (
          <div key={n} style={{ textAlign: 'center' }}>
            <div style={{ border: '2px solid #1c1b18', borderRadius: '50%', display: 'inline-block', boxShadow: '3px 3px 0 #1c1b18' }}><Avatar avatar={a} name={n} size={64} /></div>
            <div style={{ marginTop: 8, fontSize: 14, fontWeight: 600 }}>{n}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Row({ left, right, bold, muted }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: bold ? 17 : 14, fontWeight: bold ? 700 : 500, color: muted ? colors.muted1 : colors.text, padding: '4px 0' }}>
      <span>{left}</span><span>{right}</span>
    </div>
  )
}

function TaxTip() {
  return (
    <div style={{ ...card, width: '100%', maxWidth: 300, padding: '16px 18px' }}>
      <Row left="Sam's items" right="$15.00" />
      <Row left="Alex's items" right="$25.00" />
      <div style={{ borderTop: '1.5px dashed #a29c90', margin: '8px 0' }} />
      <Row left="Tax" right="$4.00" muted />
      <Row left="Tip" right="$8.00" muted />
      <div style={{ borderTop: '1.5px dashed #a29c90', margin: '8px 0' }} />
      <Row left="Sam pays" right="$19.50" bold />
      <Row left="Alex pays" right="$32.50" bold />
    </div>
  )
}

function ShareCard() {
  return (
    <div style={{ ...card, width: '100%', maxWidth: 290, padding: 0, overflow: 'hidden' }}>
      <div style={{ background: '#19b083', color: '#fff', padding: '12px 16px', fontSize: 15, fontWeight: 700, borderBottom: '2px solid #1c1b18' }}>Dinner split</div>
      {[['Sam', SAM, '$19.50'], ['Alex', ALEX, '$32.50']].map(([n, a, amt]) => (
        <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderBottom: '1px solid #e8e4dc' }}>
          <Avatar avatar={a} name={n} size={40} />
          <span style={{ flex: 1, fontSize: 16, fontWeight: 600 }}>{n}</span>
          <span style={{ fontSize: 16, fontWeight: 700 }}>{amt}</span>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', fontSize: 16, fontWeight: 700, background: '#faf8f4' }}>
        <span>Total</span><span>$52.00</span>
      </div>
    </div>
  )
}

const PAGES = [
  { art: <Coin />, title: 'Split any bill in seconds', text: 'No accounts. No math. Nothing to sign up for.' },
  { art: <Assign />, title: 'Add items, then drag them', text: 'Drop each item on whoever ordered it. Shared a plate? Drop it on more than one person.' },
  { art: <TaxTip />, title: 'Tax and tip, split fairly', text: 'They are divided by what each person ordered, so nobody covers someone else.' },
  { art: <ShareCard />, title: 'Send everyone their share', text: 'Share the result as a picture. Your bills stay on this device and are never uploaded.' },
]

// First-launch intro for the iOS app: four screens, no skip, shown once.
export default function Onboarding() {
  const [open, setOpen] = useState(() => !introSeen())
  const [i, setI] = useState(0)
  const startX = useRef(null)
  useEffect(() => { setGate('intro', open); return () => setGate('intro', false) }, [open])
  if (!open) return null

  const last = i === PAGES.length - 1
  const go = (n) => { setI(Math.max(0, Math.min(PAGES.length - 1, n))); tapLight() }
  const next = () => {
    if (last) { markIntroSeen(); setOpen(false); tapLight() } else go(i + 1)
  }
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (startX.current == null) return
    const dx = e.changedTouches[0].clientX - startX.current
    startX.current = null
    if (dx < -50) go(i + 1)
    else if (dx > 50) go(i - 1)
  }

  return (
    <div className="onb" style={{ backgroundImage: wallpaper }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} role="dialog" aria-label="Welcome">
      <div className="onb-track" style={{ transform: `translateX(-${i * 25}%)` }}>
        {PAGES.map((pg, n) => (
          <div className="onb-page" key={n} aria-hidden={n !== i}>
            <div className="onb-art">{pg.art}</div>
            <div style={{ paddingBottom: 12 }}>
              <h1 style={h}>{pg.title}</h1>
              <p style={p}>{pg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '8px 24px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 8 }} aria-hidden="true">
          {PAGES.map((_, n) => (
            <span key={n} style={{ width: n === i ? 22 : 8, height: 8, borderRadius: 4, background: n === i ? '#1c1b18' : '#cfc9bb', transition: 'width .25s ease' }} />
          ))}
        </div>
        <button
          onClick={next}
          style={{ minHeight: 48, padding: '0 26px', border: '2px solid #1c1b18', borderRadius: 12, background: '#19b083', color: '#fff', fontSize: 17, fontWeight: 700, boxShadow: '3px 3px 0 #1c1b18', fontFamily: 'inherit', cursor: 'pointer' }}
        >
          {last ? 'Get started' : 'Next'}
        </button>
      </div>
    </div>
  )
}
