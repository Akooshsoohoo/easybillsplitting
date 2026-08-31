import { useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Landing from './components/Landing.jsx'
import AdRail from './components/AdRail.jsx'
import EvenSplitSection from './components/EvenSplitSection.jsx'
import ItemsSection from './components/ItemsSection.jsx'
import TaxTipSection from './components/TaxTipSection.jsx'
import NamesSection from './components/NamesSection.jsx'
import AssignSection from './components/AssignSection.jsx'
import DiscountsSection from './components/DiscountsSection.jsx'
import ResultsSection from './components/ResultsSection.jsx'
import { parseNum, discountAmount } from './utils.js'
import { sectionStyle } from './theme.js'

const CURRENCY = '$'
const DEFAULT_TIP_EVEN = false
const SHOW_AD_SLOT = false

function scrollToId(id) {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 12
    window.scrollTo({ top, behavior: 'smooth' })
  }))
}

export default function App() {
  const [mode, setMode] = useState(null)

  const [total, setTotal] = useState('')
  const [headcount, setHeadcount] = useState(2)

  const [items, setItems] = useState([])
  const [nName, setNName] = useState('')
  const [nPrice, setNPrice] = useState('')

  const [itemsDone, setItemsDone] = useState(false)

  const [tax, setTax] = useState('')
  const [tip, setTip] = useState('')
  const [taxTipDone, setTaxTipDone] = useState(false)

  const [persons, setPersons] = useState([])
  const [pName, setPName] = useState('')
  const [namesDone, setNamesDone] = useState(false)

  const [assign, setAssign] = useState({})
  const [assignDone, setAssignDone] = useState(false)
  const [sel, setSel] = useState(null)
  const [drag, setDrag] = useState(null)
  const [hover, setHover] = useState(null)

  const [discounts, setDiscounts] = useState([])
  const [discountsDone, setDiscountsDone] = useState(false)
  const [dLabel, setDLabel] = useState('')
  const [dKind, setDKind] = useState('percent')
  const [dValue, setDValue] = useState('')
  const [dTarget, setDTarget] = useState('order')

  const [evenDiscounts, setEvenDiscounts] = useState([])
  const [eLabel, setELabel] = useState('')
  const [eKind, setEKind] = useState('percent')
  const [eValue, setEValue] = useState('')

  const [tipEven, setTipEven] = useState(null)

  const uidRef = useRef(1)
  const nextId = (prefix) => prefix + uidRef.current++

  const dragHandlers = useRef({ onMove: null, onUp: null })
  useEffect(() => () => {
    if (dragHandlers.current.onMove) window.removeEventListener('pointermove', dragHandlers.current.onMove)
    if (dragHandlers.current.onUp) window.removeEventListener('pointerup', dragHandlers.current.onUp)
  }, [])

  function pick(m, id) {
    setMode(m)
    scrollToId(id)
  }

  function confirmItems() {
    if (items.length === 0) return
    setItemsDone(true)
    scrollToId('sec-taxtip')
  }
  function confirmTaxTip() {
    setTaxTipDone(true)
    scrollToId('sec-names')
  }
  function confirmNames() {
    if (persons.length < 2) return
    setNamesDone(true)
    scrollToId('sec-assign')
  }
  function confirmAssign() {
    setAssignDone(true)
    scrollToId('sec-discounts')
  }
  function confirmDiscounts() {
    setDiscountsDone(true)
    scrollToId('sec-results')
  }

  function addItem() {
    const n = nName.trim()
    const p = parseNum(nPrice)
    if (!n || !p) return
    setItems((s) => [...s, { id: nextId('i'), name: n, price: p }])
    setNName('')
    setNPrice('')
  }
  function removeItem(id) {
    setItems((s) => s.filter((x) => x.id !== id))
  }

  function addPerson() {
    const n = pName.trim()
    if (!n) return
    setPersons((s) => [...s, { id: nextId('p'), name: n }])
    setPName('')
  }
  function removePerson(pid) {
    setPersons((s) => s.filter((x) => x.id !== pid))
    setAssign((a) => {
      const { [pid]: _, ...rest } = a
      return rest
    })
    setDiscounts((s) => s.filter((d) => d.target !== pid))
    setDTarget((t) => (t === pid ? 'order' : t))
  }

  function addDiscount(target) {
    if (!(parseNum(dValue) > 0)) return
    setDiscounts((s) => [...s, { id: nextId('d'), label: dLabel.trim(), kind: dKind, value: dValue, target }])
    setDLabel('')
    setDValue('')
  }
  function removeDiscount(id) {
    setDiscounts((s) => s.filter((x) => x.id !== id))
  }
  function addEvenDiscount() {
    if (!(parseNum(eValue) > 0)) return
    setEvenDiscounts((s) => [...s, { id: nextId('d'), label: eLabel.trim(), kind: eKind, value: eValue }])
    setELabel('')
    setEValue('')
  }
  function removeEvenDiscount(id) {
    setEvenDiscounts((s) => s.filter((x) => x.id !== id))
  }

  function assignTo(pid, iid) {
    setAssign((a) => {
      const cur = a[pid] || []
      if (cur.includes(iid)) return a
      return { ...a, [pid]: [...cur, iid] }
    })
    setSel(null)
  }
  function unassign(pid, iid) {
    setAssign((a) => ({ ...a, [pid]: (a[pid] || []).filter((x) => x !== iid) }))
  }

  function bucketAt(e) {
    const el = document.elementFromPoint(e.clientX, e.clientY)
    const b = el && el.closest && el.closest('[data-bucket]')
    return b ? b.getAttribute('data-bucket') : null
  }

  function startDrag(id, e) {
    e.preventDefault()
    let moved = false
    setSel(null)
    setDrag({ id, x: e.clientX, y: e.clientY })

    const onMove = (ev) => {
      moved = true
      setDrag({ id, x: ev.clientX, y: ev.clientY })
      setHover(bucketAt(ev))
    }
    const onUp = (ev) => {
      const b = bucketAt(ev)
      if (b) assignTo(b, id)
      else if (!moved) setSel((s) => (s === id ? null : id))
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      dragHandlers.current = { onMove: null, onUp: null }
      setDrag(null)
      setHover(null)
    }
    dragHandlers.current = { onMove, onUp }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
  }

  function onBucketClick(pid) {
    if (sel) assignTo(pid, sel)
  }

  const resolvedTipEven = tipEven === null ? DEFAULT_TIP_EVEN : tipEven

  const computed = useMemo(() => {
    const taxAmt = parseNum(tax)
    const tipAmt = parseNum(tip)
    const rawSub = {}
    persons.forEach((p) => { rawSub[p.id] = 0 })
    let assignedTotal = 0
    let unassigned = 0
    items.forEach((it) => {
      const sharers = persons.filter((p) => (assign[p.id] || []).includes(it.id))
      if (!sharers.length) { unassigned += it.price; return }
      const share = it.price / sharers.length
      sharers.forEach((p) => { rawSub[p.id] += share })
      assignedTotal += it.price
    })

    // Whole-order discounts come off the item subtotal, allocated proportionally.
    const orderDiscRaw = discounts
      .filter((d) => d.target === 'order')
      .reduce((sum, d) => sum + discountAmount(assignedTotal, d.kind, d.value), 0)
    const orderDiscTotal = Math.min(Math.max(orderDiscRaw, 0), assignedTotal)
    const discountedAssignedTotal = assignedTotal - orderDiscTotal
    const scale = assignedTotal > 0 ? discountedAssignedTotal / assignedTotal : 0

    let personDiscTotal = 0
    const rows = persons.map((p) => {
      const s = rawSub[p.id] * scale
      const frac = discountedAssignedTotal > 0 ? s / discountedAssignedTotal : 0
      const t = taxAmt * frac
      const ti = resolvedTipEven
        ? (persons.length ? tipAmt / persons.length : 0)
        : tipAmt * frac
      const beforePersonal = s + t + ti
      // Per-person discounts come off the final total, floored at zero.
      const mineRaw = discounts
        .filter((d) => d.target === p.id)
        .reduce((sum, d) => sum + discountAmount(beforePersonal, d.kind, d.value), 0)
      const personDisc = Math.min(Math.max(mineRaw, 0), beforePersonal)
      personDiscTotal += personDisc
      return {
        id: p.id,
        name: p.name,
        rawSub: rawSub[p.id],
        sub: s,
        orderDisc: rawSub[p.id] - s,
        personDisc,
        tax: t,
        tip: ti,
        total: beforePersonal - personDisc,
      }
    })

    const savings = orderDiscTotal + personDiscTotal
    return { rows, tax: taxAmt, tip: tipAmt, unassigned, assignedTotal, orderDiscTotal, savings }
  }, [items, persons, assign, tax, tip, resolvedTipEven, discounts])

  const rowsById = useMemo(() => {
    const m = {}
    computed.rows.forEach((r) => { m[r.id] = r })
    return m
  }, [computed.rows])

  const gateTaxTip = itemsDone
  const gateNames = gateTaxTip && taxTipDone
  const gateAssign = gateNames && namesDone
  const gateDiscounts = gateAssign && assignDone
  const gateResults = gateDiscounts && discountsDone

  const grandTotal = computed.rows.reduce((s, r) => s + r.total, 0) + computed.unassigned
  const hasUnassigned = computed.unassigned > 0.001

  function reset() {
    setMode(null)
    setSel(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f2f7f4', color: '#12211c', fontFamily: "'DM Sans',system-ui,sans-serif", padding: '0 0 80px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, maxWidth: 1240, margin: '0 auto' }}>
        {SHOW_AD_SLOT && <AdRail />}

        <div style={{ maxWidth: 560, width: '100%', margin: '0 auto', padding: '0 20px' }}>
          <Header />
          <Landing onPickEven={() => pick('even', 'sec-even')} onPickItem={() => pick('item', 'sec-item')} />

          {mode === 'even' && (
            <EvenSplitSection
              currency={CURRENCY}
              total={total}
              onTotalChange={setTotal}
              headcount={headcount}
              onHeadcountChange={setHeadcount}
              onInc={() => setHeadcount((h) => (Math.max(1, parseInt(h, 10) || 1)) + 1)}
              onDec={() => setHeadcount((h) => Math.max(1, (Math.max(1, parseInt(h, 10) || 1)) - 1))}
              evenDiscounts={evenDiscounts}
              eLabel={eLabel}
              eKind={eKind}
              eValue={eValue}
              onELabelChange={setELabel}
              onEKindChange={setEKind}
              onEValueChange={setEValue}
              onAddEvenDiscount={addEvenDiscount}
              onRemoveEvenDiscount={removeEvenDiscount}
            />
          )}

          {mode === 'item' && (
            <div id="sec-item">
              <ItemsSection
                currency={CURRENCY}
                items={items}
                onRemoveItem={removeItem}
                nName={nName}
                nPrice={nPrice}
                onNNameChange={setNName}
                onNPriceChange={setNPrice}
                onItemKeyDown={(e) => { if (e.key === 'Enter') addItem() }}
                onAddItem={addItem}
                onNext={confirmItems}
              />
              <TaxTipSection
                style={sectionStyle(gateTaxTip)}
                currency={CURRENCY}
                tax={tax}
                tip={tip}
                onTaxChange={setTax}
                onTipChange={setTip}
                onConfirm={confirmTaxTip}
              />
              <NamesSection
                style={sectionStyle(gateNames)}
                persons={persons}
                onRemovePerson={removePerson}
                pName={pName}
                onPNameChange={setPName}
                onPersonKeyDown={(e) => { if (e.key === 'Enter') addPerson() }}
                onAddPerson={addPerson}
                onNext={confirmNames}
              />
              <AssignSection
                style={sectionStyle(gateAssign)}
                currency={CURRENCY}
                items={items}
                persons={persons}
                assign={assign}
                sel={sel}
                hover={hover}
                drag={drag}
                rowsById={rowsById}
                onItemPointerDown={startDrag}
                onBucketClick={onBucketClick}
                onRemoveChip={unassign}
                onConfirm={confirmAssign}
              />
              <DiscountsSection
                style={sectionStyle(gateDiscounts)}
                currency={CURRENCY}
                persons={persons}
                discounts={discounts}
                savings={computed.savings}
                dLabel={dLabel}
                dKind={dKind}
                dValue={dValue}
                dTarget={dTarget}
                onDLabelChange={setDLabel}
                onDKindChange={setDKind}
                onDValueChange={setDValue}
                onDTargetChange={setDTarget}
                onAddDiscount={addDiscount}
                onRemoveDiscount={removeDiscount}
                onConfirm={confirmDiscounts}
              />
              <ResultsSection
                style={sectionStyle(gateResults)}
                currency={CURRENCY}
                rows={computed.rows}
                tipEven={resolvedTipEven}
                onTipModeChange={setTipEven}
                grandTotal={grandTotal}
                savings={computed.savings}
                hasUnassigned={hasUnassigned}
                unassignedAmount={computed.unassigned}
              />
            </div>
          )}

          {mode && (
            <button
              onClick={reset}
              style={{ marginTop: 32, width: '100%', padding: 14, borderRadius: 14, border: '1px solid #dceae4', background: 'transparent', fontSize: 14, color: '#7b9189', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Start over
            </button>
          )}
        </div>

        {SHOW_AD_SLOT && <AdRail />}
      </div>

      {drag && (
        <div
          style={{
            position: 'fixed', left: drag.x, top: drag.y, transform: 'translate(-50%,-140%)',
            pointerEvents: 'none', zIndex: 99, padding: '10px 14px', borderRadius: 12,
            background: '#19b083', color: '#fff', fontSize: 13, boxShadow: '0 10px 24px rgba(18,33,28,.22)',
          }}
        >
          {items.find((i) => i.id === drag.id)?.name ?? ''}
        </div>
      )}
    </div>
  )
}
