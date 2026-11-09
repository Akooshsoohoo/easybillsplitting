# Mac runbook: ship the iOS app

Prereqs on the Mac: Xcode (current), Node 20+, Apple Developer account signed in to Xcode, an App Store Connect record for com.easybillsplitting.app.

1. git fetch && git checkout ios-release && npm install
2. npx cap add ios            (creates the ios/ folder; commit it)
3. npm run assets             (generates AppIcon + splash from assets/)
4. npm run ios:sync
5. In ios/App/App/Info.plist set: ITSAppUsesNonExemptEncryption = false, UIRequiresFullScreen not needed; remove iPad orientations or set Devices to iPhone only in Xcode target.
6. Xcode: open with `npm run ios:open`. Target App > Signing: Team set, bundle id com.easybillsplitting.app, Version 1.0.0, Build 1, Deployment target iOS 15+ (Capacitor 7 minimum is iOS 14).
7. Run on a simulator and a real device. Check: both modes, drag and drop by touch, Share sheet with image, History persists after relaunch, airplane mode works, safe areas on notch devices, no ads or coffee button.
8. Product > Archive, then Distribute App > App Store Connect > Upload.
9. App Store Connect: fill the listing from APP_STORE.md, upload screenshots, attach the build, answer privacy and export questions, Submit for Review.

## Receipt scanner: native upgrade (do after the first build works)
The web scanner (src/components/ReceiptScanner.jsx) uses Tesseract.js, which fetches its engine from jsDelivr on first use, so it fails offline inside the app and is slower than native. Upgrade the app to Apple's on-device Vision text recognition, which is free, offline and more accurate:
1. Add a Capacitor plugin that exposes Vision or ML Kit text recognition (search npm for a maintained Capacitor 7 compatible one, or write a tiny local plugin in Swift using VNRecognizeTextRequest). Verify it supports iOS and returns plain text lines.
2. In ReceiptScanner.jsx, when isNative is true (src/platform.js), skip the tesseract import: pick or capture the photo with the Capacitor Camera plugin (@capacitor/camera, add NSCameraUsageDescription and NSPhotoLibraryUsageDescription to Info.plist, for example "Used to read the total and items from a receipt photo. Photos stay on your device."), pass it to the native recognizer, and feed the returned text into parseReceipt(text) from src/receiptParse.js. Everything after that (review screen, accept) is unchanged.
3. Keep the Tesseract path for the website.
4. Test with a real printed receipt on a device, including a crumpled and a dim one. The review screen must still show before anything is added.
5. App Store privacy answers stay "Data Not Collected" since nothing leaves the device.
