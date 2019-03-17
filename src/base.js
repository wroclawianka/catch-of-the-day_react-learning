import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBSibomSH99LrOlhg-0wnLb3K2EVYzBH_I",
  authDomain: "catch-of-the-day-dorota-zelga.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-dorota-zelga.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
