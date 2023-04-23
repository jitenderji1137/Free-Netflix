import { Center,Button } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { Link,useParams,Navigate,useNavigate } from "react-router-dom";
import "./Allinone.css"
import axios from "axios";
export default function Allinone(){
    const navigate = useNavigate();
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
    const [data,datavalue] = useState([]);
    const [text,textval] = useState("");
    const {Geans,Page,Limit} = useParams();
    useEffect(()=>{
        datavalue([]);
        textval("");
        window.scrollTo(0,0);
     axios.get(`${process.env.REACT_APP_Free_NetFlix}?${Geans}${Page}${Limit}`)
     .then((res)=>{
        datavalue(res.data);
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
                return <img src={process.env.REACT_APP_GRAY_COLOR} className="images" alt="" key={Index}/>;
        }):""}
        {
            data.map((Item,Index)=>{
                return <img src={Item.Image} className="images" title={Item.Title} alt={Item.Title} onClick={()=>{navigate(`/player/${Item.Title.split(" ").join("_")}/${Item.MainCategory}/${Item.Plateform}/${Item.FileID}/1/${Item.Image.split("/").join("---")}`)}} key={Index}/>
            })
        }
        </div>
        <Center>
            <div className="paginationbtn">
                <Button><Link to={`/all_content/${Geans}/${+Page<=1?"1":+Page-1}/&_limit=50`} style={{padding:"0px 20px"}}>...Previous</Link></Button>
                <Button isDisabled={true}>{Page}</Button>
                <Button><Link to={`/all_content/${Geans}/${+Page+1}/&_limit=50`}>Next...</Link></Button>
            </div>
        </Center>
        </>
    );
}