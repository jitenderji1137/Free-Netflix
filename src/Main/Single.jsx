import { Text , Image } from "@chakra-ui/react"
import { useRef , useEffect , useState} from "react"
import axios from "axios";
import "./Single.css"
import { ArrowLeftIcon , ArrowRightIcon } from "@chakra-ui/icons"
export default function Single({Geans,Title}){
   const [data,datavalue] = useState([]);
   const containerRef = useRef(null);
   const arr = [1,2,3,4,5];
   useEffect(()=>{
     datavalue([]);
     axios.get(`https://netflix-api-for-project.onrender.com/NetFlixAPI${Geans}`)
     .then((res)=>{
        datavalue(res.data);
     })
   },[Geans])
   const handelScrollLeft = ()=>{
    if(containerRef.current){
      const container = containerRef.current;
      container.scrollLeft -= window.innerWidth*0.8;
    }
   }
   const handelScrollRight = ()=>{
    if(containerRef.current){
      const container = containerRef.current;
      container.scrollLeft += window.innerWidth*0.8;
    }
   }
  return(
    <>
    <div className="row">
        <div>
            <Text className="TitleDiv">{Title}</Text>
            <button className="MoreButton"><Text className="MoreText">More <ArrowRightIcon className="MoreArrow"/></Text></button>
        </div>
        <div className="row_posters" ref={containerRef}>
            <button className="ScrollLeft" onClick={handelScrollLeft}><ArrowLeftIcon/></button>
            {data.length ===0?
            arr.map((Item)=>{
              return(
                <Image src="https://i.postimg.cc/Cxr8bfBf/Untitled-design.png" className="row_poster" key={Item}/>
              )
            })
            :
            data.map((Item)=>{
                return(
                    <Image src={Item.Image} title={Item.Title} className="row_poster" key={Item.id}/>
                )
            })
            }
            <button className="ScrollRight" onClick={handelScrollRight}><ArrowRightIcon/></button>
        </div>
    </div>
    </>
  )
}
