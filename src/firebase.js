// import firebase from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBY63Ag3puNhL7C_Y6mZPiz5Txuk27sMrg",
  authDomain: "drive-clone-6d3c6.firebaseapp.com",
  projectId: "drive-clone-6d3c6",
  storageBucket: "drive-clone-6d3c6.appspot.com",
  messagingSenderId: "324365176304",
  appId: "1:324365176304:web:edb9b054d13469e8d9a135",
  measurementId: "G-SPE505XSKQ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, analytics };
