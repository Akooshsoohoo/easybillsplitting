import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useGateKeys, introSeen } from '../adGate.js'
import { BANNER_ID, BANNER_BOTTOM_MARGIN } from '../adMobConfig.js'

// iOS app only (Layout renders this when isNative). Order matters:
//   1. wait for the first-launch intro to close,
//   2. ask for privacy consent if the user's region needs it (Google UMP),
//   3. ask the iOS tracking question (ATT),
//   4. start the ad SDK, then show or hide a banner above the tab bar.
// The banner never shows on the start page, the intro, or Info (gates and route below).
const setAdHeight = (px) => document.documentElement.style.setProperty('--ad-h', `${px}px`)

export default function AdBanner() {
  const { pathname } = useLocation()
  const keys = useGateKeys()
  const introOpen = !introSeen() || keys.split(',').includes('intro')
  const hidden = keys !== '' || pathname === '/info'
  const [ready, setReady] = useState(false)
  const started = useRef(false)

  useEffect(() => {
    if (introOpen || started.current) return
    started.current = true
    ;(async () => {
      try {
        const { AdMob, AdmobConsentStatus } = await import('@capacitor-community/admob')
        let info = await AdMob.requestConsentInfo()
        if (info.isConsentFormAvailable && info.status === AdmobConsentStatus.REQUIRED) {
          info = await AdMob.showConsentForm()
        }
        const att = await AdMob.trackingAuthorizationStatus()
        if (att.status === 'notDetermined') await AdMob.requestTrackingAuthorization()
        if (!info.canRequestAds) return
        await AdMob.initialize()
        const { BannerAdPluginEvents } = await import('@capacitor-community/admob')
        await AdMob.addListener(BannerAdPluginEvents.SizeChanged, (size) => setAdHeight(size.height || 0))
        setReady(true)
      } catch {
        // No ads is fine: the app works the same without them.
      }
    })()
  }, [introOpen])

  useEffect(() => {
    if (!ready) return
    ;(async () => {
      try {
        const { AdMob, BannerAdSize, BannerAdPosition } = await import('@capacitor-community/admob')
        if (hidden) {
          await AdMob.removeBanner()
          setAdHeight(0)
        } else {
          await AdMob.showBanner({
            adId: BANNER_ID,
            adSize: BannerAdSize.ADAPTIVE_BANNER,
            position: BannerAdPosition.BOTTOM_CENTER,
            margin: BANNER_BOTTOM_MARGIN,
          })
        }
      } catch {
        setAdHeight(0)
      }
    })()
  }, [ready, hidden])

  return null
}
