import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import im from './l.png';
import profile from './profile.png';
import passwordimage from './password.png';
import { adminLolgin } from '../Actions/adminAction';
import {connect} from "react-redux";



const LogIn =(props)=>{
    const [email,setemail] =useState('');
    const [password,setPassword]=useState('');
    const [error,seterror]=useState('')
 
    const container={
        height:'100vh',
        width:'100vw',
        backgroundColor:'white'
    }
    const logoContainer={
        display:'flex',
        justifyContent:'center',
        // border:'1px solid black'
    }
    const logo={
        height:150,
        width:150,
    }
    const mainContainer={
        height:'65vh',
        width:'70vw',
        display:'flex',
        flexDirection:'column',
        borderRadius:'30px',
        margin:'0 30vh 0 30vh  ',
        boxShadow: "0px 3px 10px 3px #9E9E9E",
        
    }
    const titleContainer={
        height:'30%',
       
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        
        //  border:'1px solid black',

        }
    const textContainer={
        marginLeft:'10%',
        marginTop:20
         }   

    const contentContainer={
        height:'70%',
        width:'100%',
        // border:'1px solid red',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }
    const inputConatiner={
        width:'70%',
        height:'10%',
        // border:'1px solid blue',
        marginLeft:'10%',
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#F1F1F1'
        

    }     
    const inputConatinerImage={
        width:'10%',
        height:'100%',
        // border:'1px solid pink',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
       

    }
    const inputConatinerText={
        width:'90%',
        height:'100%',
        // border:'1px solid yellow',
        display:'flex',
        alignItems:'center'
    }
    return(
        <div style={container} > 
           <div style={logoContainer}>
               <img style={logo} src={im} alt="l"></img>
           </div>
           <div style={mainContainer} >
                  <div style={titleContainer}>
                  <div style={textContainer}>
                    <text style={{fontSize:20,fontWeight:'bold'}}>Login</text>
                    </div>
                    <div style={textContainer} >
                    <text style={{fontSize:15,fontWeight:'500'}}>Welcome Back, Please Login to Continue</text>
                    </div>
                  </div>
                  <div style={contentContainer}>
                     <div style={inputConatiner}>
                          <div style={inputConatinerImage}> 
                          <img  style={{height:20,width:20}} src={profile} alt="l"></img>
                          </div>
                          <div style={inputConatinerText}>
                            <input type='text' name='text' value={email} style={{border:'0px solid black',backgroundColor:'#F1F1F1'}} placeholder="Email" onChange={(e)=>{
                                setemail(e.target.value)
                            }}/>
                          </div>
                     </div>
                     <div style={inputConatiner}>
                          <div style={inputConatinerImage}> 
                          <img  style={{height:20,width:20}} src={passwordimage} alt="l"></img>
                          </div>
                          <div style={inputConatinerText}>
                            <input type='password' name='text' value={password} style={{border:'0px solid black',backgroundColor:'#F1F1F1'}} placeholder="Password" onChange={(e)=>{
                                setPassword(e.target.value)
                            }}/>
                          </div>
                     </div>
                     <div style={{width:'100%',display:'flex',justifyContent:'flex-end',marginRight:'20%',marginTop:20}}>
                      <text>Forgot Password ?</text>
                  </div>
                  {
                      error!==''?<div>
                          <text style={{color:'red',fontSize:12}}>{error}</text>
                          </div>:null
                  }
                  <div style={{display:'flex',justifyContent:'center',marginTop:20}}>
                      <button onClick={()=>{
                          if(email==='')
                            seterror('Please Enter Email')
                          else if(password==='')
                            seterror('Please Enter Password')  
                          else
                            {
                                props.dispatch(adminLolgin({email:email,password:password,props:props}))
                                
                            } 
                      }} style={{borderRadius:4,border:'0 solid black',height:30,width:100,backgroundColor:'#272660',color:'white'}}>Log In</button>
                  </div>
                  </div>
                 
           </div>
        </div> 
    )
}

export default connect()(LogIn)
