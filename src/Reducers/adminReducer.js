import firebase from 'firebase';
import { useState,useEffect } from 'react';

const  defaultState={}

 export const adminReducer= (state=defaultState,action)=>{
     switch(action.type)
      {
          case 'LOG_IN':
            {
 
                firebase
                .auth()
                .signInWithEmailAndPassword(action.data.email, action.data.password)
                .then((userCredential) => {
                         const uid=userCredential.user.uid;
                        // firebase
                        // .firestore()
                        // .collection('admin')
                        // .doc(uid)
                        // .get()
                        // .then((ss)=>{
                        //   const data=JSON.stringify(ss.data())
                        //   syncStorage.set('name',data.name)
                        //   syncStorage.set('faculty',data.faculty)
                        //  })
                 action.data.props.history.push('./dashbord')
    
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
                return state
            }
            default :
             {
               
                return state;
             }
      }
}

