import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'
import { colors } from '../theme.js'

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', background: colors.bg, color: colors.text, fontFamily: "'DM Sans',system-ui,sans-serif", display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
