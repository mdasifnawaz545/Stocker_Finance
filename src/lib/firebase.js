// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: 'AIzaSyAmzZi-YEx6pQ3Ai0XEtwnsIwfrW4YYR14',
    authDomain: " stofhi-10853.firebaseapp.com",
    projectId: "stofhi-10853",
    storageBucket: "stofhi-10853.firebasestorage.app",
    messagingSenderId: "1057215079303",
    appId: "1:1057215079303:web:e22c9b8502fecd012b6922",


};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseUserAuth = getAuth(app);

export default app;