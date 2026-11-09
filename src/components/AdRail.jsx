export default function AdRail() {
  return (
    <div
      className="ad-rail"
      style={{
        width: 160, flex: 'none', position: 'sticky', top: 20, alignSelf: 'flex-start',
        height: 250, marginTop: 120, borderRadius: 10, border: '1px solid #e2ddd3',
        background: 'repeating-linear-gradient(45deg,#faf8f4,#faf8f4 8px,#efebe3 8px,#efebe3 16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums', fontSize: 11, color: '#a29c90',
        letterSpacing: '0.06em', textAlign: 'center', padding: 12,
      }}
    >
      AD SLOT<br />160×600
    </div>
  )
}
