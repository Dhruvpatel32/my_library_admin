import React,{useEffect , useState} from 'react';
import LeftContainer from './LeftContainer';
import TopContainer  from './TopContainer';
import firebase from 'firebase';
const StudentList =(props)=>{
   const [studentData,setStudent]=useState([])
   const [count,setCount]=useState(10)
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
   const innerContainer={
      // border:'1px solid red',
      height:'70vh',
      width:'60vw',
      marginLeft:'5vw',
      borderRadius:10,
      paddingTop:'2vh',
      display:'flex',

   }
   const buttonContainer={
      width:'3vw',
      height:'70vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
   }
   const buttonStyle={
      backgroundColor:'#272660',
      color:'white',
      borderRadius:4
   }
    const titleBar={

       marginLeft:'3vw',
       marginRight:'3vw',
       height:'5vh',
       backgroundColor:'#F1F1F1',
       borderRadius:4,
       display:'flex',
       
      //  justifyContent:'space-around',
      

    }
    const contentPannel={
       
      marginLeft:'3vw',
      marginRight:'3vw',
      height:'3vh',
      
      borderRadius:4,
      display:'flex',
      justifyContent:'space-between',
     
    }
    const actionButton={
       width:"25%",
       justifyContent:'center',
       display:'flex',
       alignItems:'center'
      }
   

    useEffect(() => {
      // Update the document title using the browser API
       getStudentData()
    },[]);
    const getStudentData=()=>{
      firebase
      .firestore()
      .collection('users')
      .limit(count*2 +1)
      .get()
      .then(querySnapshot =>{
         const array=[]
         querySnapshot.docs.map(doc => {
            array.push(doc.data())
              
          });
       setStudent(array)   
      //  alert('data')
      })
    }
   //  const renderStudentData=()=>{
      
      
   //  }
    return(
        <div style={mainConatiner}>
        <div style={leftContainer}>
            <LeftContainer props={props}/>
        </div>
        <div style={rightContainer}>
             <TopContainer/>
             <div  style={{height:'89vh'}}>
               <div style={{paddingTop:'5vh',paddingLeft:'5vw'}} >
                 <text style={{fontWeight:'bold',color:'darkgrey'}}>Student List</text>
               </div>
               <div style={innerContainer}>
                  <div style={buttonContainer}> 
                  <button disabled={count>10?false:true} style={buttonStyle} onClick={
                        ()=>{
                           
                           setCount(count-10)
                        }
                     }>
                       {'<'} 
                     </button>
                  </div>
                  <div style={{width:'54vw'}}>
                  <div style={titleBar}>
                      <div style={{width:'25%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                          <text style={{color:'#272660',fontWeight:'600'}}>name</text>
                      </div>
                      <div style={{width:'25%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                           <text style={{color:'#272660',fontWeight:'600'}}>email</text>
                      </div>
                      <div style={{width:'25%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                           <text style={{color:'#272660',fontWeight:'600'}}>Phone Number</text>
                      </div>
                      <div style={{width:'25%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <text style={{color:'#272660',fontWeight:'600'}}>
                               Action
                            </text>
                      </div>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',height:'60vh'}}>
                     {
                     
                     studentData.slice(count-10,count).map(e=>{
                        return <div style={contentPannel}>
                                   <div style={actionButton}>
                                     <text>{e.full_name}</text>
                                   </div>
                                   <div style={actionButton}>
                                        <text >{e.email}</text>
                                   </div>
                                   <div style={actionButton}>
                                        <text>{e.phone_number}</text>
                                   </div>
                                   <div style={actionButton}>
                                   <butoon
                                    style={e.is_allowed?{backgroundColor:'red',color:'white',height:'3vh',width:'5vw',borderRadius:4,display:'flex',justifyContent:'center',fontSize:12,alignItems:'center'  }:{backgroundColor:'#272660',color:'white',height:'3vh',width:'5vw',borderRadius:4,display:'flex',justifyContent:'center',fontSize:12,alignItems:'center'  }}
                                    onClick={
                                       ()=>{
                                         
                                             
                                               firebase
                                               .firestore()
                                               .collection('users')  
                                               .doc(e.user_id)
                                               .set({
                                                  ...e,
                                                  is_allowed:!e.is_allowed
                                               })
                                               .then(()=>{
                                                  getStudentData()
                                               })
                                               

                                            
                                       }
                                    }
                                    >
                                    
                                       {e.is_allowed?'Block':'Allow'}
                                    </butoon>
                                   </div>
                    </div>
                      })
                     }
                  </div>
                 
                 
                  </div>
                  <div style={buttonContainer}>
                  <button disabled={studentData.length>count?false:true} style={buttonStyle} onClick={
                        ()=>{
                           
                           setCount(count+10)
                          if(count+1==studentData.length){
                           getStudentData()
                          }
                           
                        }
                     }>{'>'}</button>
                  </div>
               </div>
             </div>
        </div>
      </div>
    )
}
export default StudentList
