import React, { useState , useEffect } from 'react'
import "./Videos/video.css"
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'
function Videoprovider() {
    const [arrr,arrrvalue] = useState([]);
    const [next,nextid] = useState("");
    const [nextresulr,nextresultvalue] = useState(false)
    const navigate = useNavigate();
    function getdata(){
        if(nextresulr){
            return;
        }
        axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAr99xC5BUl1tpQX9LcM6ZcmOGLzFj-WdE&part=snippet&chart=mostPopular&maxResults=50&regionCode=IN${next}`)
        .then((data)=>{
            const dddaaatttaaa = data.data.items;
            nextid(`&pageToken=${data.data.nextPageToken}`);
            if(data.data.nextPageToken === undefined){
                nextresultvalue(true)
            }
            arrrvalue([...arrr,...dddaaatttaaa]);
        })
    }
    useEffect(()=>{
        getdata();
    },[])
    return (
        <>
        <div className='mdiv'>
            <div className='nodata'>
            {arrr.map((item)=>{
                return <div className='videodiv' key={item.id}>
                    <div className="aspect-ratio-16x9">
                        <img src={item.snippet.thumbnails.medium.url} className="imgborder" alt={item.snippet.title} title={item.snippet.title} onClick={() => navigate(`/player/${item.snippet.title.split(" ").join("_").split("?").join("").split("#").join("")}/Videos/Youtube/${item.id}/1/${item.snippet.thumbnails.medium.url.split("/").join("---")}`)}/>
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
