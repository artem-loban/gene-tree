import React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD_tm3u4ZwVbMvlwZ-Zpcb1DN-ioAxQDM8",
  authDomain: "gene-tree-test.firebaseapp.com",
  projectId: "gene-tree-test",
  storageBucket: "gene-tree-test.appspot.com",
  messagingSenderId: "820519603620",
  appId: "1:820519603620:web:a9ee492eda6ea320854531",
  measurementId: "G-PE5X9S87RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const setMember = async () => {
  const membersCollection = collection(firestore, 'members');
  const membersSnap = await getDocs(membersCollection);
  return console.log(membersSnap)
}

const Tree = () => {
  return <button onClick={() => setMember()}>asdasd</button>
};

export default Tree;
