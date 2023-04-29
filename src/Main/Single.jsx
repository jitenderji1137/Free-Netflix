import { Text , Image } from "@chakra-ui/react"
import { useRef , useEffect , useState} from "react"
import axios from "axios";
import "./Single.css"
import { ArrowLeftIcon , ArrowRightIcon } from "@chakra-ui/icons"
import { Link , useNavigate } from "react-router-dom";
export default function Single({Geans,Title}){
  const navigate = useNavigate();
   const [data,datavalue] = useState([]);
   const containerRef = useRef(null);
   const arr = [1,2,3,4,5];
   useEffect(()=>{
    datavalue([]);
    datavalue(JSON.parse(localStorage.getItem(Geans))||[]);
     axios.get(`${process.env.REACT_APP_Free_NetFlix}?${Geans}`)
     .then((res)=>{
        datavalue(res.data);
        localStorage.setItem(Geans, JSON.stringify(res.data));
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
            <Link to={`/all_content/${Geans.split("1")[0]}/1/&_limit=50`}><button className="MoreButton"><Text className="MoreText">More <ArrowRightIcon className="MoreArrow"/></Text></button></Link>
        </div>
        <div className="row_posters" ref={containerRef}>
            <button className="ScrollLeft" onClick={handelScrollLeft}><ArrowLeftIcon/></button>
            {data.length ===0?
            arr.map((Item)=>{
              return(
                <Image src={process.env.REACT_APP_GRAY_COLOR} className="row_poster" key={Item}/>
              )
            })
            :
            data.map((Item,index)=>{
                return(
                  <Image src={Item.Image} title={Item.Title} className="row_poster" onClick={()=>{navigate(`/player/${Item.Title.split(" ").join("_")}/${Item.MainCategory}/${Item.Plateform}/${Item.FileID}/1/${Item.Image.split("/").join("---")}`)}} key={index}/>
                )
            })
            }
            <button className="ScrollRight" onClick={handelScrollRight}><ArrowRightIcon/></button>
        </div>
    </div>
    </>
  )
}
