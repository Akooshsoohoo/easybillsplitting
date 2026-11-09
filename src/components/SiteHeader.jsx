import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { colors } from '../theme.js'
import { isNative } from '../platform.js'

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
  fontSize: 14,
  color: colors.text,
  fontWeight: 600,
  textDecoration: 'none',
  padding: '6px 12px',
  borderRadius: 8,
  border: isActive ? '2px solid #1c1b18' : '2px solid transparent',
  background: isActive ? '#19b083' : 'transparent',
  boxShadow: isActive ? '2px 2px 0 #1c1b18' : 'none',
})

export default function SiteHeader() {
  return (
    <header style={{ borderBottom: '2px solid #1c1b18' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', color: 'inherit' }}>
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.03em' }}>EasyBillSplitting</span>
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          <NavLink className="nav-link" to="/" end style={navLinkStyle}>Split a bill</NavLink>
          <NavLink className="nav-link" to="/how-to-split-a-bill" style={navLinkStyle}>How to split a bill</NavLink>
          <NavLink className="nav-link" to="/faq" style={navLinkStyle}>FAQ</NavLink>
          <NavLink className="nav-link" to="/history" style={navLinkStyle}>History</NavLink>
          <NavLink className="nav-link" to="/about" style={navLinkStyle}>About</NavLink>
          {!isNative && <CoffeeButtonSlot />}
        </nav>
      </div>
    </header>
  )
}
