import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAbTpIEtYQIiIADiNXA1tuocc88J0lczHU",
    authDomain: "todo-a3ba8.firebaseapp.com",
    projectId: "todo-a3ba8",
    storageBucket: "todo-a3ba8.appspot.com",
    messagingSenderId: "331719779181",
    appId: "1:331719779181:web:1511ece871f9c0bafd3064",
    measurementId: "G-C6PD9D0HRE"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).then(function(result) {
     var token = result.credential.accessToken;
     var user = result.user;
   
     console.log(token)
     console.log(user)
  }).catch(function(error) {
     var errorCode = error.code;
     var errorMessage = error.message;
   
     console.log(error.code)
     console.log(error.message)
  });
}

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const userTodos = firestore.doc(`todos/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }

  try {
    await userTodos.set({
      "tasks": []
    });
  } catch (error) {
    console.error("Error creating user document", error);
  }


  return getUserDocument(user.uid);
};


const addTask = async (task) => {
  const userTodos = firestore.doc(`todos/QXVKxbbRecWYacEsuSWk3aYxSeG2`);

  try {
    console.log("Send", task);
    await userTodos.update({tasks: firebase.firestore.FieldValue.arrayUnion(task)});
    
  } catch (error) {
    console.error("Error creating user document", error);
  }
}
export default addTask;


const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

