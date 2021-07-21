import React from 'react';
import { useState,useEffect } from 'react';
import firebase  from 'firebase';
import logo from '../photos/logo.png';

const TopContainer =(props)=>{
   
   const [name,setName]=useState();
   const [faculty,setFaculty]=useState();
    const mainConatiner={
        display:'flex',
        borderBottom: "1px solid lightgrey",
        height:'10vh',
        justifyContent:'flex-end',
        alignItems:'center'
    }
    useEffect(()=>{
                         firebase.
                        firestore()
                        .collection('admin')
                        .doc('iG5qpHmBX7OAc06pKTJVq90NE5H3')
                        .get()
                        .then((ss)=>{
                          const data=ss.data()
                          setFaculty(data.faculty)
                          setName(data.name)
                         })
    })  

    
  
    return(
        <div style={mainConatiner}>
            <div style={{display:'flex',flexDirection:'row',marginRight:'5vw'}}>
               
                <div style={{display:'flex',flexDirection:'column',marginRight:20,height:'4vw',justifyContent:'center'}}>
                   <text style={{alignSelf:'flex-end'}}>{name}</text>
                   <text>{faculty}</text>
                </div>
                <div >
                    <img src={logo} style={{height:'4vw',width:'4vw'}} />
                </div>
            </div>
         
        </div>
    )

}
export default TopContainer
