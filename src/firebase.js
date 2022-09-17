import firebase from "firebase/app";
import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyAP6bdeOuG7gRGXKTllDEedP1dSYDyaT18",
  authDomain: "auth-development-bb685.firebaseapp.com",
  projectId: "auth-development-bb685",
  storageBucket: "auth-development-bb685.appspot.com",
  messagingSenderId: "329558002241",
  appId: "1:329558002241:web:f8e991aef928b4d6c0d4c0",
});

export const auth = app.auth();
export default app;
