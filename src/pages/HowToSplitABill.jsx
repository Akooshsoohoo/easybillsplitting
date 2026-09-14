import { Link } from 'react-router-dom'
import ContentPage from '../components/ContentPage.jsx'
import { colors } from '../theme.js'
import { usePageMeta } from '../usePageMeta.js'

function Section({ title, children }) {
  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ fontSize: 19, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 10px' }}>{title}</h2>
      <div style={{ fontSize: 14.5, lineHeight: 1.7, color: colors.muted1 }}>{children}</div>
    </section>
  )
}

export default function HowToSplitABill() {
  usePageMeta(
    'How to Split a Bill Fairly | EasyBillSplitting',
    'A practical guide to splitting a restaurant bill: when to split evenly, how to handle shared items, and how to divide tax and tip fairly.'
  )

  return (
    <ContentPage
      title="How to split a bill fairly"
      subtitle="A short guide to the two common ways a group splits a check, and how to keep tax and tip fair when everyone ordered something different."
    >
      <Section title="Splitting evenly vs. splitting by item">
        <p>
          There are really only two approaches to splitting a bill, and the right one depends on what the group
          ordered. <strong>Splitting evenly</strong> means dividing the total by the number of people. It works
          well when everyone ordered roughly the same amount, such as a group of friends who each got an entrée
          and a drink. It's fast and nobody has to itemize anything.
        </p>
        <p>
          <strong>Splitting by item</strong> is fairer when orders were uneven, for example if one person had an
          appetizer and a soda while another had three courses and two cocktails. Itemizing means each person
          pays for roughly what they actually consumed, plus a fair share of tax and tip, instead of subsidizing
          someone else's order.
        </p>
      </Section>

      <Section title="Handling shared items">
        <p>
          Shared plates are the trickiest part of splitting by item. The fairest approach is to divide a shared
          item's cost evenly across everyone who ate it. A $24 appetizer split three ways is $8 each, rather
          than being assigned to whoever happened to order it. In EasyBillSplitting's{' '}
          <Link to="/" style={{ color: colors.greenDark }}>split-by-item mode</Link>, you can drag one item onto
          multiple people, and it automatically divides that item's price evenly across everyone it's assigned
          to.
        </p>
      </Section>

      <Section title="Dividing tax and tip fairly">
        <p>
          Once each person's item subtotal is known, tax and tip should generally scale with how much each
          person ordered rather than being split evenly across the group. Someone who ordered $60 of food
          should pay more of the tax and tip than someone who ordered $15. This is called a{' '}
          <em>proportional</em> split, and it's the default in most bill-splitting tools, including this one.
        </p>
        <p>
          There's a reasonable exception. Some groups prefer to split tip evenly regardless of order size,
          treating service as something the whole table benefited from equally. Both approaches are common, and
          the choice really comes down to group preference, which is why the results screen lets you toggle
          between proportional and even tip splitting after the numbers are in.
        </p>
      </Section>

      <Section title="Applying discounts and coupons">
        <p>
          A discount that applies to the whole order, such as a happy-hour percentage off or a coupon, should
          come off the subtotal before tax and tip are calculated, allocated proportionally across everyone
          based on what they ordered. A discount that applies to one person only, such as a birthday freebie or
          a loyalty reward, should come off that person's final total instead. Keeping these two cases separate
          is what prevents a group discount from being absorbed by just one person, or a personal discount from
          quietly reducing everyone else's share too.
        </p>
      </Section>

      <Section title="A quick worked example">
        <p>
          Say three friends split a bill. Person A ordered $30 of food, Person B ordered $20, and they shared a
          $12 appetizer evenly. Item subtotals become A: $36 ($30 plus $6 shared), B: $26 ($20 plus $6 shared).
          With $5 tax and $10 tip split proportionally, A (about 58% of the subtotal) pays roughly $2.90 tax and
          $5.80 tip, and B pays the rest. Each person pays tax and tip in proportion to what they actually
          ordered, instead of an even split that would overcharge the person who ordered less.
        </p>
      </Section>

      <p style={{ marginTop: 32, fontSize: 14.5 }}>
        Ready to run the numbers on an actual bill? <Link to="/" style={{ color: colors.greenDark }}>Use the calculator</Link>,
        or check the <Link to="/faq" style={{ color: colors.greenDark }}>FAQ</Link> for edge cases like unassigned
        items and even-split discounts.
      </p>
    </ContentPage>
  )
}
