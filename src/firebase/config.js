import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAcZ53tZlEw4L5gMRW-_VQXsAL8B51Y4-E",
  authDomain: "instagram-photogallery.firebaseapp.com",
  databaseURL: "https://instagram-photogallery.firebaseio.com",
  projectId: "instagram-photogallery",
  storageBucket: "instagram-photogallery.appspot.com",
  messagingSenderId: "673344297014",
  appId: "1:673344297014:web:f8ec795574cb39cb6ca097",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
