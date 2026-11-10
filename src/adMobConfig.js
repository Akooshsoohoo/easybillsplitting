// AdMob settings for the iOS app only. The website uses AdSense (src/adsConfig.js).
//
// To go live: create the app and a Banner unit in AdMob, paste the unit id below,
// set USE_TEST_ADS to false, and ALSO put the real app id in
// ios/App/App/Info.plist (GADApplicationIdentifier). Info.plist cannot read this file.
export const USE_TEST_ADS = true

// Google's public test banner for iOS. Safe to ship in test builds, never earns money.
export const TEST_BANNER_ID = 'ca-app-pub-3940256099942544/2934735716'

// Real banner unit id from AdMob, like 'ca-app-pub-7614951676615021/1234567890'.
export const REAL_BANNER_ID = ''

export const BANNER_ID = USE_TEST_ADS || !REAL_BANNER_ID ? TEST_BANNER_ID : REAL_BANNER_ID

// Distance in px from the bottom edge to the banner, so it sits just above the tab bar
// (tab bar is 62px plus the home-indicator inset). Check this on a real iPhone: if the
// banner overlaps the tab bar or floats too high, adjust this one number.
export const BANNER_BOTTOM_MARGIN = 62
