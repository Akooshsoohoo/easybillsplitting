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

export default function Privacy() {
  usePageMeta(
    'Privacy Policy | EasyBillSplitting',
    'How EasyBillSplitting handles data: what the calculator does and does not collect, and how third-party ad providers use cookies.'
  )

  return (
    <ContentPage title="Privacy Policy" subtitle="Last updated 2026-09-14.">
      <Section title="What this site does not collect">
        <p>
          EasyBillSplitting has no user accounts, no login, and no backend server. The bill amounts, item
          names, prices, and person names you type into the calculator are never transmitted to, or stored on,
          any server we operate. While you're using the calculator, that data lives only in your browser's
          memory for that page visit and disappears when you refresh or close the tab, unless you choose to
          save the result as described below.
        </p>
      </Section>

      <Section title="Saved split history">
        <p>
          If you click "Save this split" or "Save to history" on the results screen, that split's totals are
          written to your browser's local storage and shown on the History page the next time you visit, even
          after closing the browser. This is optional and only happens if you take that action. The saved data
          stays on this device, is never transmitted to us or anyone else, and can be removed at any time by
          deleting individual entries or clicking "Clear all" on the History page. Clearing your browser's site
          data will also remove it.
        </p>
      </Section>

      <Section title="Advertising and cookies">
        <p>
          This site may show ads served by Google AdSense and its advertising partners. Google and its partners
          use cookies to serve ads based on a visitor's prior visits to this site or other sites on the internet.
          You can opt out of personalized advertising by visiting{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" style={{ color: colors.greenDark }}>
            Google's Ads Settings
          </a>{' '}
          or, for third-party vendors more broadly,{' '}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer" style={{ color: colors.greenDark }}>
            aboutads.info
          </a>.
        </p>
      </Section>

      <Section title="Analytics">
        <p>
          We may use basic, aggregated web analytics (such as page-view counts) to understand how the site is
          used. This does not include the contents of any bill you calculate.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          If this policy changes, for example if a new analytics or advertising provider is added, the
          "last updated" date above will be revised.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about this policy can be sent to{' '}
          <a href="mailto:1sahakash1@gmail.com" style={{ color: colors.greenDark }}>1sahakash1@gmail.com</a>.
        </p>
      </Section>
    </ContentPage>
  )
}
