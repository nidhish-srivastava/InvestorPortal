import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  // apiKey: "AIzaSyAwvFhm9Mk4iAmAaQYkduljqVnGp-d2evc",
  // authDomain: "investorpanel-2fb0d.firebaseapp.com",
  // projectId: "investorpanel-2fb0d",
  // storageBucket: "investorpanel-2fb0d.appspot.com",
  // messagingSenderId: 719953933024,
  // appId: "1:719953933024:web:4c903302f108a332fbd685",
  // measurementId: "G-B69D9JZJNN"
  apiKey: "AIzaSyDZera0RgnI-l18NNdA7Rl3ZV__B1uM1Ts",
  authDomain: "investorportal-bad23.firebaseapp.com",
  projectId: "investorportal-bad23",
  storageBucket: "investorportal-bad23.appspot.com",
  messagingSenderId: "459705216111",
  appId: "1:459705216111:web:e0bf773744b77f128cb19a",
  measurementId: "G-KC6YTQEB1M"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const filesDb = getStorage(app)

export {db,auth,filesDb}

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZera0RgnI-l18NNdA7Rl3ZV__B1uM1Ts",
  authDomain: "investorportal-bad23.firebaseapp.com",
  projectId: "investorportal-bad23",
  storageBucket: "investorportal-bad23.appspot.com",
  messagingSenderId: "459705216111",
  appId: "1:459705216111:web:e0bf773744b77f128cb19a",
  measurementId: "G-KC6YTQEB1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/