import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyA1YK0XpRFsUS_HjIqzK-Q7zTUalOqXjfk",
    authDomain: "react-app-cursos-3908c.firebaseapp.com",
    projectId: "react-app-cursos-3908c",
    storageBucket: "react-app-cursos-3908c.appspot.com",
    messagingSenderId: "846000430866",
    appId: "1:846000430866:web:6895be8f7b1d5aefdd5dcb"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
      db,
      googleAuthProvider,
      firebase
  }
