import { useAdMode, useFilled } from './AdSlot.jsx'
import { ADS_CLIENT, AD_SLOTS } from '../adsConfig.js'

// Desktop-only side rail (hidden below 1120px by .ad-rail in index.css).
// Takes no width until Google fills it, so the page stays centred before approval.
export default function AdRail() {
  const mode = useAdMode('rail')
  const [ref, filled] = useFilled(mode)
  if (!mode) return null
  const open = filled || mode === 'preview'
  return (
    <div className="ad-rail" style={{ width: open ? 160 : 0, overflow: open ? 'visible' : 'hidden', flex: 'none', position: 'sticky', top: 20, alignSelf: 'flex-start', marginTop: 120 }}>
      {mode === 'preview' ? (
        <div style={{ height: 600, border: '1.5px dashed #a29c90', borderRadius: 10, color: '#7d776b', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          Ad 160x600<br />(preview)
        </div>
      ) : (
        <ins ref={ref} className="adsbygoogle" style={{ display: 'inline-block', width: 160, height: 600 }} data-ad-client={ADS_CLIENT} data-ad-slot={AD_SLOTS.rail} />
      )}
    </div>
  )
}
