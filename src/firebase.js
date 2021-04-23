import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXIBg7ytrZpl_yTKtNtLdTFlyDe2Nok-8",
  authDomain: "disneyplusclone-2719a.firebaseapp.com",
  projectId: "disneyplusclone-2719a",
  storageBucket: "disneyplusclone-2719a.appspot.com",
  messagingSenderId: "658820200358",
  appId: "1:658820200358:web:e6c1816fd87690e5ef4167",
  measurementId: "G-M49QD9XF4X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
