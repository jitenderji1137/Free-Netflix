import { useParams ,useNavigate } from "react-router-dom"
import { useEffect , useState} from "react";
import {Button,Center } from "@chakra-ui/react";
import axios from "axios";
import { Helmet } from 'react-helmet-async';
import "./Player.css";
import "./Allinone.css"
import { FacebookShareButton,FacebookIcon} from "react-share";
export default function Player(){
    const { Title , Geans , Plateform , Id , page } = useParams();
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    const [data,datavalue] = useState([]);
    const navigate = useNavigate();
    const [Page,pagevalue] = useState(page);
    const shareUrl = window.location.href;
    useEffect(()=>{
        datavalue([]);
        window.scrollTo(0,0);
     axios.get(`https://netflix-api-for-project.onrender.com/NetFlixAPI?_page=${Page}&_limit=30&MainCategory=${Geans}`)
     .then((res)=>{
        datavalue(res.data);
     })
    },[Page,Geans])
    useEffect(() => {
        window.scrollTo(0,0);
    }, [Title,Plateform,Id]);
    return(
        <>
        <Helmet>
        <title>{`Free Netflix - ${Title.split("_").join(" ")} ||  Watch Free Movies or WebSeries online or Download || Created BY TRADEmeTRADER as Jitender or Vijay`}</title>
        <meta name='description' content={`Watch - ${Title.split("_").join(" ")} for free ||  Watch Free Movies or WebSeries online or Download || Created BY TRADEmeTRADER as Jitender or Vijay`} />
        <link rel="icon" href="https://i.postimg.cc/wxNWxtMY/rounded-corners-removebg-preview.png" />
        <link rel="canonical" href={`/player/${Title.split("_").join(" ")}/${Geans}/${Plateform}/${Id}/${page}`} />
        <link rel="me" href="https://www.instagram.com/vijayji1137/" />
        <meta name="keywords" content="Free-NetFlix, netflix, freenetflix, vijay, jitender,jitenderji1137,vijayji1137,watch netflix free , download movies free , how to download movies free , watch netflix movies free , how to watch netflix movies for free , netflix clone , netflix free , how to download netflix movies for free , watch free movies , NETFLIX , FREE NETFLIX , how can i watch netflix for free , how to access netflix for free" />
        <meta name="language" content="Hindi" />
        <meta property="og:title" content={`Free Netflix - ${Title.split("_").join(" ")} || Watch Free Movies or WebSeries online or Download || Created BY TRADEmeTRADER as Jitender or Vijay"`} />
        <meta property="og:description" content={`Watch - ${Title.split("_").join(" ")} for free ||  Watch Free Movies or WebSeries online or Download || Created BY TRADEmeTRADER as Jitender or Vijay`} />
        <meta property="og:image" content="https://i.postimg.cc/wxNWxtMY/rounded-corners-removebg-preview.png" />
        <meta property="og:url" content={`/player/${Title.split("_").join(" ")}/${Geans}/${Plateform}/${Id}/${page}`}/>
        <meta property="og:type" content="movie" />
        <meta name="country" content="India" />
        <meta name="instagram:username" content="vijayji1137" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.instagram.com/vijayji1137/" />
        </Helmet>
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

        <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <h1 id="heading">All {Geans}</h1>
        <div className="JustforGrid">
        {data.length===0?arr.map((I,Index)=>{
            return(
                <>
                <img src="https://i.postimg.cc/Cxr8bfBf/Untitled-design.png" className="images" alt="" key={Index}/>
                </>
            );
        }):""}
        {
            data.map((Item,Index)=>{
                return(
                    <>
                <img src={Item.Image} className="images" title={Item.Title} alt="" onClick={()=>{navigate(`/player/${Item.Title.split(" ").join("_")}/${Item.MainCategory}/${Item.Plateform}/${Item.FileID}/1`)}} key={Index}/>
                    </>
                )
            })
        }
        </div>
        <Center>
            <div className="paginationbtn">
                <Button onClick={()=>{pagevalue(+Page<=1?1:+Page-1)}}>...Previous</Button>
                <Button isDisabled={true}>{Page}</Button>
                <Button onClick={()=>{pagevalue(+Page+1)}}>Next...</Button>
            </div>
        </Center>
        </>
    ) 
}