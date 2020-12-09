import firebase from "firebase/app"
import "firebase/firebase-auth"
import "firebase/firebase-firestore"

const config = {
    apiKey: "AIzaSyCP8xZEosj3GC87EHbOEcVKw351IjtiKFc",
    authDomain: "crown-db-68599.firebaseapp.com",
    projectId: "crown-db-68599",
    storageBucket: "crown-db-68599.appspot.com",
    messagingSenderId: "293627960418",
    appId: "1:293627960418:web:4f79a2243820e038cf453b",
    measurementId: "G-MLZRDGMPNG"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;