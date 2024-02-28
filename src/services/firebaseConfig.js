import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.FAKE.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  databaseURL: import.meta.VITE_REACT_APP_DATA_BASE_URL,
  projectId: import.meta.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.VITE_REACT_APP_APP_ID,
  measurementId: import.meta.VITE_REACT_APP_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
