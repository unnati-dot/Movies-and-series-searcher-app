import Pagination from '@material-ui/lab/Pagination';
import {createMuiTheme,ThemeProvider} from "@material-ui/core"

const darkTheme = createMuiTheme({
	palette:{
		type:'dark'
	}
})

export default function CustomPagination({setpage,numofpages=10}){

const handlePageChange=(page)=>{

setpage(page);
window.scroll(0,0);
}
	return(


<div
style={{
	width:"100%",
	display:"flex",
	justifyContent:"center",
	marginTop:10,
}}
>

<ThemeProvider theme={darkTheme}>
<Pagination count={numofpages} onChange={(e)=> handlePageChange(e.target.textContent)} variant="outlined" color="primary" />
</ThemeProvider>
</div>

		)
}