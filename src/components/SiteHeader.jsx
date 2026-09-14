import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { colors } from '../theme.js'

function CoffeeButtonSlot() {
  const ref = useRef(null)

  useEffect(() => {
    function attach() {
      const el = document.querySelector('.bmc-btn-container')
      if (el && ref.current) {
        ref.current.appendChild(el)
        return true
      }
      return false
    }
    if (attach()) return
    const observer = new MutationObserver(() => { if (attach()) observer.disconnect() })
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className="bmc-slot" />
}

const navLinkStyle = ({ isActive }) => ({
  fontSize: 13.5,
  color: isActive ? colors.text : colors.muted2,
  fontWeight: isActive ? 500 : 400,
  textDecoration: 'none',
})

export default function SiteHeader() {
  return (
    <header style={{ borderBottom: `1px solid ${colors.divider}` }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', color: 'inherit' }}>
          <div style={{ width: 13, height: 13, borderRadius: 4, background: colors.green }} />
          <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em' }}>EasyBillSplitting</span>
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <NavLink to="/" end style={navLinkStyle}>Split a bill</NavLink>
          <NavLink to="/how-to-split-a-bill" style={navLinkStyle}>How to split a bill</NavLink>
          <NavLink to="/faq" style={navLinkStyle}>FAQ</NavLink>
          <NavLink to="/history" style={navLinkStyle}>History</NavLink>
          <NavLink to="/about" style={navLinkStyle}>About</NavLink>
          <CoffeeButtonSlot />
        </nav>
      </div>
    </header>
  )
}
