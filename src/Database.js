import { async } from '@firebase/util';
import React from 'react'
import { useState, useEffect } from 'react'
import { db } from './firebase-config'
import { collection, getDocs } from "firebase/firestore"

function  Database() {
const [users, setUsers] = useState([]);
const usersCollectionRef = collection(db, "data")
useEffect(() => {

  const getUsers = async () => {
   const data = await  getDocs(usersCollectionRef)
    setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
  }
  getUsers()
}, [])


  return (
    <div>
      
    </div>
  )
}

export default Database
