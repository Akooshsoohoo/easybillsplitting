// Ad slots for the website. There is no on/off switch: a slot goes live as soon as
// it has a real ad unit id below. Before Google approves the site, AdSense returns
// no ad, so the slot stays collapsed (zero height, nothing visible). When approval
// lands and ads start filling, the slot opens by itself. Nothing to redeploy.
// Ads never render inside the iOS app (see isNative in AdSlot.jsx).
export const ADS_CLIENT = 'ca-pub-7614951676615021'

// Paste the numeric ad unit ids from AdSense (Ads > By ad unit) here.
export const AD_SLOTS = {
  rail: '',       // Home, desktop side rails, 160x600 (hidden below 1120px)
  homeBelow: '',  // Home, between "How it works" and "Why use it"
  contentEnd: '', // Guides, FAQ, About, How-to: after the main text
  guideMid: '',   // Guides only: between sections, long articles
}
