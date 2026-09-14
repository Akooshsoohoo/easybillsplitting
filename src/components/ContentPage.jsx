import { colors } from '../theme.js'

export default function ContentPage({ title, subtitle, children }) {
  return (
    <div style={{ maxWidth: 680, width: '100%', margin: '0 auto', padding: '48px 20px 80px' }}>
      <h1 style={{ margin: 0, fontSize: 32, lineHeight: 1.1, fontWeight: 500, letterSpacing: '-0.03em' }}>{title}</h1>
      {subtitle && (
        <p style={{ margin: '12px 0 0', fontSize: 15, lineHeight: 1.5, color: colors.muted1, maxWidth: '52ch' }}>{subtitle}</p>
      )}
      <div style={{ marginTop: 32, fontSize: 15, lineHeight: 1.7, color: colors.text }}>
        {children}
      </div>
    </div>
  )
}
