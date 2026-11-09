import { Link } from 'react-router-dom'
import { colors } from '../theme.js'

const linkStyle = { fontSize: 13.5, fontWeight: 500, color: colors.text, textDecoration: 'underline', textDecorationColor: '#19b083', textDecorationThickness: 2, textUnderlineOffset: 3 }

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: '2px solid #1c1b18', marginTop: 60 }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '28px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span className="site-foot-copy" style={{ fontSize: 12.5, color: colors.muted3 }}>© {new Date().getFullYear()} EasyBillSplitting</span>
        <nav className="site-foot-nav" style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
          <Link className="foot-link foot-dup" to="/about" style={linkStyle}>About</Link>
          <Link className="foot-link foot-dup" to="/guides" style={linkStyle}>Guides</Link>
          <Link className="foot-link foot-dup" to="/faq" style={linkStyle}>FAQ</Link>
          <Link className="foot-link foot-dup" to="/how-to-split-a-bill" style={linkStyle}>How to split a bill</Link>
          <Link className="foot-link foot-dup" to="/history" style={linkStyle}>History</Link>
          <Link className="foot-link" to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
          <Link className="foot-link" to="/terms" style={linkStyle}>Terms of Use</Link>
        </nav>
      </div>
    </footer>
  )
}
