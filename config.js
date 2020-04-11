import * as firebase from "firebase"; 
import '@firebase/database';

const firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
