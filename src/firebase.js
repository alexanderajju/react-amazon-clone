import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAaARs7ZFBsJjyT4QpUJZS_D16QflGnjTc",
    authDomain: "clone-f5432.firebaseapp.com",
    databaseURL: "https://clone-f5432.firebaseio.com",
    projectId: "clone-f5432",
    storageBucket: "clone-f5432.appspot.com",
    messagingSenderId: "431519560344",
    appId: "1:431519560344:web:c139a19c564975da6916ed",
    measurementId: "G-MN14ZHTCYX"

});

const db =firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {auth} ;