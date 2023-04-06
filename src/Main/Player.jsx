import { useParams } from "react-router-dom"
import { useEffect , useState} from "react";
import {Button } from "@chakra-ui/react";
import Single from "./Single";
import "./Player.css";
export default function Player(){
    const { Title , Plateform , Id } = useParams();
    useEffect(() => {
        window.scrollTo(0,0);
    }, [Title,Plateform,Id]);
    return(
        <>
        {Plateform==="Doodstream"?
        <>
         <div id="div1" style={{border: '1px solid rgb(255, 255, 254)', 
            boxShadow: 'rgb(143, 12, 12) 0px 15px 72px 7px', 
            overflow: 'hidden'}}>
        <iframe allow="autoplay;fullscreen" allowFullScreen=""  src={`https://doodstream.com/e/${Id}`} title={Title} style={{height: '100%', left: '0px', position: 'absolute', top: '0px', width: '100%'}}></iframe>
        </div>
        <h1 id="title">{Title.split("_").join(" ")}</h1>
        <div id="downloads">
        <a href={`https://doodstream.com/d/${Id}`} target="_blank" rel="noreferrer"><Button>Download</Button></a></div>
        </>:""}
        {Plateform==="Youtube"?
        <>
            <div id="div1" style={{border: '1px solid rgb(255, 255, 254)', 
                boxShadow: 'rgb(143, 12, 12) 0px 15px 72px 7px', 
                overflow: 'hidden'}}>
            <iframe allow="autoplay;fullscreen" allowFullScreen=""  src={`https://www.youtube.com/embed/${Id}`} title={Title} style={{height: '100%', left: '0px', position: 'absolute', top: '0px', width: '100%'}}></iframe>
            </div>
            <h1 id="title">{Title.split("_").join(" ")}</h1>
            <div id="downloads">
                <a href={`https://loader.to/api/button/?url=https://youtu.be/${Id}&f=360`} target="_blank" rel="noreferrer"><Button>Download in 360p</Button></a>
                <a href={`https://loader.to/api/button/?url=https://youtu.be/${Id}&f=720`} target="_blank" rel="noreferrer"><Button>Download in 720p</Button></a>
                <a href={`https://loader.to/api/button/?url=https://youtu.be/${Id}&f=1080`} target="_blank" rel="noreferrer"><Button>Download in 1080p</Button></a>
            </div>
            </>:""}
            {Plateform==="vTube"?
        <>
         <div id="div1" style={{border: '1px solid rgb(255, 255, 254)', 
            boxShadow: 'rgb(143, 12, 12) 0px 15px 72px 7px', 
            overflow: 'hidden'}}>
        <iframe allow="autoplay;fullscreen" allowFullScreen="" src={`https://vtplay.net/embed-${Id}.html`} title={Title} style={{height: '100%', left: '0px', position: 'absolute', top: '0px', width: '100%'}}></iframe>
        </div>
        <h1 id="title">{Title.split("_").join(" ")}</h1>
        <div id="downloads">
        <a href={`https://vtbe.net/${Id}.html`} target="_blank" rel="noreferrer"><Button>Download</Button></a></div>
        </>:""}
        {Plateform==="DailyMotion"?
        <>
         <div id="div1" style={{border: '1px solid rgb(255, 255, 254)', 
            boxShadow: 'rgb(143, 12, 12) 0px 15px 72px 7px', 
            overflow: 'hidden'}}>
        <iframe allow="autoplay;fullscreen" allowFullScreen="" src={`https://www.dailymotion.com/embed/video/${Id}`} title={Title} style={{height: '100%', left: '0px', position: 'absolute', top: '0px', width: '100%'}}></iframe>
        </div>
        <h1 id="title">{Title.split("_").join(" ")}</h1>
        <div id="downloads">
        <a href={`https://davapps.com/dailymotion-video-downloader/#url=https://www.dailymotion.com/video/${Id}`} target="_blank" rel="noreferrer"><Button>Download</Button></a></div>
        </>:""}
        {Plateform==="streamtape"?
        <>
         <div id="div1" style={{border: '1px solid rgb(255, 255, 254)', 
            boxShadow: 'rgb(143, 12, 12) 0px 15px 72px 7px', 
            overflow: 'hidden'}}>
        <iframe allow="autoplay;fullscreen" allowFullScreen="" src={`https://streamtape.com/e/${Id}`} title={Title} style={{height: '100%', left: '0px', position: 'absolute', top: '0px', width: '100%'}}></iframe>
        </div>
        <h1 id="title">{Title.split("_").join(" ")}</h1>
        <div id="downloads">
        <a href={`https://streamtape.com/v/${Id}`} target="_blank" rel="noreferrer"><Button>Download</Button></a></div>
        </>:""}
        {Plateform==="filemoon"?
        <>
         <div id="div1" style={{border: '1px solid rgb(255, 255, 254)', 
            boxShadow: 'rgb(143, 12, 12) 0px 15px 72px 7px', 
            overflow: 'hidden'}}>
        <iframe allow="autoplay;fullscreen" allowFullScreen="" src={`https://filemoon.in/e/${Id}`} title={Title} style={{height: '100%', left: '0px', position: 'absolute', top: '0px', width: '100%'}}></iframe>
        </div>
        <h1 id="title">{Title.split("_").join(" ")}</h1>
        <div id="downloads">
        <a href={`https://filemoon.sx/download/${Id}`} target="_blank" rel="noreferrer"><Button>Download</Button></a></div>
        </>:""}
        </>
    ) 
}




