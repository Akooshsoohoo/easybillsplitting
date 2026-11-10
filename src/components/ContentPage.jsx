import { useNavigate } from 'react-router-dom'
import { colors } from '../theme.js'
import { isNative } from '../platform.js'

export default function ContentPage({ title, subtitle, children, hideBack }) {
  const navigate = useNavigate()
  return (
    <div className="rise" style={{ maxWidth: 680, width: '100%', margin: '0 auto', padding: '48px 20px 80px' }}>
      {isNative && !hideBack && (
        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{ margin: '-24px 0 14px -8px', padding: '10px 8px', minHeight: 44, border: 'none', background: 'transparent', fontFamily: 'inherit', fontSize: 15, fontWeight: 600, color: colors.greenDark, cursor: 'pointer' }}
        >
          &lsaquo; Back
        </button>
      )}
      <h1 style={{ margin: 0, fontSize: 38, lineHeight: 1.05, fontWeight: 700, letterSpacing: '-0.03em' }}>{title}</h1>
      {subtitle && (
        <p style={{ margin: '12px 0 0', fontSize: 17, lineHeight: 1.5, color: '#4a463e', maxWidth: '52ch' }}>{subtitle}</p>
      )}
      <div style={{ marginTop: 32, fontSize: 15, lineHeight: 1.7, color: colors.text }}>
        {children}
      </div>
    </div>
  )
}
