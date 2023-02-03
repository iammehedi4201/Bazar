// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCV51HE0sVR-8YQMNodXmktmdGx4Qc41Y",
  authDomain: "foshol-bazar-with-firebase-app.firebaseapp.com",
  projectId: "foshol-bazar-with-firebase-app",
  storageBucket: "foshol-bazar-with-firebase-app.appspot.com",
  messagingSenderId: "695924926454",
  appId: "1:695924926454:web:c807462e41b6e6864789d7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;