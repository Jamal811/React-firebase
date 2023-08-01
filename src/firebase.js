import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDv97X0Xq17JGR3tzdW7dUXCGVGm0CYcSg",
  authDomain: "fir-auth-f97b2.firebaseapp.com",
  projectId: "fir-auth-f97b2",
  storageBucket: "fir-auth-f97b2.appspot.com",
  messagingSenderId: "298134367463",
  appId: "1:298134367463:web:29753c7dd49451d2e88642",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
