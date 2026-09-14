import { Link } from 'react-router-dom'
import ContentPage from '../components/ContentPage.jsx'
import { colors } from '../theme.js'
import { usePageMeta } from '../usePageMeta.js'

export default function About() {
  usePageMeta(
    'About | EasyBillSplitting',
    'Why EasyBillSplitting exists, how it works, and how it treats your data.'
  )

  return (
    <ContentPage
      title="About EasyBillSplitting"
      subtitle="A free, no-signup bill splitter for figuring out who owes what after a shared meal."
    >
      <p>
        When a shared bill arrives at a table, someone has to do the math. Splitting evenly is easy when
        everyone ordered about the same thing. It gets harder when one person had a few drinks, another split
        an appetizer, and the tax and tip need to be divided fairly. EasyBillSplitting was built to make that
        second case quick, without a phone calculator or an argument in the group chat.
      </p>
      <p>
        There are two ways to split a bill here. <strong>Split evenly</strong> takes a total and a headcount and
        divides them instantly. <strong>Split by item</strong> lets you list what was ordered, who was there,
        and who had what, including items that two or more people shared, then works out tax, tip, and any
        discounts proportionally. The full details are covered in the{' '}
        <Link to="/how-to-split-a-bill" style={{ color: colors.greenDark }}>how-to guide</Link>.
      </p>
      <p>
        The tool is intentionally simple. There is no account, no app to install, and no server storing what
        you type. Each calculation happens in your browser and is gone once you leave the page, unless you
        choose to save it. A saved split stays in{' '}
        <Link to="/history" style={{ color: colors.greenDark }}>your history</Link>, stored only on this device,
        until you remove it. See the{' '}
        <Link to="/privacy-policy" style={{ color: colors.greenDark }}>privacy policy</Link> for details. It's
        kept online and free through a small amount of on-page advertising and an optional tip jar in the
        header, not through fees or accounts.
      </p>
      <p>
        Questions or found a bug? Check the <Link to="/faq" style={{ color: colors.greenDark }}>FAQ</Link> first.
        Most common cases, like shared items, uneven splits, and tipping on discounted totals, are covered
        there. Anything else can go to{' '}
        <a href="mailto:1sahakash1@gmail.com" style={{ color: colors.greenDark }}>1sahakash1@gmail.com</a>.
      </p>
    </ContentPage>
  )
}
