const firebase = require('firebase/compat/app');
const ct = require('./constants.js');
require('firebase/compat/auth');
require('firebase/compat/firestore');
require('firebase/compat/database');
require('firebase/compat/storage');


const firebaseConfig = {
    apiKey: "AIzaSyBX5p0b7rd_hLPHweEpYf4N34xNBmSh3FI",
    authDomain: "vidyantra-e7856.firebaseapp.com",
    projectId: "vidyantra-e7856",
    storageBucket: "vidyantra-e7856.appspot.com",
    messagingSenderId: "305162964064",
    appId: "1:305162964064:web:35a83c98feba2e1c790705",
    measurementId: "G-9Y0XM5CQMY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const dbRef = firebase.database().ref();
const storage = firebase.storage();

const createAccount = async (id, firstName, lastName, phone, email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);

      const student = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      };
  
      await db.collection(ct.studentsCollection).doc(student.id).set(student)
      .then(() => {
        console.log('Student successfully created!');
    })
  
      return 200;
    } catch (error) {
      return error.message;
    }
};
   

module.exports = {
    createAccount,
    auth,
    db,
    dbRef,
    storage
};