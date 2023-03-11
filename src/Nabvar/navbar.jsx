import { Heading } from "@chakra-ui/react";
import { useNavigate , Link } from "react-router-dom"
import "./navbar.css"
export default function Navbar(){
    const navigate = useNavigate();
    const HandelSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${e.target.SearchText.value}`)
    }
    return(
        <>
        <header>
            <Heading color="red">Free Netflix</Heading>
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