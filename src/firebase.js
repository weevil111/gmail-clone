import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBmhZS98rg9WizocgXmuG5h72GCaZ1W2_U",
  authDomain: "clone-45cde.firebaseapp.com",
  projectId: "clone-45cde",
  storageBucket: "clone-45cde.appspot.com",
  messagingSenderId: "317867332785",
  appId: "1:317867332785:web:206ee18f7c5015d6387e90"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};