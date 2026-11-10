import { useEffect, useRef } from 'react'
import { useAdMode } from './AdSlot.jsx'
import { ADS_CLIENT, AD_SLOTS } from '../adsConfig.js'

// Desktop-only side rail (hidden below 1120px by .ad-rail in index.css).
// Renders nothing, and takes no width, until ads are approved and the unit id is set.
export default function AdRail() {
  const mode = useAdMode('rail')
  const pushed = useRef(false)
  useEffect(() => {
    if (mode !== 'live' || pushed.current) return
    pushed.current = true
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch { /* ignore */ }
  }, [mode])
  if (!mode) return null
  return (
    <div className="ad-rail" style={{ width: 160, flex: 'none', position: 'sticky', top: 20, alignSelf: 'flex-start', marginTop: 120 }}>
      {mode === 'preview' ? (
        <div style={{ height: 600, border: '1.5px dashed #a29c90', borderRadius: 10, color: '#7d776b', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          Ad 160x600<br />(preview)
        </div>
      ) : (
        <ins className="adsbygoogle" style={{ display: 'inline-block', width: 160, height: 600 }} data-ad-client={ADS_CLIENT} data-ad-slot={AD_SLOTS.rail} />
      )}
    </div>
  )
}
