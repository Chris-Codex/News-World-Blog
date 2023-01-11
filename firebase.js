import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC-UYzfHB5X0TgQNBHVf8lqigopkjbKyyU",
    authDomain: "rumour-news.firebaseapp.com",
    projectId: "rumour-news",
    storageBucket: "rumour-news.appspot.com",
    messagingSenderId: "367387919429",
    appId: "1:367387919429:web:17e3bd5098a6fa672f0f2c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }