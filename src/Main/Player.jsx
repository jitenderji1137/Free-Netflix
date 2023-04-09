import { useParams ,useNavigate } from "react-router-dom"
import { useEffect , useState} from "react";
import {Button,Center,Text} from "@chakra-ui/react";
import axios from "axios";
import { Helmet } from 'react-helmet-async';
import "./Player.css";
import "./Allinone.css"
import { FaLink } from "react-icons/fa";
import Swal from 'sweetalert2'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { PinterestIcon,EmailIcon,WhatsappIcon,FacebookIcon,TelegramIcon,TwitterIcon} from "react-share";
export default function Player(){
    const { Title , Geans , Plateform , Id , page,Image } = useParams();
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
    },[Page,Geans,Id])
    useEffect(() => {
        window.scrollTo(0,0);
    }, [Title,Plateform,Id]);
    return(
        <>
        <Helmet>
        <title>{`Free Netflix - ${Title.split("_").join(" ")} ||  Watch Free online or Download`}</title>
        <meta name="description" content={`Watch - ${Title.split("_").join(" ")} for free or Download in Full HD`} />
        <meta itemprop="name" content={`Free Netflix - ${Title.split("_").join(" ")} ||  Watch Free online or Download`}></meta>
        <meta itemprop="description" content={`Watch - ${Title.split("_").join(" ")} for free or Download in Full HD`}></meta>
        <meta itemprop="image" content={`${Image.split("---").join("/")}`}></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@Vijayji1137"></meta>
        <meta name="twitter:title" content={`Watch - ${Title.split("_").join(" ")} for free or Download in Full HD`}></meta>
        <meta name="twitter:description" content={`Watch - ${Title.split("_").join(" ")} for free or Download in Full HD`}></meta>
        <meta name="twitter:creator" content="@Vijayji1137"></meta>
        <meta name="twitter:image:src" content={`${Image.split("---").join("/")}`}></meta>
        <meta property="og:site_name" content="free-Netflix" />
        <meta property="og:url" content={`${shareUrl}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Watch - ${Title.split("_").join(" ")} for free or Download in Full HD`} />
        <meta property="og:description" content={`Watch - ${Title.split("_").join(" ")} for free or Download in Full HD`} />
        <meta property="og:image" content={`${Image.split("---").join("/")}`} />
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
        <div className="share">
            <img src={Image.split("---").join("/")} className="oneimage" alt=""/>
            <Text style={{color:"white",fontWeight:"bolder",fontSize:"20px"}}>Share us on </Text>
            <div style={{display:"flex"}}>
            <a href={`https://www.facebook.com/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer">
                <FacebookIcon size={32} borderRadius={10} />
            </a>
            <a href={`https://t.me/share/url?url=${shareUrl}&text=${Title.split("_").join(" ")}`} style={{margin:"0px 0px 0px 20px"}} target="_blank" rel="noreferrer">
                <TelegramIcon size={32} borderRadius={10} />
            </a>
            <a href={`https://twitter.com/intent/tweet?text=${Title.split("_").join(" ")}&url=${shareUrl}`} style={{margin:"0px 0px 0px 20px"}} target="_blank" rel="noreferrer">
                <TwitterIcon size={32} borderRadius={10} />
            </a>
            <a href={`https://api.whatsapp.com/send?text=[${Title.split("_").join(" ")}] [Watch Now For Free or Download in HD] [${shareUrl}]`} borderRadius={10} style={{margin:"0px 0px 0px 20px"}} target="_blank" rel="noreferrer">
                <WhatsappIcon size={32} borderRadius={10} />
            </a>
            <a href={`http://pinterest.com/pin/create/button/?url=${shareUrl}&media=${Image.split("---").join("/")}&description=${Title.split("_").join(" ")} ||  Watch Free online or Download`} style={{margin:"0px 0px 0px 20px"}} target="_blank" rel="noreferrer">
                <PinterestIcon size={32} borderRadius={10} />
            </a>
            <a href={`mailto:?subject=${Title.split("_").join(" ")}&body=${shareUrl}`} style={{margin:"0px 0px 0px 20px"}} target="_blank" rel="noreferrer">
                <EmailIcon size={32} borderRadius={10} />
            </a>
            <CopyToClipboard text={shareUrl}
            onCopy={() =>{
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Link successfully Copeid ...'
                  })
            }}>
            <FaLink style={{backgroundColor:"red",fontSize:"32px",color:"white",borderRadius:"5px",padding:"5px",margin:"0px 0px 0px 20px",cursor:"pointer"}}/>
            </CopyToClipboard>
            </div>
        </div>
        
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
                <img src={Item.Image} className="images" title={Item.Title} alt="" onClick={()=>{navigate(`/player/${Item.Title.split(" ").join("_")}/${Item.MainCategory}/${Item.Plateform}/${Item.FileID}/1/${Item.Image.split("/").join("---")}`)}} key={Index}/>
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