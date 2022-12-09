// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD71SQqo9oKAsdYABvAE_78eFy4C2khovg",
  authDomain: "garage-b6f6c.firebaseapp.com",
  projectId: "garage-b6f6c",
  storageBucket: "garage-b6f6c.appspot.com",
  messagingSenderId: "1071654046637",
  appId: "1:1071654046637:web:7e5caf366e0cfca1036f24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;