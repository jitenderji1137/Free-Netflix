import React, { useState , useEffect , useRef } from 'react'
import "./video.css"
import axios from "axios";
import { Spinner } from '@chakra-ui/react'
function Video() {
    const [arr,arrvalue] = useState("");
    const [aev,arrdatavalue] = useState(true);
    const targetRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [next,nextid] = useState("");
    function getdata(){
        setIsLoading(true);
        axios.options(`https://api.playeur.com/v1/videos?content_rating_language=al&limit=40&sort=new&time_scope=all&channel_scope=all${next}`).then((res)=>{
        axios.get(`https://api.playeur.com/v1/videos?content_rating_language=al&limit=40&sort=new&time_scope=all&channel_scope=all${next}`)
        .then((data)=>{
            const dddaaatttaaa = data.data.data;
            nextid(`&cursor=${data.data.meta.next_cursor}`);
            for(let item of dddaaatttaaa){
                const img = item.cover_image_url;
                const handle = item.handle;
                const title = item.title;
                if(img&&handle&&title){
                    const newData = `<img src='${img}' class='imgborder' alt='${title}' title='${title}' />`;
                    arrvalue(prevData => prevData + newData);
                }
            }
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        })
    })
    }
    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    
        if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
            arrdatavalue(false);
            getdata();
        }
    };
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    },[])
    return (
        <>
        <div className='mdiv'>
        {aev?<>
        <div className='nodata'>
        {Array.from({ length: 50 }).map((_, index) => (
            <div key={index}>
                <img src={process.env.REACT_APP_GRAY_COLOR} className='imgborder' alt='FREE NETFLIX ...' />
            </div>
        ))}
        </div>
        </>:<><div className='nodata' dangerouslySetInnerHTML={{ __html: arr }} /></>}
        </div>
        <div ref={targetRef} id="myTargetElement"><Spinner thickness='5px' speed='1s' emptyColor='gray.200' color='red' size='xl'/></div>
        </>
    )
}

export default Video
