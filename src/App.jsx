import { useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Landing from './components/Landing.jsx'
import AdRail from './components/AdRail.jsx'
import EvenSplitSection from './components/EvenSplitSection.jsx'
import ItemsSection from './components/ItemsSection.jsx'
import TaxTipSection from './components/TaxTipSection.jsx'
import NamesSection from './components/NamesSection.jsx'
import AssignSection from './components/AssignSection.jsx'
import ResultsSection from './components/ResultsSection.jsx'
import { parseNum } from './utils.js'
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
    const sub = {}
    persons.forEach((p) => { sub[p.id] = 0 })
    let assignedTotal = 0
    let unassigned = 0
    items.forEach((it) => {
      const sharers = persons.filter((p) => (assign[p.id] || []).includes(it.id))
      if (!sharers.length) { unassigned += it.price; return }
      const share = it.price / sharers.length
      sharers.forEach((p) => { sub[p.id] += share })
      assignedTotal += it.price
    })
    const rows = persons.map((p) => {
      const s = sub[p.id]
      const t = assignedTotal > 0 ? taxAmt * s / assignedTotal : 0
      const ti = resolvedTipEven
        ? (persons.length ? tipAmt / persons.length : 0)
        : (assignedTotal > 0 ? tipAmt * s / assignedTotal : 0)
      return { id: p.id, name: p.name, sub: s, tax: t, tip: ti, total: s + t + ti }
    })
    return { rows, tax: taxAmt, tip: tipAmt, unassigned, assignedTotal }
  }, [items, persons, assign, tax, tip, resolvedTipEven])

  const rowsById = useMemo(() => {
    const m = {}
    computed.rows.forEach((r) => { m[r.id] = r })
    return m
  }, [computed.rows])

  const gateTaxTip = itemsDone
  const gateNames = gateTaxTip && taxTipDone
  const gateAssign = gateNames && namesDone
  const gateResults = gateAssign && assignDone

  const grandTotal = computed.assignedTotal + computed.unassigned + computed.tax + computed.tip
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
              <ResultsSection
                style={sectionStyle(gateResults)}
                currency={CURRENCY}
                rows={computed.rows}
                tipEven={resolvedTipEven}
                onTipModeChange={setTipEven}
                grandTotal={grandTotal}
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
