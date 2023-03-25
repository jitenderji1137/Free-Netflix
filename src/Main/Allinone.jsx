import { Center,Button } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { Link,useParams,Navigate } from "react-router-dom";
import "./Allinone.css"
import axios from "axios";
export default function Allinone(){
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
    const [data,datavalue] = useState([]);
    const [tot,total] = useState("");
    const [text,textval] = useState("");
    const {Geans,Page,Limit} = useParams();
    useEffect(()=>{
        datavalue([]);
        textval("");
        window.scrollTo(0,0);
     axios.get(`https://netflix-api-for-project.onrender.com/NetFlixAPI?${Geans}${Page}${Limit}`)
     .then((res)=>{
        datavalue(res.data);
        total(res.headers["x-total-count"]);
        if(res.data.length===0){
            textval("No Result Found on this Page ...");
        }
        else{
           textval(`Total Results For You :- ${res.headers["x-total-count"]}`);
        }
     })
    },[Geans,Page,Limit])
    return(
        <>
        {+Page<=0?<Navigate to={`/all_content/${Geans}/1/&_limit=50`}></Navigate>:""}
        <h1 id="heading">{text}</h1>
        <div className="JustforGrid">
        {data.length===0?arr.map((I,Index)=>{
            return(
                <>
                <img src="https://i.postimg.cc/Cxr8bfBf/Untitled-design.png" className="images" alt="" key={Index}/>
                </>
            );
        }):""}
        {
            data.map((Item)=>{
                return(
                    <>
                <img src={Item.Image} className="images" title={Item.Title} alt="" key={Item.id}/>
                    </>
                )
            })
        }
        </div>
        <Center>
            <div>
                <Button><Link to={`/all_content/${Geans}/${+Page<=1?+Page:+Page-1}/&_limit=50`} style={{padding:"0px 20px"}}>...Previous</Link></Button>
                <Button isDisabled={true}>{Page}</Button>
                <Button><Link to={`/all_content/${Geans}/${+Page<=Math.ceil(tot/50)?Math.ceil(tot/50):+Page+1}/&_limit=50`}>Next...</Link></Button>
            </div>
        </Center>
        </>
    );
}