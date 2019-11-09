import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAR2Zj4HeGA8J5t9dgCXIHYVmyDLR-nwjI",
    authDomain: "picture-gallery-d02be.firebaseapp.com",
    databaseURL: "https://picture-gallery-d02be.firebaseio.com",
    projectId: "picture-gallery-d02be",
    storageBucket: "picture-gallery-d02be.appspot.com",
    messagingSenderId: "869061021843",
    appId: "1:869061021843:web:98d1754a4391f503833d66"
}

firebase.initializeApp(config);

const db = firebase.firestore()

const paintings = db.collection('paintings');

export default db
