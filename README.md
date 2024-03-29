# SongWard: Treatment and wellbeing tracking for cancer patients

## Introduction
SongWard is the cross-platform mobile app built for Bill and Milahn's Part 4 Project at the University of Auckland.
It aims to assist in the self-management of cancer condition by improving access to important information, and providing wellbeing tracking and reminders features as Behaviour Change Technique applications.

## NOTE

The app is currently configured to fetch data from our server deployed at `https://songward-api.herokuapp.com`. During development, replace line 1 of `/frontend/songwardAPI.js` to `const API_URL = "https://localhost:5000" to let the frontend fetch from your local instance of the backend server.

## Getting Started

### Run frontend app:

Navigate to the `/frontend` directory

`cd frontend`

Install dependencies

`npm install`

Run the app

`npm run web` to run the app in your browser

`expo start`, then press `a` for android

`npm run ios` for ios

### Run backend server:

Navigate to the `/backend` directory:

`cd backend`

Install dependencies:

`npm install`

Run the server locally:

`npm start`

## Build and Run For Android

`npm install -g eas-cli` to install the build tool

`eas login` to login to your expo account(go to `https://expo.dev/` to make an account if you don't have one)

At the `https://expo.dev/` website, make a new project with the slug `cancer-app`

`eas whoami` to view your username

in `/app.json`, change the "owner" property to your username.

`eas build -p android --profile preview` to build for android

There will be a link under `🤖Android app`: Go to this link on the android device you intend to use, download and extract the file app-release.apk. Open this file with your Android phone to install the app.

Look for the new app "SongWard" in the app drawer, and tap to open.
