import { Capacitor } from '@capacitor/core'

// True inside the iOS app shell, false on the website.
export const isNative = Capacitor.isNativePlatform()
