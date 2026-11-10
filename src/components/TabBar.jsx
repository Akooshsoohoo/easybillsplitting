import { NavLink, useLocation } from 'react-router-dom'
import { tapLight } from '../haptics.js'

const INFO_PATHS = ['/info', '/guides', '/faq', '/about', '/how-to-split-a-bill', '/privacy-policy', '/terms']

const TABS = [
  { to: '/', label: 'Split', end: true },
  { to: '/history', label: 'History' },
  { to: '/info', label: 'Info' },
]

// Bottom navigation, shown only inside the iOS app.
export default function TabBar() {
  const { pathname } = useLocation()
  const inInfo = INFO_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))
  return (
    <nav className="tab-bar" aria-label="Main">
      {TABS.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          end={t.end}
          onClick={tapLight}
          className={({ isActive }) => 'tab-item' + ((t.to === '/info' ? inInfo : isActive) ? ' tab-active' : '')}
        >
          {t.label}
        </NavLink>
      ))}
    </nav>
  )
}
