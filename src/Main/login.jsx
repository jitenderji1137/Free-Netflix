import React,{useState} from 'react'
import "./login.css"
import { GiCancel } from 'react-icons/gi';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Input , Button } from '@chakra-ui/react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Swal from 'sweetalert2'
function Login({setloginpop}) {
    console.log("calling loginpophandel");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [continueyes, setContinueyes] = useState(true);
    const firebaseConfig = {
        apiKey: "AIzaSyBOwu1HGOc2LTTjalwwhwEkM16EdziUyEE",
        authDomain: "free-netflix-7e3cf.firebaseapp.com",
        projectId: "free-netflix-7e3cf"
    };
    firebase.initializeApp(firebaseConfig);
    function popup(icon, title){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: icon,
            title: title,
        });
    }
    function loginwithfirebase(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }
    function loginwithgithub(){
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }
    const handleTwitterLogin = () => {
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    };
    function loginwithemail(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
            popup("success","Login Success! Enjoy Free Netflix");
            setloginpop();
            })
            .catch((error) => {
                popup("question","Unable to Login ,make sure you have created a account");
            });
    }
    function createwithemail(e){
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            popup("success","Successfully Create, Please login now ...");
            setContinueyes(true);
        })
        .catch((error) => {
            popup("question","Unable to Create Account , Please try again or make sure user does't exists.");
        });
    }
    return (
    <div className="loginpop">
        <div className="loginpopdiv">
            <GiCancel className='cancelicon' onClick={()=>{setloginpop()}} />
            <h1 className='h1text'>Continue <span>Free-Netflix</span> With</h1>
            <div className='logicon'>
                <div className='ggicon' onClick={()=>{loginwithfirebase()}}><FcGoogle/></div>
                <div className='ggicon' onClick={()=>{loginwithgithub()}}><BsGithub/></div>
                <div className='ggicon' onClick={()=>{handleTwitterLogin()}}><AiOutlineTwitter style={{color:"#00b0ff"}}/></div>
            </div>
            <h2 className='h2text'>or</h2>
            {continueyes ?<>
            <form onSubmit={(e)=>{loginwithemail(e)}}>
                <div>
                    <label>Your Email ...</label>
                    <Input className='input' type='email' value={email} placeholder='Enter Your valid email ...' onChange={(e)=>{setEmail(e.target.value)}} isRequired/>
                    <label>Password ...</label>
                    <Input className='input' type='password' value={password} placeholder='Enter Your Password ...' onChange={(e)=>{setPassword(e.target.value)}} isRequired/>
                </div>
                <div className='subbut'>
                    <Button colorScheme='red' type='submit' variant='outline'>Continue</Button>
                </div>
            </form>
            <h1 className='createacc' onClick={()=>{setEmail("");setPassword("");setContinueyes(false)}}>Create New Account ...</h1></>:<>
            <form onSubmit={(e)=>{createwithemail(e)}}>
                <div>
                    <label>Type New Email ...</label>
                    <Input className='input' type='email' value={email} placeholder='Enter Your valid email ...' onChange={(e)=>{setEmail(e.target.value)}} isRequired/>
                    <label>Password ...</label>
                    <Input className='input' type='password' value={password} placeholder='Enter Your Password ...' onChange={(e)=>{setPassword(e.target.value)}} isRequired/>
                </div>
                <div className='subbut'>
                    <Button type='submit' colorScheme='red' variant='outline'>Create Account</Button>
                </div>
            </form>
            <h1 className='createacc' onClick={()=>{setEmail("");setPassword("");setContinueyes(true)}}>Login With Email...</h1>
            </>}
        </div>
    </div>
    )
}

export default Login
