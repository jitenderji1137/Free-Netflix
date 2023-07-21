import React, { useState , useEffect } from 'react'
import "./Videos/video.css"
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'
function Videoprovider() {
    const [arrr,arrrvalue] = useState(JSON.parse(localStorage.getItem("providedvideodata"))||[]);
    const [next,nextid] = useState("");
    const navigate = useNavigate();
    function getdata(){
        axios.get(`https://api.playeur.com/v1/videos?content_rating_age=8&content_rating_language=al&content_rating_violence=mv&content_rating_content=&content_rating_nudity=&limit=50&sort=random&time_scope=all&channel_scope=all${next}`)
        .then((data)=>{
            const dddaaatttaaa = data.data.data;
            nextid(`&cursor=${data.data.meta.next_cursor}`);
            let ar = [];
            for(let item of dddaaatttaaa){
                const img = item.cover_image_url;
                const handle = item.handle;
                const title = item.title;
                if(img&&handle&&title){
                    ar.push(item);
                }
            }
            arrrvalue([...arrr,...ar]);
            localStorage.setItem("providedvideodata", JSON.stringify(ar));
        })
    }
    useEffect(()=>{
        getdata();
    },[])
    console.log(arrr);
    return (
        <>
        <div className='mdiv'>
            <div className='nodata'>
            {arrr.map((item)=>{
                return <div className='videodiv' key={item.handle}>
                    <div className="aspect-ratio-16x9">
                        <img src={item.cover_image_url} className="imgborder" alt={item.title} title={item.title} onClick={() => navigate(`/player/${item.title.split(" ").join("_")}/videos/playeur/${item.handle}/1/${item.cover_image_url.split("/").join("---")}`)}/>
                    </div>
                </div>
            })}
            </div>
        </div>
        <div id="myTargetElement"><Button onClick={()=>{getdata()}} colorScheme='red'>Load More ...</Button></div>
        </>
    )
}

export default Videoprovider
