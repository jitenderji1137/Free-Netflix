import React,{useState} from 'react'
import "./login.css"
import { GiCancel } from 'react-icons/gi';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Input , Button } from '@chakra-ui/react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
function Login({setloginpop}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const firebaseConfig = {
        apiKey: "AIzaSyBOwu1HGOc2LTTjalwwhwEkM16EdziUyEE",
        authDomain: "free-netflix-7e3cf.firebaseapp.com",
        projectId: "free-netflix-7e3cf"
    };
    firebase.initializeApp(firebaseConfig);
    function loginwithfirebase(){
        console.log("Login with firebase");
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }
    function loginwithgithub(){
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }
    function loginwithemail(){
        firebase.auth().signInWithEmailAndPassword(email, password)
    }
  return (
    <div className="loginpop">
        <div className="loginpopdiv">
            <GiCancel className='cancelicon' onClick={()=>{setloginpop()}} />
            <h1 className='h1text'>Continue Free-Netflix With...</h1>
            <div className='logicon'>
                <div className='ggicon' onClick={()=>{loginwithfirebase()}}><FcGoogle/></div>
                <div className='ggicon' onClick={()=>{loginwithgithub()}}><BsGithub/></div>
            </div>
            <h2 className='h2text'>or</h2>
            <div>
                <label>Your Email ...</label>
                <Input className='input' type='email' value={email} placeholder='Enter Your valid email ...' onChange={(e)=>{setEmail(e.target.value)}}/>
                <label>Password ...</label>
                <Input className='input' type='password' value={password} placeholder='Enter Your Password ...' onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className='subbut' onClick={()=>{loginwithemail()}}>
                <Button colorScheme='red' variant='outline'>Continue</Button>
            </div>
            
        </div>
    </div>
  )
}

export default Login
