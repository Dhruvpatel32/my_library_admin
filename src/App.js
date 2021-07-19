
import './App.css';
import firebase from 'firebase';
import LogIn from './Components/LogInScrenn';
import Dashbord  from './Components/Dashbord';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import createStore from './store/store';
import AddBook from './Components/AddBook.js';
import StudentList from './Components/StudenList';
import ManageIsuue from './Components/ManageIssue';





function App() {
  var firebaseConfig = {
    apiKey: "AIzaSyCFg0UnF2R7hk0CV6Jo6JxcLDQYSEu1oDE",
    authDomain: "mylibrary-84846.firebaseapp.com",
    projectId: "mylibrary-84846",
    storageBucket: "mylibrary-84846.appspot.com",
    messagingSenderId: "111532768023",
    appId: "1:111532768023:web:22d0c1d4f869d56db7d552"
  };
 

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
  
 const store=createStore()
  
  return (
    <Provider store={store}>
      <Router>
        
        <Route exact path='/' component={LogIn} />
        <Route exact path='/dashbord' component={Dashbord} />
        <Route exact path='/userList' component={StudentList} />
        <Route exact path='/addBook' component={AddBook} />
        <Route exact path='/manageIssue' component={ManageIsuue} />
        
      </Router>
      </Provider>
     
    
      
  );
}

export default App;
