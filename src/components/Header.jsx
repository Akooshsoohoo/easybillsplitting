export default function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', padding: '26px 0 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <div style={{ width: 13, height: 13, borderRadius: 4, background: '#19b083' }} />
        <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em' }}>Bill Splitter</span>
      </div>
    </header>
  )
}
