import React, {  useEffect, useState } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query} from 'firebase/firestore'


import { db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../redux/appSlice'

const Messages = () => {
  const {searchText,emails} = useSelector(store => store.appSlice);
  const [tempEmails,setTempEmails] = useState(emails);
  const dispatch = useDispatch();
 
  useEffect(() => {
    const q= query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot)=> {
      const allEmails = snapshot.docs.map((doc) => ({...doc.data(),id:doc.id}));
      
      dispatch(setEmails(allEmails));
    })
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const filteredEmail = emails?.filter((email)=> {
      return email?.to?.toLowerCase().includes(searchText.toLowerCase()) || email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase());
    })
    setTempEmails(filteredEmail);
  }, [searchText, emails]);
  
  return (
    <div> 
      {
        tempEmails && tempEmails?.map((email,index) => <Message key={index} email = {email}/>)
      
      }
        
    </div>
  )
}

export default Messages