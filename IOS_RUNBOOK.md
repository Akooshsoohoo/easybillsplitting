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
