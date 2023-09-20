// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZqrn0lhjbOOrAmprYZorM2cFHwVK3lWQ",
  authDomain: "taskmaster-redux-ccdf4.firebaseapp.com",
  projectId: "taskmaster-redux-ccdf4",
  storageBucket: "taskmaster-redux-ccdf4.appspot.com",
  messagingSenderId: "599750849878",
  appId: "1:599750849878:web:e42ef9eb01c6c9699e92f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;