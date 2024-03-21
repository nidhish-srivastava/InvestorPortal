import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAwvFhm9Mk4iAmAaQYkduljqVnGp-d2evc",
  authDomain: "investorpanel-2fb0d.firebaseapp.com",
  projectId: "investorpanel-2fb0d",
  storageBucket: "investorpanel-2fb0d.appspot.com",
  messagingSenderId: 719953933024,
  appId: "1:719953933024:web:4c903302f108a332fbd685",
  measurementId: "G-B69D9JZJNN"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const filesDb = getStorage(app)

export {db,auth,filesDb}