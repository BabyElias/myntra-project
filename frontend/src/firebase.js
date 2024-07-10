import { initializeApp } from 'firebase/app';
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDysU-U-xBj3CSXz3kMrlE3rT7fXLeRn1Y",
    authDomain: "myntra-project-9c004.firebaseapp.com",
    databaseURL: "https://myntra-project-9c004-default-rtdb.firebaseio.com",
    projectId: "myntra-project-9c004",
    storageBucket: "myntra-project-9c004.appspot.com",
    messagingSenderId: "120528669370",
    appId: "1:120528669370:web:301beea677c02914d45083"
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
  };
};
