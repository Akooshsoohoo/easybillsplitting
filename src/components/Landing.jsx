export default function Landing({ onPickEven, onPickItem }) {
  return (
    <section style={{ padding: '56px 0 8px' }}>
      <h1 style={{ margin: 0, fontSize: 38, lineHeight: 1.05, fontWeight: 500, letterSpacing: '-0.035em', textWrap: 'pretty' }}>
        Split any bill in seconds
      </h1>
      <p style={{ margin: '14px 0 0', fontSize: 15, lineHeight: 1.5, color: '#6e857c', maxWidth: '34ch' }}>
        No accounts, no math. Split evenly or divide the check item by item, right from your phone.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 30 }}>
        <button
          className="mode-btn"
          onClick={onPickEven}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 5,
            padding: '20px 22px', border: 0, borderRadius: 16,
            background: '#19b083', color: '#ffffff', boxShadow: '0 6px 18px rgba(25,176,131,.35)', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
          }}
        >
          <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.02em' }}>Split evenly</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,.88)' }}>Everyone pays the same</span>
        </button>
        <button
          className="mode-btn"
          onClick={onPickItem}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 5,
            padding: '20px 22px', border: 0, borderRadius: 16,
            background: '#19b083', color: '#ffffff', boxShadow: '0 6px 18px rgba(25,176,131,.35)', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
          }}
        >
          <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.02em' }}>Split by item</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,.88)' }}>People pay for what they ordered</span>
        </button>
      </div>
    </section>
  )
}
