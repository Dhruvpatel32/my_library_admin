import React from 'react';
import LeftContainer from './LeftContainer';
const StudentList =(props)=>{
    const mainConatiner={
        height:'100vh',
        width:'100vw',
        backgroundColor:'#272660',
     display:'flex',
   
     
    }
    const leftContainer={
     flex:0.3,
     backgroundColor:'#272660'
  }
  const rightContainer={
     flex:0.7,
     backgroundColor:'white',
     borderTopLeftRadius:30,
     borderBottomLeftRadius:30
  }
   
    return(
        <div style={mainConatiner}>
        <div style={leftContainer}>
            <LeftContainer props={props}/>
        </div>
        <div style={rightContainer}>

        </div>
      </div>
    )
}
export default StudentList
