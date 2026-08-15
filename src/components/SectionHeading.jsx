export default function SectionHeading({ step, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 18 }}>
      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: '#19b083' }}>{step}</span>
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 500, letterSpacing: '-0.025em' }}>{title}</h2>
    </div>
  )
}
