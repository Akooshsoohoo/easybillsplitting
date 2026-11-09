export default function SectionHeading({ step, title, description }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: '#1c1b18', background: '#19b083', border: '2px solid #1c1b18', borderRadius: 6, padding: '2px 9px', boxShadow: '2px 2px 0 #1c1b18', marginBottom: 10 }}>
        Step {step}
      </div>
      <h2 style={{ margin: '0 0 6px', fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em' }}>{title}</h2>
      {description && (
        <p style={{ margin: 0, fontSize: 14, color: '#5a554b', lineHeight: 1.5 }}>{description}</p>
      )}
    </div>
  )
}
