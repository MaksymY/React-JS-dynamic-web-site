import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpxHSCmLcbzBKWb5Z9NO67yWd71x8dMvw",
  authDomain: "site-de-recttes.firebaseapp.com",
  databaseURL: "https://site-de-recttes.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
