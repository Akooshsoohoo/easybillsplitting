import { Link } from 'react-router-dom'
import { colors } from '../theme.js'

const linkStyle = { fontSize: 13, color: colors.muted2, textDecoration: 'none' }

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: `1px solid ${colors.divider}`, marginTop: 60 }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '28px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 12.5, color: colors.muted3 }}>© {new Date().getFullYear()} EasyBillSplitting</span>
        <nav style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/faq" style={linkStyle}>FAQ</Link>
          <Link to="/how-to-split-a-bill" style={linkStyle}>How to split a bill</Link>
          <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
          <Link to="/terms" style={linkStyle}>Terms of Use</Link>
        </nav>
      </div>
    </footer>
  )
}
