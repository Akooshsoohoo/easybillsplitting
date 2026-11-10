// Ad slots for the website. Nothing renders until BOTH are true:
//   1. ADS_APPROVED is true (set it after Google approves the site), and
//   2. the slot below has a real ad unit id created in AdSense.
// Until then every slot renders nothing and takes no space.
// Ads never render inside the iOS app (see isNative in AdSlot.jsx).
export const ADS_CLIENT = 'ca-pub-7614951676615021'
export const ADS_APPROVED = false

// Fill these in after the owner creates the ad units in AdSense.
export const AD_SLOTS = {
  rail: '',       // Home, desktop side rails, 160x600 (hidden below 1120px)
  homeBelow: '',  // Home, after the calculator, above "How it works"
  contentEnd: '', // Guides, FAQ, About, How-to: after the main text
  guideMid: '',   // Guides only: between sections, long articles
}
