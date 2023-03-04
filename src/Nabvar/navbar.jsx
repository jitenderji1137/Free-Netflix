import { Heading , Link , Button } from "@chakra-ui/react";
import "./navbar.css"
export default function Navbar(){
    return(
        <>
        <header>
            <Heading color="red">Free Netflix</Heading>
            <ul className="navigaition">
             <li><Link>Movies</Link></li>
             <li><Link>Web Series</Link></li>
             <li><Link>Adult</Link></li>
             <li><Link>Contact</Link></li>
            </ul>
            <form className="search">
             <input type="text" placeholder="Search..."/>
            </form>
        </header>
        <div className="banner">
           <img src="https://i.imgur.com/7bdh8bG.jpg" className="bg" alt=""/>
           <div className="content">
              <Heading color="white" fontSize="50px">Mulan</Heading>
              <h4>
                <span>2020</span>
                <span><i>+13</i></span>
                <span>1h 13</span>
                <span>Action</span>
              </h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente voluptatum repudiandae, possimus impedit non dolor fuga omnis amet aspernatur obcaecati aut eligendi! Nostrum temporibus quam facilis ipsa assumenda quidem aliquam neque soluta eveniet magnam dolorem cumque deserunt veniam maiores minus iusto, explicabo totam placeat officia id sequi tenetur. Repellendus, explicabo?</p>
              <div className="buttons">
                 <Button>Watch</Button>
                 <Button>Download</Button>
              </div>
           </div>
        </div>
        </>
    )
}