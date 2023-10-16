// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_DbfbMxPG72KsMye5j2bKxeY7OY6eefA",
  authDomain: "task-master-redux-20116.firebaseapp.com",
  projectId: "task-master-redux-20116",
  storageBucket: "task-master-redux-20116.appspot.com",
  messagingSenderId: "770659146377",
  appId: "1:770659146377:web:e32feca7367d1b20c74458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;