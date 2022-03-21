import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCpOxqn9mfEFQ_y0Gjd35F65wI9HRWnTDk",
    authDomain: "project-1-d0f01.firebaseapp.com",
    projectId: "project-1-d0f01",
    storageBucket: "project-1-d0f01.appspot.com",
    messagingSenderId: "586531704555",
    appId: "1:586531704555:web:6bb4e827920e2a9ab2b8ae",
    measurementId: "G-3S4RGLS30S",
  })
  .auth();
