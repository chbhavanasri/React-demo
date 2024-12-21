import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Video=(props)=>{
    return <div className="video">
        <img className="video-img" src={props.data.snippet.thumbnails.high.url}></img>
        <h3 className="title">{props.data.snippet.title}</h3>
        <p className="title">{props.data.snippet.channelTitle}</p>
        <p className="title">{props.data.statistics.viewCount} views</p>

    </div>
}
const VideosContainer=()=>{
    const [videoArray,setvideoArray]=useState([])
    async function youtube(){
        const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyBHrYoyNLjFL5F6uQIIMth4lOkEXHyPoV8")
            const originalData=await data.json()
            console.log(originalData.items)
            setvideoArray(originalData.items)
        
          }
         useEffect(()=>{
            youtube()
         },[])

    return <div className="v-container">
        {
            videoArray.map((x)=>{
                return <Link to={"/videos/"+x.id} className="link"><Video data={x}/></Link>
            })
        }
        
    </div>
}

export default  VideosContainer;