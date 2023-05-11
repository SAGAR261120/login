import React, { Component } from 'react'
import Login from './Component/Login'
import Registration from './Component/Registration'
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , sendEmailVerification} from "firebase/auth";//firebase.
import { initializeApp } from "firebase/app";//firebase.
import { Route  , Routes , Navigate  , BrowserRouter} from 'react-router-dom';
import Loader from './Component/Loader';



var firebaseConfig = {
  apiKey: "AIzaSyD6WzAM4kKVax3hRHrTcZXafdEbdCXGe0Q",
  authDomain: "ws-cube-tech.firebaseapp.com",
  databaseURL: "https://ws-cube-tech-default-rtdb.firebaseio.com",
  projectId: "ws-cube-tech",
  storageBucket: "ws-cube-tech.appspot.com",
  messagingSenderId: "248092200998",
  appId: "1:248092200998:web:1775f931ce103dd46956e7"
};

export class App extends Component {
  constructor()
  {
 super()
//  THIS CODE IS BELONG TO RERENDERING.
      this.state=
 {

page:1,//use in Registration folder because of this it will show only one form(registration).
message:null,//use in Registration folder
type:1,//use in Registration folder to change class.
  } }

  registration=(e)=>
{ 
e.preventDefault()
const email = e.target.email.value;
const password = e.target.password.value;
const confirmpassword = e.target.confirmpassword.value;

if(password!==confirmpassword)
{
this.setState({message:'password dose not match',type:0})
}
else{
// FIREBASE REGISTRATION (Authentication) FOLDER:

const app =initializeApp(firebaseConfig);
const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((data) => { //it will print data.
sendEmailVerification(auth.currentUser)
 .then(()=>
 {
alert("Verification email sent successfully")
 })
 .catch((error)=>{
  console.log(error)
 })
 this.setState({message:"Registration successfully",type:1})
console.log(data)
  })
  .catch((error) => {//it will print error.
  console.log(error)
   this.setState({message:error.message,type:0},()=>{
 e.target.email.value=' ';
 e.target.password.value=' ';
 e.target.confirmpassword.value=' ';})
  });//it will print the error.
}
}

loginhandler = (event)=>{

  event.preventDefault()
 const email = event.target.email.value;
const password = event.target.password.value;

const app =initializeApp(firebaseConfig);
const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password)
  .then((data) => { 
if (data.user.emailVerified==true)
{
this.setState({message:"log in successfully",type:1 })
}
else{
  this.setState({message:"email is not verified yet"})
}
// console.log(data)
})
  .catch((error) => {
  console.log(error)
   this.setState({message:error.message,type:0},()=>{
 event.target.email.value=' ';
 event.target.password.value=' ';})
  });}
  
pageswith=(event)=>
{
this.setState({page: !this.state.page })//it is imp to be a same name here page it will switch the login box to registration box & message:null will remove error or successfull message while switching.
event.preventDefault()
}
   

  render() {

    return (    
                     
      <BrowserRouter>
      <div>

<Routes>
    
                 <Route path='/Loader' element={<Loader></Loader>}></Route>
           <Route path='*' element=  { this.state.page == 1 ? <Registration google={this.googleloginhandler } type={this.state.type} page={this.state.page} message={this.state.message} switch={this.pageswith} registration={this.registration}></Registration> :  <Login message={this.state.message}  type={this.state.type} switch1={this.pageswith} login={this.loginhandler} redirect={this.redirect}></Login> }></Route>

     </Routes>
      </div>
      </BrowserRouter>    
       
    )
  }
}

export default App









