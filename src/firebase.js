import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
import 'firebase/firestore'

Vue.use(VueFirestore)

const config = {
    apiKey: "AIzaSyC-5OWscp-42RMx4JA7-IzsidieRPW1hiU",
    authDomain: "admin-9f4b5.firebaseapp.com",
    databaseURL: "https://admin-9f4b5.firebaseio.com",
    projectId: "admin-9f4b5",
    storageBucket: "admin-9f4b5.appspot.com",
    messagingSenderId: "821437048376"
  };

  const firebaseApp = Firebase.initializeApp(config)

  export const firestore = firebaseApp.firestore();

  const settings = { timestampsInSnapshots: true};
  firestore.settings(settings);
