import { Link } from 'react-router-dom'
import ContentPage from '../components/ContentPage.jsx'
import { colors } from '../theme.js'
import { usePageMeta } from '../usePageMeta.js'

const faqs = [
  {
    q: 'Does EasyBillSplitting store my bill, names, or amounts?',
    a: "There's no account, no database, and no server processing your numbers. Everything you type, including item prices, names, tax, and tip, stays in your browser's memory for that page visit and disappears the moment you refresh or close the tab, unless you choose to save the result to your history.",
  },
  {
    q: 'Can I see past splits I have calculated?',
    a: "Yes. After a split is calculated, a \"Save this split\" or \"Save to history\" button appears on the results screen. Saved splits show up on the History page, listed by date, and are stored only in your browser's local storage on this device. You can remove one split or clear all of them from that page at any time. Nothing is ever sent to a server.",
  },
  {
    q: 'Do I need to create an account?',
    a: 'No. The tool works immediately with no sign-up, no email address, and no app install.',
  },
  {
    q: "How does the app split tax and tip when people ordered different amounts?",
    a: "By default, tax and tip are divided in proportion to each person's share of the item subtotal. So if one person's items came to twice as much as another's, they pay roughly twice the tax and tip. On the results screen you can flip a toggle to split tip evenly across everyone instead, regardless of what each person ordered.",
  },
  {
    q: 'What happens if two or more people shared one item?',
    a: "Drag that item onto every person who shared it. The app splits that item's price evenly across everyone it's assigned to, and each of their totals (plus tax/tip) reflects that fractional share.",
  },
  {
    q: 'What if an item is left unassigned?',
    a: "The results screen flags unassigned items and shows how much they add to the bill so nothing gets missed before you settle up.",
  },
  {
    q: 'Can I apply a discount or coupon?',
    a: "Yes. You can add a discount to the whole order, applied proportionally across everyone before tax and tip, or to a specific person's total. Both work as either a percentage or a flat amount.",
  },
  {
    q: 'Does the even-split mode support discounts too?',
    a: 'Yes. The Split Evenly flow has its own optional discount field that applies before the total is divided by headcount.',
  },
  {
    q: 'Is there a mobile app?',
    a: "There's no separate app. The site is built mobile-first and works the same way in any phone or desktop browser, including the touch-based drag-and-drop for assigning items.",
  },
  {
    q: 'Does it work without an internet connection?',
    a: "Once the page has loaded, all the calculations run locally and don't need a network connection. Loading the page itself the first time does require internet access.",
  },
  {
    q: 'Is EasyBillSplitting free?',
    a: "Yes, completely free. It's supported by a small amount of on-page advertising and an optional tip jar, not by fees or accounts.",
  },
]

export default function Faq() {
  usePageMeta(
    'FAQ | EasyBillSplitting',
    'Answers to common questions about splitting bills, shared items, tax and tip, and how EasyBillSplitting handles your data.'
  )

  return (
    <ContentPage
      title="Frequently asked questions"
      subtitle="Everything about how the calculator handles shared items, tax, tip, discounts, and your data."
    >
      {faqs.map((item, i) => (
        <div key={item.q} style={{ padding: '18px 0', borderBottom: i === faqs.length - 1 ? 'none' : `1px solid ${colors.divider}` }}>
          <h2 style={{ fontSize: 16, fontWeight: 500, margin: '0 0 8px' }}>{item.q}</h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: colors.muted1, margin: 0 }}>{item.a}</p>
        </div>
      ))}
      <p style={{ fontSize: 14.5, marginTop: 24 }}>
        Still have a question about how a calculation works? Read the{' '}
        <Link to="/how-to-split-a-bill" style={{ color: colors.greenDark }}>full how-to guide</Link>.
      </p>
    </ContentPage>
  )
}
