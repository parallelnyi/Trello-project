import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDDrFgE1epzfk0K1LMczFM95xWhepAPxy0",
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
//   }

const firebaseConfig = {
  apiKey: "AIzaSyDDrFgE1epzfk0K1LMczFM95xWhepAPxy0",
  authDomain: "trello-1bbbc.firebaseapp.com",
  databaseURL: "https://trello-1bbbc-default-rtdb.firebaseio.com",
  projectId: "trello-1bbbc",
  storageBucket: "trello-1bbbc.appspot.com",
  messagingSenderId: "974300811075",
  appId: "1:974300811075:web:577967f795a7fbc6b929f6",
};

const app = initializeApp(firebaseConfig);
