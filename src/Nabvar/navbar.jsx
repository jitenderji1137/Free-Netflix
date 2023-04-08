import { Heading } from "@chakra-ui/react";
import { useNavigate , Link } from "react-router-dom"
import { useEffect } from "react";
import "./navbar.css"
import WebFont from 'webfontloader';
export default function Navbar(){
    const navigate = useNavigate();
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
    alert("Please enter");
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
        </header>
        </>
    )
}