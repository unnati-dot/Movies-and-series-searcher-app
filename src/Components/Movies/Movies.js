import axios from "axios";
import Singlecontent from "../Singlecontent/Singlecontent"
import CustomPagination from "../CustomPagination/CustomPagination"
import {useEffect,useState} from "react"
import Generes from "../Generes"
import useGenre from "../hooks/useGenre";


export default function Movies(){
const [content,setcontent] = useState([]);
const [page,setpage] =useState(1);
const [numofpages,setnumofpages]=useState(500)
const [selectedGenere,setselectedGenere]=useState([])
const [generes,setgeneres] = useState([])
const genreforURL = useGenre(selectedGenere)

const fetchtrending = async ()=>{

	const {data} = await axios.get(
		`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`
		);
	setcontent(data.results);
	setnumofpages(data.total_pages)
}

useEffect(()=>{
fetchtrending();
},[page , genreforURL]);
	return(
		<>
<div>

<span className="pagetitle">Movies</span>

<Generes type="movie" setpage={setpage} selectedGenere={selectedGenere} setselectedGenere={setselectedGenere} generes={generes} setgeneres={setgeneres}/>
<div className="trending">
{content && content.map((c)=> (
     <Singlecontent
      key={c.id}
      id={c.id}
      poster={c.poster_path}
      title={c.title || c.name}
      date={c.first_air_date || c.release_date}
      media_type="movie"
      vote_average={c.vote_average}
     />

	))}
</div>
{numofpages > 1 &&
<CustomPagination setpage={setpage} numofpages={numofpages}/>
}
</div>
</>
		)
}