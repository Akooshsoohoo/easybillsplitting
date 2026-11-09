import SectionHeading from './SectionHeading.jsx'
import { formatMoney } from '../utils.js'
import { stepButtonStyle } from '../theme.js'

export default function AssignSection({
  style, currency, items, persons, assign, sel, hover, drag, rowsById,
  onItemPointerDown, onBucketClick, onRemoveChip, onConfirm,
}) {
  const trayEmpty = items.length === 0
  const noPeople = persons.length === 0

  return (
    <section id="sec-assign" style={style}>
      <SectionHeading step={4} title="Assign" description="Match each item to whoever ordered it." />
      <p style={{ margin: '-8px 0 16px', fontSize: 13, color: '#7d776b', lineHeight: 1.5 }}>
        Drag an item onto a person, or tap the item, then tap everyone sharing it. Items stay in the tray.
      </p>

      <div style={{ position: 'sticky', top: 0, zIndex: 3, background: '#f6f3ee', padding: '10px 0' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: 12, background: '#e7f4ee', border: '1px dashed #b9dcce', borderRadius: 10, minHeight: 66, alignContent: 'flex-start' }}>
          {items.map((it) => {
            const isSel = sel === it.id
            const isDragging = drag && drag.id === it.id
            return (
              <div
                key={it.id}
                onPointerDown={(e) => onItemPointerDown(it.id, e)}
                style={{
                  touchAction: 'none', userSelect: 'none', cursor: 'grab',
                  padding: '9px 12px', borderRadius: 8, fontSize: 13, fontFamily: 'inherit',
                  border: `1px solid ${isSel ? '#19b083' : '#d9d3c7'}`,
                  background: isSel ? '#19b083' : '#ffffff',
                  color: isSel ? '#ffffff' : '#1c1b18',
                  boxShadow: 'none',
                  opacity: isDragging ? 0.4 : 1,
                }}
              >
                {it.name} · {formatMoney(it.price, currency)}
              </div>
            )
          })}
          {trayEmpty && <span style={{ fontSize: 13, color: '#8d877b', padding: 8 }}>Add items above to start assigning.</span>}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12, marginTop: 12 }}>
        {persons.map((p) => {
          const ids = assign[p.id] || []
          const row = rowsById[p.id]
          const isHover = hover === p.id
          const active = isHover || !!sel
          return (
            <div
              key={p.id}
              data-bucket={p.id}
              onClick={() => onBucketClick(p.id)}
              style={{
                background: '#ffffff', borderRadius: 10, padding: 16,
                cursor: sel ? 'pointer' : 'default',
                transition: 'border-color .15s ease, background .15s ease',
                border: `1px solid ${isHover ? '#19b083' : active ? '#b9dcce' : '#e2ddd3'}`,
                boxShadow: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em' }}>{p.name}</span>
                <span style={{ fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums', fontSize: 13, color: '#7d776b' }}>{formatMoney(row ? row.sub : 0, currency)}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {ids.map((iid) => {
                  const it = items.find((x) => x.id === iid)
                  return (
                    <button
                      key={iid}
                      onClick={(e) => { e.stopPropagation(); onRemoveChip(p.id, iid) }}
                      style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 10px', borderRadius: 7, border: '1px solid #e2ddd3', background: '#faf8f4', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', color: '#1c1b18' }}
                    >
                      {it ? it.name : ''}<span style={{ color: '#b0aa9e' }}>&times;</span>
                    </button>
                  )
                })}
                {ids.length === 0 && <span style={{ fontSize: 13, color: '#b0aa9e', padding: '6px 0' }}>Nothing yet</span>}
              </div>
            </div>
          )
        })}
        {noPeople && (
          <div style={{ padding: 22, border: '1px dashed #d9d3c7', borderRadius: 10, textAlign: 'center', fontSize: 13, color: '#8d877b' }}>
            Add a couple of names above.
          </div>
        )}
      </div>
      <button className="hard-btn" onClick={onConfirm} style={stepButtonStyle(true)}>
        Next step
      </button>
    </section>
  )
}
