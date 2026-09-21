# easybillsplitting

## Building the iOS app (Xcode)

This repo wraps the React/Vite web app with [Capacitor](https://capacitorjs.com) so it can run as a native iOS app. On a Mac with Xcode installed:

1. `npm install`
2. `npm run ios:open` — builds the web app, syncs it into the native project, and opens Xcode
3. In Xcode, select a simulator or your connected iPhone, then hit Run (▶)

After changing web code, re-run `npm run ios:sync` (or `ios:open`) to copy the new build into the native `ios/` project before running again in Xcode.

The native project lives in `ios/App/App.xcodeproj`. App id / name are set in `capacitor.config.json`.