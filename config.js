import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBhqg4npSFKLbP8UvjKFRi5tlz_km87dQY",
  authDomain: "willy-app-ad0a8.firebaseapp.com",
  projectId: "willy-app-ad0a8",
  storageBucket: "willy-app-ad0a8.appspot.com",
  messagingSenderId: "50103923804",
  appId: "1:50103923804:web:4f119b6a3cb506105fe299"
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

  
