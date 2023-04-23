import { Center,Button } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { Link,useParams,useNavigate } from "react-router-dom";
import "./Allinone.css"
import axios from "axios";
export default function Search(){
    const { Page,value} = useParams();
    const navigate = useNavigate();
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    document.title = `Free Netflix - Search = ${value} ||  Watch Free Movies or WebSeries online or Download || Created BY TRADEmeTRADER as Jitender or Vijay`;
    const [data,datavalue] = useState([]);
    const [text,textval] = useState("");
    useEffect(()=>{
        datavalue([]);
        textval("");
        window.scrollTo(0,0);
     axios.get(`${process.env.REACT_APP_Free_NetFlix}?_page=${Page}&_limit=30&q=${value}`)
     .then((res)=>{
        datavalue(res.data);
        if(res.data.length===0){
            textval(`No Result Found for ${value} on this Page ...`);
        }
        else{
           textval(`Total ${res.headers["x-total-count"]} Results Found For ${value}`);
        }
     })
    },[Page,value])
    return(
        <>
        <h1 id="heading">{text}</h1>
        <div className="JustforGrid">
        {data.length===0?arr.map((I,Index)=>{
            return <img src={process.env.REACT_APP_GRAY_COLOR} className="images" alt="" key={Index}/>
        }):""}
        {
            data.map((Item,Index)=>{
                return <img src={Item.Image} className="images" title={Item.Title} alt={Item.Title} onClick={()=>{navigate(`/player/${Item.Title.split(" ").join("_")}/${Item.MainCategory}/${Item.Plateform}/${Item.FileID}/1/${Item.Image.split("/").join("---")}`)}} key={Index}/>
            })
        }
        </div>
        <Center>
            <div className="paginationbtn">
                <Button><Link to={`/search/${+Page<=1?"1":+Page-1}/${value}`} style={{padding:"0px 20px"}}>...Previous</Link></Button>
                <Button isDisabled={true}>{Page}</Button>
                <Button><Link to={`/search/${+Page+1}/${value}`}>Next...</Link></Button>
            </div>
        </Center>
        </>
    )
}