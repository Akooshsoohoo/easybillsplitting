export default function SectionHeading({ step, title, description }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#19b083', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
        Step {step}
      </div>
      <h2 style={{ margin: '0 0 6px', fontSize: 20, fontWeight: 500, letterSpacing: '-0.025em' }}>{title}</h2>
      {description && (
        <p style={{ margin: 0, fontSize: 13, color: '#7b9189', lineHeight: 1.5 }}>{description}</p>
      )}
    </div>
  )
}
