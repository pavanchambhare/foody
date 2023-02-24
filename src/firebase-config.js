import { initializeApp } from "firebase/app";
import {  getFirestore } from "@firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDe_em_-mvHnyVU1FWLjKgG3tlKUnY1v78",
  
    authDomain: "fir-ab64b.firebaseapp.com",
  
    projectId: "fir-ab64b",
  
    storageBucket: "fir-ab64b.appspot.com",
  
    messagingSenderId: "891103489919",
  
    appId: "1:891103489919:web:7bb86a0de92f478240344a",
  
    measurementId: "G-24TB763XB5"
  
  };
  
  const  app = initializeApp(firebaseConfig);

  export  const db = getFirestore(app);