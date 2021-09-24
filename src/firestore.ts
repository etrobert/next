import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAvvj4nuUOxBJ6d0iE1Gjgg8gCXO7aXo_g',
  authDomain: 'next-etienne.firebaseapp.com',
  projectId: 'next-etienne',
  storageBucket: 'next-etienne.appspot.com',
  messagingSenderId: '489100545863',
  appId: '1:489100545863:web:dafb3e6b2bb270198e4662',
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export default firestore;
