import { Link } from 'react-router-dom'
import ContentPage from '../components/ContentPage.jsx'
import { colors } from '../theme.js'
import { usePageMeta } from '../usePageMeta.js'

export default function About() {
  usePageMeta(
    'About — EasyBillSplitting',
    'Why EasyBillSplitting exists, how it works, and how it treats your data.'
  )

  return (
    <ContentPage
      title="About EasyBillSplitting"
      subtitle="A free, no-signup bill splitter built to replace the phone calculator and the group chat argument that follows dinner."
    >
      <p>
        EasyBillSplitting started as a small, focused tool: the moment a shared bill arrives at a table, someone
        has to do the math, and it's rarely fun. Splitting evenly is easy when everyone ordered about the same
        thing. It gets messy fast when one person had three drinks, another split an appetizer, and the tax and
        tip need to land somewhere fair. This site exists to make that second case take thirty seconds instead
        of a phone calculator and a group chat argument.
      </p>
      <p>
        There are two ways to split a bill here. <strong>Split evenly</strong> takes a total and a headcount and
        divides them instantly. <strong>Split by item</strong> lets you list what was ordered, who was there,
        and who had what — including items two or more people shared — then works out tax, tip, and any
        discounts proportionally. The full mechanics are covered in the{' '}
        <Link to="/how-to-split-a-bill" style={{ color: colors.greenDark }}>how-to guide</Link>.
      </p>
      <p>
        The tool is deliberately simple: no account, no app to install, and no server storing what you type.
        Every calculation happens in your browser and is gone when you leave the page — see the{' '}
        <Link to="/privacy-policy" style={{ color: colors.greenDark }}>privacy policy</Link> for the specifics.
        It's kept online and free through a small amount of on-page advertising and an optional tip jar in the
        header, not through fees or accounts.
      </p>
      <p>
        Questions or found a bug? Check the <Link to="/faq" style={{ color: colors.greenDark }}>FAQ</Link> first
        — most edge cases (shared items, uneven splits, tipping on discounted totals) are covered there.
        Anything else can go to{' '}
        <a href="mailto:1sahakash1@gmail.com" style={{ color: colors.greenDark }}>1sahakash1@gmail.com</a>.
      </p>
    </ContentPage>
  )
}
