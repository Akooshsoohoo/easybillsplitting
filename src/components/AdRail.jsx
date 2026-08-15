export default function AdRail() {
  return (
    <div
      className="ad-rail"
      style={{
        width: 160, flex: 'none', position: 'sticky', top: 20, alignSelf: 'flex-start',
        height: 250, marginTop: 120, borderRadius: 16, border: '1px solid #e0ebe6',
        background: 'repeating-linear-gradient(45deg,#f7faf9,#f7faf9 8px,#eef4f1 8px,#eef4f1 16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'DM Mono',monospace", fontSize: 11, color: '#9db3aa',
        letterSpacing: '0.06em', textAlign: 'center', padding: 12,
      }}
    >
      AD SLOT<br />160×600
    </div>
  )
}
