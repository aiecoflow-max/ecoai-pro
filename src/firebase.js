// Import the Firebase functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (from your Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyA3dayXCPuOOGBbtk41YDC41LRwy306zGo",
  authDomain: "ecoflow-ai-c3d4e.firebaseapp.com",
  projectId: "ecoflow-ai-c3d4e",
  storageBucket: "ecoflow-ai-c3d4e.appspot.com",
  messagingSenderId: "563292944290",
  appId: "1:563292944290:web:98c784aa4d8d3c14be4fb",
  measurementId: "G-X2FSQLHVE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (database)
const db = getFirestore(app);

// Export for use in other files
export { app, db };
