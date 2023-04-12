import "./Footer.css";
import { Link } from "react-router-dom";
import { MdHome , MdMovie } from "react-icons/md";
import { FaSearch,FaYoutube } from "react-icons/fa";
import { RiSpyFill } from "react-icons/ri";
import {IoIosVideocam } from "react-icons/io";
import { BsFillPersonFill,BsCCircle } from "react-icons/bs";
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub } from "react-icons/ai";
export default function Footer(){
    return(
        <>
        <footer className="hero">
          <div className="container flex">
            <div className="container__about">
            <h2>About Me</h2>
            <p>
            A young software developer, starting his professional life, This is a sample website of my work and I will create more like this website , on this website you will get all movies if there is no movie which you want you can message me it will be abilable with in 24 hours.
            </p>
          </div>
          <div className="container-pages flex">
            <div className="container__recentpages">
                <h2>Free Netflix</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul>
                    <li><Link to="/movies">Movies</Link></li>
                </ul><ul>
                    <li><Link to="/webseries">Web Series</Link></li>
                </ul>
                <ul>
                    <li><Link to="/search/1/movies">Search</Link></li>
                </ul>
                <ul>
                    <li><Link to="/adult">Adult 18+</Link></li>
                </ul>    
            </div>
            <div className="container__more">
                <h2>Contact US</h2>
                <ul>
                    <li><a href="https://www.instagram.com/vijayji1137/">Instagram</a></li>
                </ul>
                <ul>
                    <li><a href="https://github.com/jitenderji1137">Github</a></li>
                </ul><ul>
                    <li><a href="https://www.linkedin.com/in/jitender1137/">LinkedIn</a></li>
                </ul>
                <ul>
                    <li><a href="mailto:trademetrader1137@gmail.com">Email</a></li>
                </ul>
                <ul>
                    <li><Link to="/api-docs">API Docs</Link></li>
                </ul>    
            </div>
            </div>
          </div>
          <div className="line_separete">
            <div className="by flex">
                <p style={{display:"flex"}}>Cpoyright <BsCCircle style={{margin:"5px 10px"}}/> {new Date().getFullYear()} All Rights are Reserved by <Link to="https://www.instagram.com/vijayji1137/" style={{marginLeft:"10px"}}>VIJAYJI1137</Link></p>
                <div className="icons">
                    <a href="https://www.instagram.com/vijayji1137/" className="icon1 icon--instagram">
                        <i><AiOutlineInstagram/></i>
                    </a>
                    <a href="https://www.youtube.com/@trademetrader" className="icon1 icon--twitter">
                        <i><FaYoutube/></i>
                    </a><a href="https://www.linkedin.com/in/jitender1137/" className="icon1 icon--linkedin">
                        <i><AiOutlineLinkedin/></i>
                    </a>
                    <a href="https://github.com/jitenderji1137" className="icon1 icon--github">
                        <i><AiOutlineGithub/></i>
                    </a>
                </div>
            </div>
          </div>
        </footer>
        <div className="tab-bar">
            <Link to="/"><button className="tab-item">
            <MdHome/>
            <span>Home</span>    
            </button></Link>
            <Link to="/search/1/movies"><button className="tab-item">
            <FaSearch/>
            <span>Search</span>    
            </button></Link>
            <Link to="/movies"><button className="tab-item">
            <MdMovie/>
            <span>Movies</span>    
            </button></Link>
            <Link to="/webseries"><button className="tab-item">
            <IoIosVideocam/>
            <span>Series</span>    
            </button></Link>
            <Link to="/adult"><button className="tab-item">
            <RiSpyFill/>
            <span>Adult</span>    
            </button></Link>
            <Link to="https://www.instagram.com/vijayji1137/" target="_blank" rel="noreferrer"><button className="tab-item">
            <BsFillPersonFill/>
            <span>Contact</span>    
            </button></Link>
        </div>
        </>
    )
}