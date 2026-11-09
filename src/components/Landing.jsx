export default function Landing({ onPickEven, onPickItem }) {
  return (
    <section style={{ padding: '56px 0 8px' }}>
      <h1 className="rise" style={{ animationDelay: '0ms', margin: 0, fontSize: 44, lineHeight: 1.05, fontWeight: 600, letterSpacing: '-0.035em', textWrap: 'pretty' }}>
        Split any bill in seconds
      </h1>
      <p className="rise" style={{ animationDelay: '80ms', margin: '14px 0 0', fontSize: 17, lineHeight: 1.5, color: '#4a463e', maxWidth: '36ch' }}>
        No accounts, no math. Split evenly or divide the check item by item, right from your phone.
      </p>
      <div className="rise" style={{ animationDelay: '160ms', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 30 }}>
        <button
          className="mode-btn"
          onClick={onPickEven}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 5,
            padding: '20px 22px', border: '2px solid #1c1b18', borderRadius: 10,
            background: '#19b083', color: '#ffffff', boxShadow: '4px 4px 0 #1c1b18', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
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
            padding: '20px 22px', border: '2px solid #1c1b18', borderRadius: 10,
            background: '#19b083', color: '#ffffff', boxShadow: '4px 4px 0 #1c1b18', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
          }}
        >
          <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.02em' }}>Split by item</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,.88)' }}>People pay for what they ordered</span>
        </button>
      </div>
    </section>
  )
}
