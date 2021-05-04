//Ritvik Kumar K - Gluclose
//Firebase initializing, connecting to firebase server

import * as firebase from 'firebase'
import "firebase/firestore"


  var firebaseConfig = {
    apiKey: "AIzaSyByEyOfU8gPlX17CYALnEoxQDxF02iROmg",
    authDomain: "gluclose-3723d.firebaseapp.com",
    projectId: "gluclose-3723d",
    storageBucket: "gluclose-3723d.appspot.com",
    messagingSenderId: "218841538119",
    appId: "1:218841538119:web:26198a1ba67deefbe71b62",
  };

  firebase.initializeApp(firebaseConfig);

  const firestore = firebase.firestore();

  export default firestore