import { useEffect, useRef, useState } from 'react'
import { isNative } from '../platform.js'
import { ADS_APPROVED, ADS_CLIENT, AD_SLOTS } from '../adsConfig.js'

// Layout preview only: add ?adpreview to the URL to see dashed boxes where ads will go.
function previewOn() {
  try { return new URLSearchParams(window.location.search).has('adpreview') } catch { return false }
}

// Returns 'live', 'preview' or null. Starts as null so prerendering and the first
// client render match and the slot is collapsed.
export function useAdMode(slot) {
  const [mode, setMode] = useState(null)
  useEffect(() => {
    if (isNative) return
    if (ADS_APPROVED && AD_SLOTS[slot]) setMode('live')
    else if (previewOn()) setMode('preview')
  }, [slot])
  return mode
}

export default function AdSlot({ slot, label = 'Ad', minHeight = 100, style }) {
  const mode = useAdMode(slot)
  const pushed = useRef(false)
  useEffect(() => {
    if (mode !== 'live' || pushed.current) return
    pushed.current = true
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch { /* blocked or not loaded */ }
  }, [mode])

  if (!mode) return null
  const wrap = { margin: '36px 0', textAlign: 'center', ...style }
  if (mode === 'preview') {
    return (
      <div style={{ ...wrap, minHeight, border: '1.5px dashed #a29c90', borderRadius: 10, color: '#7d776b', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {label} (preview)
      </div>
    )
  }
  return (
    <aside aria-label="Advertisement" style={wrap}>
      <div style={{ fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a29c90', marginBottom: 6 }}>Advertisement</div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight }}
        data-ad-client={ADS_CLIENT}
        data-ad-slot={AD_SLOTS[slot]}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  )
}
