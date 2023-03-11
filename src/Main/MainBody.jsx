import { Heading , Button } from "@chakra-ui/react"
import "../Nabvar/navbar.css"
import Single from "./Single"
export default function MainBody({Cate}){
    return(
        <>
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
        <div className="Mycarts" style={{position:"relative",backdropFilter:"blur(20px"}}>
        {Cate.map((Item,index)=>{
            return(
              <Single Geans={Item.Geans} Title={Item.Title} key={index} />
            )
        })}
        </div>
        </>
    )
}