import SectionHeading from './SectionHeading.jsx'
import { stepButtonStyle } from '../theme.js'

export default function NamesSection({ style, persons, onRemovePerson, pName, onPNameChange, onPersonKeyDown, onAddPerson, onNext }) {
  const canProceed = persons.length >= 2
  return (
    <section id="sec-names" style={style}>
      <SectionHeading step={3} title="Who's here" description="Add everyone who's splitting the bill." />
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          placeholder="Name"
          value={pName}
          onChange={(e) => onPNameChange(e.target.value)}
          onKeyDown={onPersonKeyDown}
          style={{ flex: 1, minWidth: 0, height: 44, padding: '0 14px', border: '1px solid #dceae4', borderRadius: 14, fontSize: 15, outline: 'none', background: '#fff' }}
        />
        <button onClick={onAddPerson} style={{ height: 44, padding: '0 18px', borderRadius: 14, border: 0, background: '#19b083', color: '#fff', fontSize: 15, cursor: 'pointer', fontFamily: 'inherit' }}>Add</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {persons.map((p) => (
          <button
            key={p.id}
            onClick={() => onRemovePerson(p.id)}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', border: '1px solid #cfe4da', borderRadius: 999, background: '#fff', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', color: '#12211c' }}
          >
            {p.name}<span style={{ color: '#a8bcb4', fontSize: 14 }}>&times;</span>
          </button>
        ))}
      </div>
      <button onClick={onNext} disabled={!canProceed} style={stepButtonStyle(canProceed)}>
        Next step
      </button>
    </section>
  )
}
