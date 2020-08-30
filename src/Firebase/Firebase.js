import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "todo-firebase-auth-41d44.firebaseapp.com",
    databaseURL: "https://todo-firebase-auth-41d44.firebaseio.com",
    projectId: "todo-firebase-auth-41d44",
    storageBucket: "todo-firebase-auth-41d44.appspot.com",
    messagingSenderId: "921741156128",
    appId: "1:921741156128:web:84af4504b4b1403a27c145",
    measurementId: "G-LCB2H5B9XK"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();

export default firebase;