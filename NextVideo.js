import { useParams } from "react-router-dom"

const NextVideo=()=>{
    const {id}=useParams()
    const embedUrl="https://www.youtube.com/embed/"
    //const id="RLzC55ai0eo?si=6t42IgBE52htvmpQ"
   // const mainUrl=embedUrl+{id}
    return <div className="n-v">
         <iframe  width="900" height="515" src={embedUrl+id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>
}
export default NextVideo;