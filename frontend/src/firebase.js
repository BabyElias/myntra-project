// frontend/src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDC3-rVDDM4zlRgM1NzrucY2tYS1uxELgU",
    authDomain: "myntra-project-e8c14.firebaseapp.com",
    projectId: "myntra-project-e8c14",
    storageBucket: "myntra-project-e8c14.appspot.com",
    messagingSenderId: "728568877045",
    appId: "1:728568877045:web:f8e5cfe9a3a68d11c01abc",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
