# EasyBillSplitting: App Store release kit

Bundle ID: com.easybillsplitting.app   Name: EasyBillSplitting   Category: Finance (secondary: Lifestyle)
Price: Free. No in-app purchases, no accounts. The app shows a small banner ad (Google AdMob), so it uses the network for ads only.

## Listing copy
Subtitle (30 max): Split any bill in seconds
Promotional text: Split evenly or by item, with tax, tip and discounts handled for you. No sign up.
Keywords (100 max): split,bill,receipt,tip,tax,restaurant,share,calculator,roommates,dinner,expenses,friends
Description:
EasyBillSplitting splits a bill without the arguments or the math.

Split evenly: enter the total and the number of people, and see what each person pays as you type.

Split by item: add each item and its price, add tax, tip and any discounts, name the people, then drag items onto the people who shared them. Shared items are divided fairly. Tip can be split in proportion to what each person ordered, or evenly.

- Works with any currency
- Share a clean image of who owes what, straight to Messages or any app
- Your recent splits are saved on your phone so you can look them up later
- No account to make. Your bills, names and saved splits stay on your phone and are never uploaded.
- Free, supported by a small banner ad. The app asks before any tracking, and works the same if you say no.

Support URL: https://www.easybillsplitting.com/about
Privacy Policy URL: https://www.easybillsplitting.com/privacy-policy
Marketing URL: https://www.easybillsplitting.com
Copyright: 2026 EasyBillSplitting
Age rating: answer No to every content question. The Advertising question may now be Yes; expect the rating to change accordingly.

## App Privacy (App Store Connect)
NOT "Data Not Collected" any more: the app includes the Google Mobile Ads SDK (AdMob). In App Store Connect declare what Google says AdMob collects, for third-party advertising: Device ID, Advertising Data, Product Interaction and Other Usage Data, Coarse Location, plus Diagnostics (crash and performance). Check the current list on Google's "Apple privacy details" page for the Mobile Ads SDK before answering. Tracking: Yes (the app shows the ATT prompt). Bills and names are never sent anywhere.
Export compliance: uses no encryption beyond Apple's OS (ITSAppUsesNonExemptEncryption = false, already set in the project).

## Review notes
No login required. Bill data is on-device. The app shows a Google AdMob banner (test ads before release) on calculator screens only, and shows Google's privacy consent form where required and the iOS App Tracking Transparency prompt after the first-launch intro. No ads on the start page or intro. Try "Split by Item", add two items, add two names, drag items onto the names, then open the Results section and tap Share.

## Screenshots needed
6.9" iPhone (1320x2868) and 6.5" (1284x2778), at least 3 each. iPad only if iPad is enabled (it is disabled in this kit: iPhone only).
Suggested: landing, split evenly, items list, drag and drop assign, results, share card.

## Risks Apple may raise
- Guideline 4.2 (minimum functionality, web wrapper). Mitigations: native share sheet with image, haptics, offline use, on-device history, no website chrome (website AdSense and coffee button are removed in the app; the app uses AdMob only). Keep the "native feel" items in; mention offline and share sheet in review notes if asked.
- Guideline 3.2.1 / 3.1.1: the Buy Me a Coffee button and web AdSense are NOT loaded in the app. Do not re-enable. In-app ads use AdMob (src/adMobConfig.js), with the ATT prompt and Google consent form.
- Ads must not look like part of the calculator or sit on the locked start page. The banner shows only on calculator and content screens, above the tab bar.
