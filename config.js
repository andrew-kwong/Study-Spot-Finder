import * as firebase from "firebase"; 
import '@firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBdMwtjqAdF3IPP4qz3sw8wcospOR2Ebk4",
  authDomain: "study-spot-finder-1aa13.firebaseapp.com",
  databaseURL: "https://study-spot-finder-1aa13.firebaseio.com",
  projectId: "study-spot-finder-1aa13",
  storageBucket: "study-spot-finder-1aa13.appspot.com",
  messagingSenderId: "1049767455344",
  appId: "1:1049767455344:web:d608124847bf49c202e2b5",
  measurementId: "G-J5RGCSDC14"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();