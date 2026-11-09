import SectionHeading from './SectionHeading.jsx'
import { stepButtonStyle } from '../theme.js'
import Avatar from './Avatar.jsx'

export default function NamesSection({ style, persons, onRemovePerson, pName, onPNameChange, onPersonKeyDown, onAddPerson, onNext }) {
  const canProceed = persons.length >= 2
  return (
    <section id="sec-names" style={style}>
      <SectionHeading step={3} title="Who's here" />
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          placeholder="Name"
          value={pName}
          onChange={(e) => onPNameChange(e.target.value)}
          onKeyDown={onPersonKeyDown}
          style={{ flex: 1, minWidth: 0, height: 44, padding: '0 14px', border: '1px solid #e2ddd3', borderRadius: 9, fontSize: 16, outline: 'none', background: '#fff' }}
        />
        <button className="hard-btn" onClick={onAddPerson} style={{ height: 44, padding: '0 18px', borderRadius: 9, border: '2px solid #1c1b18', boxShadow: '3px 3px 0 #1c1b18', fontWeight: 600, background: '#19b083', color: '#fff', fontSize: 15, cursor: 'pointer', fontFamily: 'inherit' }}>Add</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {persons.map((p) => (
          <button
            key={p.id}
            className="chip pop-in"
            onClick={() => onRemovePerson(p.id)}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px 6px 6px', border: '1px solid #d9d3c7', borderRadius: 999, background: '#fff', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', color: '#1c1b18' }}
          >
            <Avatar avatar={p.avatar} name={p.name} size={28} />{p.name}<span style={{ color: '#b0aa9e', fontSize: 14 }}>&times;</span>
          </button>
        ))}
      </div>
      <button className="hard-btn" onClick={onNext} disabled={!canProceed} style={stepButtonStyle(canProceed)}>
        Next step
      </button>
    </section>
  )
}
