import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: "AIzaSyCSDqRzp8VgUvrYD8UrbCa7asY79i6x4XU",
  authDomain: "chat-app-7e901.firebaseapp.com",
  projectId: "chat-app-7e901",
  storageBucket: "chat-app-7e901.appspot.com",
  messagingSenderId: "213579861617",
  appId: "1:213579861617:web:38afdefee3189d4c2a95d0",
  
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
//   function: getAuth(),
// });
export const auth = getAuth();
export const database = getFirestore();
