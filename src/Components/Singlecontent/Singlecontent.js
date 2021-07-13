import {img_300,unavailable} from "../../config/config"
import "./Singlecontent.css"
import {Badge} from "@material-ui/core"
import Contentmodal from "../Contentmodal/Contentmodal"

export default function Singlecontent({id,poster,title,date,media_type,vote_average}){

return(
<>
<Contentmodal media_type={media_type} id={id}>
<Badge badgeContent={vote_average} color={vote_average<6?"primary":"secondary"}/>
<img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
<b className="title">{title}</b>
<span className="subtitle">{media_type === "tv" ? "TV Series": "Movie"}</span>
<span className="date">{date}</span>
</Contentmodal>
</>


	)


}