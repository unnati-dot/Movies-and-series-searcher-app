
const useGenre = (selectedGenere)=>{
   if(selectedGenere.length < 1) return "";

   const genreIds = selectedGenere.map((g)=>g.id);
   return genreIds.reduce((acc,curr)=> acc +","+curr);


}

export default useGenre