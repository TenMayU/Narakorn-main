import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDpg9OxJk79V2lK5qlTgqT_zAzWq9MRD4Y",
    authDomain: "flowerecom-590b1.firebaseapp.com",
    projectId: "flowerecom-590b1",
    storageBucket: "flowerecom-590b1.appspot.com",
    messagingSenderId: "925529322365",
    appId: "1:925529322365:web:11e3b37243a2124800d214"
  };

  const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);