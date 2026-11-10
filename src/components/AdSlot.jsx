import { useEffect, useRef, useState } from 'react'
import { isNative } from '../platform.js'
import { ADS_CLIENT, AD_SLOTS } from '../adsConfig.js'

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
    if (AD_SLOTS[slot]) setMode('live')
    else if (previewOn()) setMode('preview')
  }, [slot])
  return mode
}

// Pushes the ad request once and reports whether Google actually filled the slot.
// AdSense sets data-ad-status="filled" or "unfilled" on the <ins> element.
export function useFilled(mode) {
  const ref = useRef(null)
  const [filled, setFilled] = useState(false)
  useEffect(() => {
    if (mode !== 'live' || !ref.current) return
    const el = ref.current
    const sync = () => setFilled(el.getAttribute('data-ad-status') === 'filled')
    const obs = new MutationObserver(sync)
    obs.observe(el, { attributes: true, attributeFilter: ['data-ad-status'] })
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch { /* blocked or not loaded */ }
    sync()
    return () => obs.disconnect()
  }, [mode])
  return [ref, filled]
}

export default function AdSlot({ slot, label = 'Ad', minHeight = 100, style }) {
  const mode = useAdMode(slot)
  const [ref, filled] = useFilled(mode)

  if (!mode) return null
  if (mode === 'preview') {
    return (
      <div style={{ margin: '36px 0', textAlign: 'center', minHeight, border: '1.5px dashed #a29c90', borderRadius: 10, color: '#7d776b', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
        {label} (preview)
      </div>
    )
  }
  // Unfilled: zero height and no margin, but full width so Google can size the ad.
  const wrap = filled
    ? { margin: '36px 0', textAlign: 'center', ...style }
    : { height: 0, overflow: 'hidden', margin: 0 }
  return (
    <aside aria-label="Advertisement" style={wrap}>
      <div style={{ fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a29c90', marginBottom: 6 }}>Advertisement</div>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADS_CLIENT}
        data-ad-slot={AD_SLOTS[slot]}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  )
}
