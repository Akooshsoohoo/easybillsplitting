import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'
import TabBar from './TabBar.jsx'
import Onboarding from './Onboarding.jsx'
import AdBanner from './AdBanner.jsx'
import { colors, wallpaper } from '../theme.js'
import { isNative } from '../platform.js'

export default function Layout() {
  return (
    <div className={isNative ? 'native-app' : undefined} style={{ minHeight: '100vh', backgroundColor: colors.bg, backgroundImage: wallpaper, color: colors.text, fontFamily: "'General Sans',system-ui,sans-serif", display: 'flex', flexDirection: 'column' }}>
      {!isNative && <SiteHeader />}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      {isNative ? <TabBar /> : <SiteFooter />}
      {isNative && <Onboarding />}
      {isNative && <AdBanner />}
    </div>
  )
}
