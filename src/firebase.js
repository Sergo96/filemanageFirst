// import firebase from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

import {initializeApp} from "firebase/app";
// import fb from "firebase/app"

import {getAnalytics} from "firebase/analytics";
import {getFirestore, collection} from "firebase/firestore";
import {getStorage} from "firebase/storage";


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
const firestore = getFirestore();

export const storage = getStorage();

export const database = {
    formatDoc: (doc) => {
        return {id: doc.id, ...doc.data()};
    },
    folders: collection("folders"),
    files: collection("files"),
};

export const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp)
const analytics = getAnalytics(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const getCurrentTimestamp =
    firestore.FieldValue.serverTimestamp;
// export default firebaseApp;

export {auth, provider, analytics};
