import firebase from "firebase";

 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiZDssTsLMpfnTTYUBJlWjhEz0ALdZFXw",
  authDomain: "web-programming-b891e.firebaseapp.com",
  databaseURL: "https://web-programming-b891e-default-rtdb.firebaseio.com",
  projectId: "web-programming-b891e",
  storageBucket: "web-programming-b891e.appspot.com",
  messagingSenderId: "161920697099",
  appId: "1:161920697099:web:b6afaaac25f564d2eb180e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;