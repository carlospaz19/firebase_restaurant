# Sibarita Brunch Club Web Application

This is the repository for the Sibarita Brunch Club web application, a delightful restaurant that offers the best brunch experience in town. This web application is built using React and Firebase for data storage.

## Table of Contents

- [Firebase Configuration](#firebase-configuration)
- [Components](#components)
- [Installation](#installation)
- [Author](#author)

## Firebase Configuration

To set up the Firebase configuration, you need to initialize the Firebase app and obtain a Firebase configuration object in your project. This configuration object contains the necessary information to connect your app to the Firebase services. Here is an example of how to configure Firebase in your application:

```javascript
// Import the necessary Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase project's configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
```

Make sure to replace the placeholder values in firebaseConfig with your actual Firebase project credentials.

## Components

### Navigation

The Navigation component provides the main navigation bar for the web application. It includes links to different sections of the site, such as the welcome page, menu, and reservations.

### Welcome

The Welcome component displays information about the restaurant and its offerings. It provides a brief introduction to the restaurant and its commitment to quality brunch experiences.

### Menu

The Menu component showcases delicious brunch dishes with a carousel-style presentation. Users can view different menu items and navigate through them.

### Reservations

The Reservations component allows users to create and manage client reservations for the waiting list. It communicates with the Firebase Firestore database to store and retrieve reservation data.

### Footer

The Footer component provides information about the application's author and includes social media icons for linking to Facebook, Instagram, and more.

## Installation

To run this application locally, follow these steps:

Clone the repository to your local machine.

Install the required dependencies using npm:
`npm install`

Set up the Firebase configuration as described in the "Firebase Configuration" section above.

Start the development server:
`npm start`

The application will be accessible in your web browser at http://localhost:(port).

## Author

Carlos Paz Ortega
