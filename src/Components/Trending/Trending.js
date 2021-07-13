import axios from "axios"
import {useState,useEffect} from "react"
import Singlecontent from "../Singlecontent/Singlecontent"
import "./Trending.css"
import CustomPagination from "../CustomPagination/CustomPagination"
require('dotenv').config()



export default function Trending(){
	
const [content,setcontent] = useState([]);
const [page,setpage] =useState(1);

const fetchtrending = async ()=>{

	const {data} = await axios.get(
		`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
		);
	setcontent(data.results);
}

useEffect(()=>{
fetchtrending();
},[page])
	return(
<>
<div>
<span className="pagetitle">Trending</span>
<div className="trending">
{content && content.map((c)=> (
     <Singlecontent
      key={c.id}
      id={c.id}
      poster={c.poster_path}
      title={c.title || c.name}
      date={c.first_air_date || c.release_date}
      media_type={c.media_type}
      vote_average={c.vote_average}
     />

	))}
</div>
<CustomPagination setpage={setpage}/>
</div>

</>


		)
}