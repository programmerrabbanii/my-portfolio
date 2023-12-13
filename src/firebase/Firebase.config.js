// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbebZ7m9LUY0BOOWX7GAqIqt-NIP6r0F4",
  authDomain: "rabbani-sarkar.firebaseapp.com",
  projectId: "rabbani-sarkar",
  storageBucket: "rabbani-sarkar.appspot.com",
  messagingSenderId: "439342085751",
  appId: "1:439342085751:web:89a590aa4d5b9021d0b872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app