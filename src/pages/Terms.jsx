import { Link } from 'react-router-dom'
import ContentPage from '../components/ContentPage.jsx'
import { colors } from '../theme.js'
import { usePageMeta } from '../usePageMeta.js'

function Section({ title, children }) {
  return (
    <section style={{ marginTop: 26 }}>
      <h2 style={{ fontSize: 17, fontWeight: 500, margin: '0 0 8px' }}>{title}</h2>
      <div style={{ fontSize: 14.5, lineHeight: 1.7, color: colors.muted1 }}>{children}</div>
    </section>
  )
}

export default function Terms() {
  usePageMeta(
    'Terms of Use — EasyBillSplitting',
    'Terms of use for EasyBillSplitting, a free browser-based bill-splitting calculator.'
  )

  return (
    <ContentPage title="Terms of Use" subtitle="Last updated 2026-09-14.">
      <Section title="Using the site">
        <p>
          EasyBillSplitting is provided free of charge as a calculation tool to help split shared bills. It's
          intended for personal, informational use and requires no account or registration.
        </p>
      </Section>

      <Section title="No warranty on calculations">
        <p>
          The calculator is provided "as is," without warranty of any kind. While it's built and tested to
          calculate splits, tax, tip, and discounts correctly, you're responsible for verifying any amount
          before paying or collecting money based on it. We are not liable for any financial discrepancy,
          disagreement, or loss arising from use of the calculator's output.
        </p>
      </Section>

      <Section title="Availability">
        <p>
          The site is offered without guarantee of uptime or availability, and may change, be temporarily
          unavailable, or be discontinued at any time without notice.
        </p>
      </Section>

      <Section title="Third-party advertising">
        <p>
          This site may display advertising served by Google AdSense and similar third-party networks. Ads are
          served independently by those networks; we don't control the specific ad content shown. See the{' '}
          <Link to="/privacy-policy" style={{ color: colors.greenDark }}>Privacy Policy</Link> for how those networks
          use cookies.
        </p>
      </Section>

      <Section title="Changes to these terms">
        <p>Continued use of the site after a change to these terms constitutes acceptance of the revised terms.</p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about these terms can be sent to{' '}
          <a href="mailto:1sahakash1@gmail.com" style={{ color: colors.greenDark }}>1sahakash1@gmail.com</a>.
        </p>
      </Section>
    </ContentPage>
  )
}
