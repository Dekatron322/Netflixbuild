import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyB2ZCEJCBAHjoC2sMEMiSgI2zG8Y_mAPJM",
  authDomain: "netflix-build-fdfec.firebaseapp.com",
  projectId: "netflix-build-fdfec",
  storageBucket: "netflix-build-fdfec.appspot.com",
  messagingSenderId: "1003598383041",
  appId: "1:1003598383041:web:7bfd333ac7c6c2256f1140"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
