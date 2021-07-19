
import {Link, Redirect} from 'react-router-dom';
import dashbord_img from '../photos/dashbord.png';
import addBook from '../photos/addbook.png';
import UserList from '../photos/UserList.png';
import ManageIssue from '../photos/manageisuue.png';
import dashbord_img_black from '../photos/dashbord_black.png';
import addBook_black from '../photos/addbook_black.png';
import UserList_black from '../photos/UserList_black.png';
import ManageIssue_black from '../photos/manageisuue_black.png';
import LogOut from '../photos/Logout.png';
import firebase from 'firebase';
const LeftContainer =(props)=>{
   const container={    
       width:'30vw',
   }
   const location=props.props.location.pathname;
    return(
        <div style={container}> 
          <div style={{marginTop:'30%'}}>
          <div style={location==='/dashbord'?{display:'flex',flexDirection:'row',backgroundColor:'white',paddingLeft:'10%'}:{display:'flex',flexDirection:'row',paddingLeft:'10%'}}>
              <div >
              <img style={{height:20,width:20,margin:20}} src={location==='/dashbord'?dashbord_img_black:dashbord_img} alt="l"></img>
              </div>
              <div  style={{margin:20}}>
                <Link style={location==='/dashbord'?{textDecoration: 'none',color:'black'}:{ textDecoration: 'none',color:'white'}} to="/dashbord">Dashbord</Link>
              </div>
           </div>
           <div style={location==='/addBook'?{display:'flex',flexDirection:'row',backgroundColor:'white',paddingLeft:'10%'}:{display:'flex',flexDirection:'row',paddingLeft:'10%'}}>
              <div >
              <img style={{height:20,width:20,margin:20}} src={location==='/addBook'?addBook_black:addBook} alt="l"></img>
              </div>
              <div style={{margin:20}}>
                <Link style={{ textDecoration: 'none',color:'white'}} to="/addBook">Add Book</Link>
              </div>
           </div>
           <div style={location==='/manageIssue'?{display:'flex',flexDirection:'row',backgroundColor:'white',paddingLeft:'10%'}:{display:'flex',flexDirection:'row',paddingLeft:'10%'}}>
              <div >
              <img style={{height:20,width:20,margin:20}} src={location==='/manageIssue'?ManageIssue_black:ManageIssue} alt="l"></img>
              </div>
              <div style={{margin:20}}>
                <Link style={{ textDecoration: 'none',color:'white'}} to="/manageIssue">Manage Issue Request</Link>
              </div>
           </div>
           <div style={location==='/userList'?{display:'flex',flexDirection:'row',backgroundColor:'white',paddingLeft:'10%'}:{display:'flex',flexDirection:'row',paddingLeft:'10%'}}>
              <div >
              <img style={{height:20,width:20,margin:20}} src={location==='/userList'?UserList_black:UserList} alt="l"></img>
              </div>
              <div style={{margin:20}}>
                <Link style={{ textDecoration: 'none',color:'white'}} to="/userList">Student List</Link>
              </div>
           </div>
           <div style={{display:'flex',flexDirection:'row',paddingLeft:'10%'}}>
              <div >
              <img style={{height:20,width:20,margin:20}} src={LogOut} alt="l"></img>
              </div>
              <div style={{margin:20}}>
                 <button style={{
                                background: 'transparent',
                                border: '0px solid transparent',
                                color:'white'
                                }} onClick={
                     ()=>{
                         
                        firebase.auth().signOut().then(function() {
                            props.props.history.push('./')
                          }).catch(function(error) {
                            alert(error)
                          });
                     }
                 } >Sign Out</button>
                
              </div>
           </div>
          </div>
          
        </div> 
    )
}

export default LeftContainer
