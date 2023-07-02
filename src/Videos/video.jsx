import React, { useState , useEffect } from 'react'
import "./video.css"
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'
function Video() {
    const [arrr,arrrvalue] = useState([]);
    const [next,nextid] = useState("");
    const [len,length] = useState(true);
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
                    ar.push([img,title,handle]);
                }
            }
            arrrvalue([...arrr,...ar]);
            length(false);
        })
    }
    useEffect(()=>{
        getdata();
    },[])
    return (
        <>
        <div className='mdiv'>
        {len?<>
        <div className='nodata'>
        {Array.from({ length: 50 }).map((_, index) => (
            <div key={index}>
                <img src={process.env.REACT_APP_GRAY_COLOR} className='imgborder' alt='FREE NETFLIX ...' />
            </div>
        ))}
        </div>
        </>:<><div className='nodata'>
            {arrr.map((item)=>{
                return <img src={item[0]} className="imgborder" alt={item[1]} title={item[1]} onClick={() => navigate(`/player/${item[1].split(" ").join("_")}/videos/playeur/${item[2]}/1/${item[0].split("/").join("---")}`)} key={item[2]}/>
            })}
            </div></>}
        </div>
        <div id="myTargetElement"><Button onClick={()=>{getdata()}} colorScheme='red'>Load More ...</Button></div>
        </>
    )
}

export default Video
