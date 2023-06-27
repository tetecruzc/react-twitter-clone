import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDyqoFFa4bbaZ-GztCJ5Z5W6_pCrO0-2nA",
    authDomain: "twitter-clone-eb3b6.firebaseapp.com",
    projectId: "twitter-clone-eb3b6",
    storageBucket: "twitter-clone-eb3b6.appspot.com",
    messagingSenderId: "933065203405",
    appId: "1:933065203405:web:19c7840a4d16f22df15384",
    measurementId: "G-ZKJGYSG3VJ"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export default db;