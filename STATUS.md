# EasyBillSplitting: status (10 Nov 2026)

Repo: https://github.com/Akooshsoohoo/easybillsplitting. `main` and `ios-release` are identical at f3fd556. Pushing `main` deploys the website to https://www.easybillsplitting.com through Vercel, so ask the owner before merging or pushing it.

## What exists
- Website (Vite + React, no backend): split evenly, split by item (drag and drop, tax, tip, discounts), receipt scanner (Tesseract.js, `src/components/ReceiptScanner.jsx`, `src/receiptParse.js`), History in localStorage, 9 guide articles (`src/guides.js`), flat animal avatars (`src/avatars.js`), share image (`src/shareCard.js`).
- Build: `npm run build` runs vite build then `scripts/prerender.mjs`, which writes real HTML for each route so crawlers see text. `vercel.json` uses `cleanUrls`. `engines` pins Node 22. `npm run build:app` is the plain build used for the iOS app.
- iOS app: Capacitor 8 (Swift Package Manager, no CocoaPods) in `ios/`, bundle com.easybillsplitting.app, team 3JV9Y565WX, v1.0.0 build 1. Scanner is hidden inside the app (`isNative`). Haptics on assign and share. Steps and risks: `IOS_RUNBOOK.md`, listing text: `APP_STORE.md`.

## State of the App Store release
- Build 1.0.0 (1) from f3fd556 is UPLOADED to App Store Connect and processing.
- Listing is filled in: record (SKU easybillsplitting-ios), description, keywords, URLs, subtitle, categories Finance and Lifestyle, age 4+, privacy "Data Not Collected", Free, Manual release, App Review contact entered.
- Open: attach the processed build to version 1.0, export compliance (ITSAppUsesNonExemptEncryption is false), TestFlight internal tester (the owner's Apple ID), screenshots (section appears only after a build is attached; sizes 1320x2868 and 1284x2778, at least 3 each), then the owner's OK, then Submit for Review.
- UNVERIFIED on a device: touch drag and drop, Share sheet (image plus one link line; whether a link preview card appears), History after relaunch, offline. The owner tests these through TestFlight.
- The Mac Claude session is named `easybill` (Remote Control). It cannot tap in the simulator and cannot upload from the command line; the owner clicks Distribute App in Xcode Organizer. An app-specific password was pasted in chat once: the owner should revoke it at appleid.apple.com.

## State of Google AdSense
- Publisher ca-pub-7614951676615021. ads.txt is correct. The first review was rejected for "Low value content". After adding guides, the scanner and prerendering, a review was requested on 9 Nov 2026 (site status "Getting ready"). Wait for Google's reply; do not re-request while pending.
- European consent message already exists (Privacy & messaging). No US state message.
- The guides were written by AI and reworded for natural voice (ZeroGPT 4 to 45 percent AI by guide; Sapling flagged everything). If rejected again, the real fix is original material from the owner: real screenshots, own examples, a named author on About. Do not claim human authorship.
- AdSense and the Buy Me a Coffee button load only on the website, never inside the iOS app (App Store rules).

## Working notes
- OneDrive locks `node_modules/.vite`, so `vite dev` fails with EPERM. Use `npx vite build` then `npx vite preview --port 5197` and test in a 390px iframe.
- Preview deployments of `ios-release` need Vercel auth; check them with `npx vercel curl <path> --deployment <url>` (set `MSYS_NO_PATHCONV=1` in Git Bash).
- Design sheet for avatars: https://claude.ai/artifact/AFcXyPCVNp3vbmcTcAcQeD
- Owner style: plain copy, no em dashes, no arrow flourishes.
