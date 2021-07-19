import firebase from 'firebase';

const  defaultState={}

 export const adminReducer= (state=defaultState,action)=>{
     switch(action.type)
      {
          case 'LOG_IN':
            {
                
                
                firebase.auth().signInWithEmailAndPassword(action.data.email, action.data.password)
  .then((userCredential) => {
    
    
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

