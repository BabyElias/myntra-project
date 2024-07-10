import { initializeApp } from 'firebase/app';
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDC3-rVDDM4zlRgM1NzrucY2tYS1uxELgU",
    authDomain: "myntra-project-e8c14.firebaseapp.com",
    projectId: "myntra-project-e8c14",
    storageBucket: "myntra-project-e8c14.appspot.com",
    messagingSenderId: "728568877045",
    appId: "1:728568877045:web:f8e5cfe9a3a68d11c01abc",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const useFirebase = () => {
  return {
    signup: async (email, password) => {
      await createUserWithEmailAndPassword(auth, email, password);
    },
    login: async (email, password) => {
      await signInWithEmailAndPassword(auth, email, password);
    },
    // Add more Firebase authentication methods as needed
  };
};

