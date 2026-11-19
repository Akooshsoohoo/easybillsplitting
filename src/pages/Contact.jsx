import { Link } from 'react-router-dom'
import ContentPage from '../components/ContentPage.jsx'
import { colors } from '../theme.js'
import { usePageMeta } from '../usePageMeta.js'

export default function Contact() {
  usePageMeta(
    'Contact | EasyBillSplitting',
    'How to reach the person behind EasyBillSplitting about a bug, a wrong total, a feature idea or a privacy question.'
  )

  const link = { color: colors.greenDark }

  return (
    <ContentPage ads
      title="Contact"
      subtitle="EasyBillSplitting is a small independent project. Email is the best way to reach it."
    >
      <p>
        Write to <a href="mailto:1sahakash1@gmail.com" style={link}>1sahakash1@gmail.com</a>. A real person reads
        it.
      </p>
      <p>A few things that make a message easy to act on:</p>
      <ul style={{ margin: '0 0 14px', paddingLeft: 22, lineHeight: 1.7 }}>
        <li>
          <strong>A total that looks wrong.</strong> Send the items, the number of people, the tax, the tip and any
          discount you entered, plus the total you expected. Made-up numbers are fine. Please don't send photos of
          real receipts.
        </li>
        <li>
          <strong>A receipt the scanner misread.</strong> Tell me what kind of receipt it was (printed, handwritten,
          long, crumpled) and your device and browser. The <Link to="/guides/scan-a-receipt-to-split-it" style={link}>scanning
          guide</Link> explains what the scanner can and can't read.
        </li>
        <li>
          <strong>An idea.</strong> Say what you were trying to do when the app got in the way. That helps more than
          a feature name.
        </li>
        <li>
          <strong>A privacy question.</strong> Start with the <Link to="/privacy-policy" style={link}>privacy policy</Link>,
          then write if something is still unclear.
        </li>
      </ul>
      <p>
        Many questions are already answered in the <Link to="/faq" style={link}>FAQ</Link> and in the{' '}
        <Link to="/how-to-split-a-bill" style={link}>how-to guide</Link>. Because bills are stored only on your own
        device, there is no account to look up, so I can't recover a history you have cleared.
      </p>
    </ContentPage>
  )
}
