// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvRGnJt4Vu-zoN-SkS_D8a6XNoFsrFb6k",
    authDomain: "sibarita-cb396.firebaseapp.com",
    databaseURL: "https://sibarita-cb396-default-rtdb.firebaseio.com",
    projectId: "sibarita-cb396",
    storageBucket: "sibarita-cb396.appspot.com",
    messagingSenderId: "625423723012",
    appId: "1:625423723012:web:4a87cda58426c7b445e351"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()