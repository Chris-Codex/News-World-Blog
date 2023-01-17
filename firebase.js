import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyAXidNlS8w2DAPCPm2oOb1TFO6fFEe-SSY",
    authDomain: "blog-news-467a1.firebaseapp.com",
    projectId: "blog-news-467a1",
    storageBucket: "blog-news-467a1.appspot.com",
    messagingSenderId: "608854054262",
    appId: "1:608854054262:web:ce5be2449c1bd63b581657"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)


export { db, auth, storage }