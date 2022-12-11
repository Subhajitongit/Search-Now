// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvlLeeG9ueRqlLop7nNHqDGuCsLabVvTw",
  authDomain: "ringover-24ccf.firebaseapp.com",
  projectId: "ringover-24ccf",
  storageBucket: "ringover-24ccf.appspot.com",
  messagingSenderId: "430011337455",
  appId: "1:430011337455:web:baf2e79cf6c490ef15291a",
  measurementId: "G-EBV1FDT4ZP"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}

const auth = firebase.auth();

export {auth};