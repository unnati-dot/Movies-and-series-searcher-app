

import React from 'react';
import {useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot'
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    "width": "1000",
    "bottom": "0",
    "position":"fixed",
    "backgroundColor":"black"

    
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
const history = useHistory();
React.useEffect(()=>{
if(value===0){
	history.push("/");
}else if(value===1){
	history.push("/movies")
}else if(value===2){
	history.push("/series");
}else{
	history.push("/search")
}

},[value,history])

  return (
  	
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      style={{"width":"100%"}}
    >
    
      <BottomNavigationAction style={{color:"white"}} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Tv shows" icon={<TvIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Search" icon={<SearchIcon />} />
    
    
    </BottomNavigation>

  );
}