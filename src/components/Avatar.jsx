import { avatarInner } from '../avatars.js'

// A round animal avatar. Falls back to the first letter if the avatar data is missing.
export default function Avatar({ avatar, name = '', size = 38 }) {
  const inner = avatar ? avatarInner(avatar) : ''
  const box = { width: size, height: size, borderRadius: '50%', overflow: 'hidden', flex: 'none' }
  if (!inner) {
    return (
      <div
        aria-hidden="true"
        style={{ ...box, background: 'linear-gradient(135deg, #19b083, #0e6b4f)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: Math.round(size * 0.4), fontWeight: 600 }}
      >
        {name.trim().charAt(0).toUpperCase() || '?'}
      </div>
    )
  }
  return (
    <div style={box}>
      <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label={name ? `${name}'s avatar` : 'avatar'} style={{ display: 'block' }} dangerouslySetInnerHTML={{ __html: inner }} />
    </div>
  )
}
