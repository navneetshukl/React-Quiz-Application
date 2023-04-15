import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAD9tGMnxac5NjEMqqkWTbJZd-92cuju2o",
  authDomain: "quiz-app-f57dd.firebaseapp.com",
  projectId: "quiz-app-f57dd",
  storageBucket: "quiz-app-f57dd.appspot.com",
  messagingSenderId: "77970716615",
  appId: "1:77970716615:web:031a69d2253c581e4b8be2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
