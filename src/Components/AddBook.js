import { style } from '@material-ui/system';
import React ,{useEffect, useState} from 'react';
import LeftContainer from './LeftContainer';
import TopContainer  from './TopContainer';
import addImage from '../photos/addImage.png';
import firebase from 'firebase';
import '../styles/AddBook.scss';
import { v4 as uuidv4 } from 'uuid';


const AddBook =(props)=>{
   const [image,setImage]=useState('');
   const [bookName,setBookName]=useState('');
   const [bookDescription,setBookDescription]=useState('');
   const [author,setAuthor]=useState('');
   const [imageURL,setImageURL]=useState('');
   const [loading,setLoading] =useState(false)
   const [tempImg,setTempImg]=useState('');
   const [Preview,setPrivew]=useState('')
   const [error,setError]=useState('')
    useEffect(()=>{
     if(tempImg!==''){
        const reader=new FileReader();
        reader.onloadend=()=>{
           setPrivew(reader.result  );

        }
        reader.readAsDataURL(tempImg)
     }
     
    },[tempImg])
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
  const uploadImage=(e)=>{
   const storage=firebase.storage();
   if(image == null)
   return;
   const addimg= storage
                 .ref(`/images/${image.name}`)
                 .put(image)

                 addimg.on('state_changed',setLoading(true), function(error) {console.log(error);
                }, function() {
        
                    
                     addimg.snapshot.ref.getDownloadURL().then(
                      function(downloadURL) {
                      console.log('File available at', downloadURL);
                      const url=downloadURL
                     setImageURL(url)
                     setLoading(false)
                       addBookDetailes(url)                   
                  });
               })           
    
  }
  const startAddingBook=()=>{
   //   const id=uuidv4() 
   
     uploadImage()

  }
  const addBookDetailes=(url)=>{
   //   alert(url)
     const id=uuidv4() 
    firebase
    .firestore()
    .collection('bookFamilys')
    .doc(id)
    .set({
       BaookName:bookName,
       BookDescription:bookDescription,
       Author:author,
       BookFamilyID:id,
       BookImage:url
    }).then(()=>{
       alert('Book Sucessfully Added !!')
    })
  }
    return(
        <div style={mainConatiner}>
        <div style={leftContainer}>
            <LeftContainer props={props}/>
        </div>
        <div style={rightContainer}>
             <TopContainer/>
             <div className="top-2" style={{border:'0px solid black',height:'89vh',display:'flex',}}>
                <div style={{border:'0px solid black',width:'35vw',height:'89vh'}}>
                     <div style={{margin:'5vh'}}>
                        <text>Add Book</text>
                        
                     </div>
                     <div style={{display:'flex',justifyContent:'center',border:'1px solid darkgrey',width:'25vw',height:'50vh',margin:'5vh',alignItems:'center'}}>
                          <img src={tempImg===''?addImage:Preview} style={{height:'25vh',width:'12.5vw'}}/>
                     </div>
                     <text>{loading?'Loading....':''}</text>
                     <div style={{display:'flex',border:'0px solid black',justifyContent:'flex-end',marginRight:'20vh'}}>
                          
                     <div style={{display:'flex',height:'5vh',backgroundColor:'#272660',width:'10vh',borderRadius:4,justifyContent:'center',alignItems:'center'}}>
                       
                       <label style={{backgroundColor:'none',color:'white',borderRadius:4,fontSize:12}}>
                       <input type="file" style={{display:'none'}}  accept="image/*" onChange={
                        (e)=>{
                          //  console.log(e.target.value)
                        //   alert(JSON.stringify(e.target.value))
                        if(e.target.files[0].type.substring(0,5)=== 'image')
                          {
                            setTempImg(e.target.files[0])
                            
                           //  alert(JSON.stringify(e.target.files[0].name))
                            setImage(e.target.files[0])
                        }
                        }
                       }/>
                       Add Image
                       </label>
                    </div>
              
                     </div> 
                     </div>
                <div style={{border:'0px solid black',width:'35vw',height:'89vh',}}>
                 <div style={{margin:'10vh',justifyContent:'center'}}>
                 <div >
                     <div >
                       <text>Book Name</text>
                     </div>
                     <div style={{marginTop:'1.5vh'}}>
                        <input type="text"  className='input' value={bookName} onChange={
                         (e)=>{
                            setBookName(e.target.value)
                         }
                        }/>
                     </div>
                  </div>
                  <div style={{marginTop:'3vh'}}>
                     <div >
                       <text>Book Description</text>
                     </div>
                     <div style={{marginTop:'1.5vh'}}>
                        <textarea  value={bookDescription} onChange={
                           (e)=>{
                              setBookDescription(e.target.value)
                           }
                        }  className='input2' />
                     </div>
                  </div>
                  <div style={{marginTop:'3vh'}}>
                     <div>
                       <text >Author Name</text>
                     </div>
                     <div style={{marginTop:'1.5vh'}}>
                        <input value={author} onChange={
                             (e)=>{
                                setAuthor(e.target.value)
                             }
                        } type="text"  className='input' />
                     </div>
                  </div>
                 <div style={{marginTop:'3vh',display:'flex',flexDirection:'row',width:'20vw',justifyContent:'space-evenly'}}>
                 <div>
                     <button style={{border:'0px solid black',backgroundColor:'#272660',width:'7vw',height:'5vh',color:'white',borderRadius:4}} onClick={()=>{
                      
                       if(bookName=='')
                          setError('Please Enter Book Name')
                        else if(bookDescription=='')
                          setError('Please Enter Book Description')  
                        else if(author=='')
                          setError('Please Enter Name Of Author')  
                        else if(tempImg=='')
                          setError('Please Add Image of Book')  
                        else 
                           {
                              setError('')
                              startAddingBook() 
                            }
                     }}> upload</button>
                  </div>
                  <div>
                     <button style={{border:'1px solid darkgrey',backgroundColor:'white',width:'7vw',height:'5vh',color:'black',borderRadius:4}}>Cancle</button>
                  </div>
                 </div>
                 <div>
                    <text style={{marginTop:20,color:'red'}}>{error}</text>
                 </div>
                 </div>
                </div>
              
             </div>
        </div>
      </div>
    )
}
export default AddBook
