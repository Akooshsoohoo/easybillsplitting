import { useRef, useState } from 'react'
import { parseReceipt } from '../receiptParse.js'
import { formatMoney, parseNum } from '../utils.js'

const btn = { height: 40, padding: '0 14px', borderRadius: 8, border: '2px solid #1c1b18', boxShadow: '3px 3px 0 #1c1b18', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }
const field = { height: 38, padding: '0 10px', border: '1px solid #e8e4dc', borderRadius: 8, fontSize: 15, outline: 'none', background: '#fbf9f5', fontFamily: 'inherit' }

// mode "items": review parsed lines, then onItems({ items, tax, tip }).
// mode "total": review the detected total, then onTotal(string).
export default function ReceiptScanner({ mode, currency, onItems, onTotal }) {
  const inputRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | scanning | review | error
  const [progress, setProgress] = useState(0)
  const [rows, setRows] = useState([])
  const [extra, setExtra] = useState({ tax: '', tip: '', total: '' })

  async function onFile(e) {
    const file = e.target.files && e.target.files[0]
    e.target.value = ''
    if (!file) return
    setStatus('scanning')
    setProgress(0)
    try {
      const { createWorker } = await import('tesseract.js')
      const worker = await createWorker('eng', 1, {
        logger: (m) => { if (m.status === 'recognizing text') setProgress(Math.round(m.progress * 100)) },
      })
      const { data } = await worker.recognize(file)
      await worker.terminate()
      const parsed = parseReceipt(data.text)
      setRows(parsed.items.map((it, i) => ({ id: i, name: it.name, price: it.price.toFixed(2) })))
      setExtra({
        tax: parsed.tax != null ? parsed.tax.toFixed(2) : '',
        tip: parsed.tip != null ? parsed.tip.toFixed(2) : '',
        total: parsed.total != null ? parsed.total.toFixed(2) : '',
      })
      if (mode === 'items' ? parsed.items.length === 0 : parsed.total == null) { setStatus('error'); return }
      setStatus('review')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  function updateRow(id, patch) { setRows((r) => r.map((x) => (x.id === id ? { ...x, ...patch } : x))) }
  function removeRow(id) { setRows((r) => r.filter((x) => x.id !== id)) }

  function accept() {
    if (mode === 'total') {
      onTotal(extra.total)
    } else {
      const items = rows.map((r) => ({ name: r.name.trim(), price: parseNum(r.price) })).filter((r) => r.name && r.price > 0)
      onItems({ items, tax: extra.tax, tip: extra.tip })
    }
    setStatus('idle')
  }

  return (
    <div style={{ marginBottom: 12 }}>
      <input ref={inputRef} type="file" accept="image/*" capture="environment" onChange={onFile} style={{ display: 'none' }} />
      {(status === 'idle' || status === 'error') && (
        <>
          <button type="button" className="hard-btn" onClick={() => inputRef.current && inputRef.current.click()} style={{ ...btn, background: '#fff', color: '#1c1b18' }}>
            Scan a receipt
          </button>
          <span style={{ marginLeft: 10, fontSize: 12, color: '#8d877b' }}>Reads the photo on your device. Nothing is uploaded.</span>
          {status === 'error' && (
            <div role="alert" style={{ marginTop: 8, fontSize: 13, color: '#8a6a3a' }}>
              Couldn't read that receipt. Try a flatter, brighter photo, or enter it by hand.
            </div>
          )}
        </>
      )}
      {status === 'scanning' && (
        <div style={{ fontSize: 14, color: '#4a463e' }}>Reading receipt{progress ? `... ${progress}%` : '...'}</div>
      )}
      {status === 'review' && (
        <div className="hard-card" style={{ background: '#fff', border: '2px solid #1c1b18', boxShadow: '4px 4px 0 #1c1b18', borderRadius: 10, padding: 12 }}>
          <div style={{ fontSize: 13, color: '#6f6a60', marginBottom: 10 }}>
            Check what we found. Scans can misread, so fix anything that looks off.
          </div>
          {mode === 'items' ? (
            <>
              {rows.map((r) => (
                <div key={r.id} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <input value={r.name} onChange={(e) => updateRow(r.id, { name: e.target.value })} style={{ ...field, flex: 1, minWidth: 0 }} />
                  <input inputMode="decimal" value={r.price} onChange={(e) => updateRow(r.id, { price: e.target.value })} style={{ ...field, width: 80, fontVariantNumeric: 'tabular-nums' }} />
                  <button type="button" onClick={() => removeRow(r.id)} aria-label="Remove line" style={{ width: 34, height: 38, borderRadius: 8, border: 0, background: '#f6f3ee', color: '#8d877b', cursor: 'pointer', fontSize: 16 }}>&times;</button>
                </div>
              ))}
              {(extra.tax || extra.tip) && (
                <div style={{ fontSize: 13, color: '#4a463e', margin: '6px 0 10px' }}>
                  Also found{extra.tax ? ` tax ${formatMoney(parseNum(extra.tax), currency)}` : ''}{extra.tax && extra.tip ? ' and' : ''}{extra.tip ? ` tip ${formatMoney(parseNum(extra.tip), currency)}` : ''}. They will be filled in for you.
                </div>
              )}
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 14 }}>Total</span>
              <input inputMode="decimal" value={extra.total} onChange={(e) => setExtra((x) => ({ ...x, total: e.target.value }))} style={{ ...field, width: 110, fontVariantNumeric: 'tabular-nums' }} />
            </div>
          )}
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="button" className="hard-btn" onClick={accept} style={{ ...btn, background: '#19b083', color: '#fff' }}>
              {mode === 'items' ? `Add ${rows.length} item${rows.length === 1 ? '' : 's'}` : 'Use this total'}
            </button>
            <button type="button" onClick={() => setStatus('idle')} style={{ ...btn, background: '#fff', color: '#1c1b18', boxShadow: 'none', border: '1px solid #d9d3c7' }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}
