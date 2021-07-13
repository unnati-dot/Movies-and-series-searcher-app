import Chip from '@material-ui/core/Chip';
import {useState,useEffect} from "react"
import axios from "axios";



export default function Generes({selectedGenere ,setselectedGenere,generes, setgeneres,type,setpage}){
  
const handleAdd = (genre) =>{

  setselectedGenere([...selectedGenere,genre]);
  setgeneres(generes.filter((g)=> g.id!== genre.id));
  setpage(1);

}

const handleRemove=(genre)=>{
  setselectedGenere(selectedGenere.filter((selected)=>selected.id!==genre.id));
  setgeneres([...generes,genre]);
  setpage(1);
  

}




  const fetchGeneres = async()=>{
  	const {data} = await axios.get(
`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US 
  	`  )
console.log(data.genres)
  		setgeneres(data.genres)
  }

useEffect(()=>{
 fetchGeneres();	

 
},[])
   return(

<div style={{padding: "6px 0"}}>

{selectedGenere && selectedGenere.map((genere)=>(

<Chip 

label={genere.name} 
style={{margin:2}}
size="small" 
color="primary"
key={genere.id}
onDelete={()=>handleRemove(genere)}

clickable/>

))}

{generes && generes.map((genere)=>(

<Chip 

label={genere.name} 
style={{margin:2,fontSize:"17px"}}
size="small" 
key={genere.id}
onClick={()=>handleAdd(genere)}

clickable/>

))}
</div>

   	)


}