import { Link, useParams, Navigate } from 'react-router-dom'
import ContentPage from '../components/ContentPage.jsx'
import { colors } from '../theme.js'
import AdSlot from '../components/AdSlot.jsx'
import { isNative } from '../platform.js'
import { usePageMeta } from '../usePageMeta.js'
import { guides, getGuide } from '../guides.js'

export function GuidesIndex() {
  usePageMeta(
    'Bill Splitting Guides | EasyBillSplitting',
    'Practical guides on splitting restaurant bills, tipping, tax, roommate costs, group trips and more.'
  )
  return (
    <ContentPage
      title="Guides"
      subtitle="Practical, plain-language guides to splitting bills, tipping and shared costs."
    >
      <div style={{ display: 'grid', gap: 14 }}>
        {guides.map((g) => (
          <Link
            key={g.slug}
            to={`/guides/${g.slug}`}
            className="hard-card"
            style={{ display: 'block', textDecoration: 'none', color: 'inherit', background: '#fff', border: '2px solid #1c1b18', boxShadow: '4px 4px 0 #1c1b18', borderRadius: 10, padding: '16px 18px' }}
          >
            <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em' }}>{g.title}</div>
            <div style={{ marginTop: 6, fontSize: 14, lineHeight: 1.55, color: colors.muted1 }}>{g.description}</div>
          </Link>
        ))}
      </div>
    </ContentPage>
  )
}

export function GuidePage() {
  const { slug } = useParams()
  const guide = getGuide(slug)
  usePageMeta(
    guide ? `${guide.title} | EasyBillSplitting` : 'Guide | EasyBillSplitting',
    guide ? guide.description : ''
  )
  if (!guide) return <Navigate to="/guides" replace />
  const others = guides.filter((g) => g.slug !== slug).slice(0, 3)
  return (
    <ContentPage ads title={guide.title} subtitle={guide.intro}>
      {guide.sections.map((s, idx) => (
        <div key={s.h}>
        {!isNative && idx === Math.ceil(guide.sections.length / 2) && guide.sections.length >= 5 && (
          <AdSlot slot="guideMid" label="Ad, middle of guide" />
        )}
        <section style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: 19, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 10px' }}>{s.h}</h2>
          <div style={{ fontSize: 14.5, lineHeight: 1.7, color: colors.muted1 }}>
            {s.p.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>
        </div>
      ))}
      <p style={{ marginTop: 36, fontSize: 15 }}>
        Ready to try it? <Link to="/" style={{ color: colors.greenDark }}>Split a bill now</Link>.
      </p>
      <section style={{ marginTop: 28, borderTop: '1px solid #e8e4dc', paddingTop: 20 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 10px' }}>More guides</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9, fontSize: 14.5 }}>
          {others.map((g) => (
            <li key={g.slug}><Link to={`/guides/${g.slug}`} style={{ color: colors.greenDark }}>{g.title}</Link></li>
          ))}
          <li><Link to="/guides" style={{ color: colors.greenDark }}>All guides</Link></li>
        </ul>
      </section>
    </ContentPage>
  )
}
