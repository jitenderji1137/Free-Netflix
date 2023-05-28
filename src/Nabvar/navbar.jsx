import { Heading } from "@chakra-ui/react";
import { useNavigate , Link } from "react-router-dom"
import { useEffect } from "react";
import "./navbar.css"
import WebFont from 'webfontloader';
import Swal from 'sweetalert2'
import { BiUserCircle } from 'react-icons/bi';
import { auth } from "../Main/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
export default function Navbar(){
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Piedra', 'Chilanka']
          }
        });
       }, []);
      
    const HandelSubmit = (e)=>{
    e.preventDefault();
    if(e.target.SearchText.value === ""){
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Type Something to Search ...',
            showConfirmButton: false,
            timer: 2500
          })
    }
    else{
        navigate(`/search/1/${e.target.SearchText.value}`)
    }
    }
    return(
        <>
        <header>
            <Heading color="red"><Link to="/" style={{fontFamily: 'Piedra'}}>Free Netflix</Link></Heading>
            <ul className="navigaition">
             <li><Link to="/movies">Movies</Link></li>
             <li><Link to="/webseries">Web Series</Link></li>
             <li><Link to="/adult">Adult</Link></li>
             <li><a href="https://www.instagram.com/vijayji1137/" target="_blank" rel="noreferrer">Contact</a></li>
            </ul>
            <form className="search" onSubmit={HandelSubmit}>
             <input type="text" id="SearchText" placeholder="Search..."/>
            </form>
            {user ?<BiUserCircle onClick={()=>{auth.signOut()}} className="usericon" color="red"/>:<BiUserCircle onClick={()=>{signInWithRedirect(auth, new GoogleAuthProvider())}} className="usericon" color="white"/>}
        </header>
        </>
    )
}