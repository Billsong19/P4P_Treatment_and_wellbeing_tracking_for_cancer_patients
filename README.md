# P4P_Treatment_and_wellbeing_tracking_for_cancer_patients

Getting Started:

Navigate to the `/frontend` directory

`cd frontend`

Install dependencies

`npm install`

Run the app

`npm run web` to run the app in your browser

`npm run android` for android

`npm run ios` for ios

Build For Android

`npm install -g eas-cli` to install the build tool

`eas login` to login to your expo account(go to `https://expo.dev/` to make an account if you don't have one)

`eas whoami` to view your username

in `/app.json`, change the "owner" property to your username.

`eas build -p android --profile preview` to build for android

There will be a link under 🤖Android app: Go to this link on the android device you intend to use, download and extract the file app-release.apk. Open this file with your phone to install the app.

Look for the new app "B&M Health" in the app drawer, and tap to open.
