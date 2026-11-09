import { isNative } from './platform.js'

// Light taps on iOS only. Silent on the website. Never throws.
async function run(fn) {
  if (!isNative) return
  try {
    const { Haptics, ImpactStyle, NotificationType } = await import('@capacitor/haptics')
    await fn(Haptics, ImpactStyle, NotificationType)
  } catch {
    // Haptics are a nicety, ignore failures.
  }
}

export const tapLight = () => run((H, S) => H.impact({ style: S.Light }))
export const tapSuccess = () => run((H, _S, N) => H.notification({ type: N.Success }))
