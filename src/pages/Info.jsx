import { Link } from 'react-router-dom'
import ContentPage from '../components/ContentPage.jsx'
import { colors } from '../theme.js'
import { usePageMeta } from '../usePageMeta.js'

const ROWS = [
  { to: '/how-to-split-a-bill', title: 'How to split a bill', note: 'The full walkthrough' },
  { to: '/guides', title: 'Guides', note: 'Tips for dinners, trips and roommates' },
  { to: '/faq', title: 'FAQ', note: 'Common questions' },
  { to: '/about', title: 'About', note: 'Why this app exists' },
  { to: '/privacy-policy', title: 'Privacy Policy', note: 'Your bills stay on this device' },
  { to: '/terms', title: 'Terms of Use', note: '' },
]

export default function Info() {
  usePageMeta('Info | EasyBillSplitting', 'Guides, FAQ, about and legal pages for EasyBillSplitting.')

  return (
    <ContentPage title="Info" hideBack fit>
      <div style={{ border: '2px solid #1c1b18', borderRadius: 10, boxShadow: '4px 4px 0 #1c1b18', background: '#fff', overflow: 'hidden' }}>
        {ROWS.map((r, i) => (
          <Link
            key={r.to}
            to={r.to}
            className="info-row"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '16px 18px', minHeight: 56, textDecoration: 'none', color: colors.text, borderTop: i === 0 ? 'none' : `1px solid ${colors.borderLight}` }}
          >
            <span>
              <span style={{ display: 'block', fontSize: 16, fontWeight: 600 }}>{r.title}</span>
              {r.note && <span style={{ display: 'block', fontSize: 13, color: colors.muted1, marginTop: 2 }}>{r.note}</span>}
            </span>
            <span aria-hidden="true" style={{ fontSize: 20, color: colors.muted3 }}>&rsaquo;</span>
          </Link>
        ))}
      </div>
      <p style={{ marginTop: 24, fontSize: 12.5, color: colors.muted3, textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} EasyBillSplitting
      </p>
    </ContentPage>
  )
}
