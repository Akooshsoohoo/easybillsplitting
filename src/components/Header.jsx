export default function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '26px 0 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <div style={{ width: 13, height: 13, borderRadius: 4, background: '#19b083' }} />
        <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em' }}>EasyBillSplitting</span>
      </div>
      <a
        href="https://akash-portfolio-beta-green.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: 13, color: '#6e857c', textDecoration: 'none' }}
      >
        Portfolio
      </a>
    </header>
  )
}
