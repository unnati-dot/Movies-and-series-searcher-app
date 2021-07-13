import "./styles.css";
import {Container} from "@material-ui/core"
import Appbar from "./Components/Appbar/Appbar"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import SimpleBottomNavigation from "./Components/Navigation/Navigation"
import Trending from "./Components/Trending/Trending"
import Movies from "./Components/Movies/Movies"
import Series from "./Components/Series/Series"
import Search from "./Components/Search/Search"


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Appbar/>
    <div className="App">
   <Container>
   <Switch>
   <Route path="/" component={Trending} exact/>
   <Route path="/movies" component={Movies} />
   <Route path="/series" component={Series} />
   <Route path="/search" component={Search} />

   </Switch>
   </Container>
     <SimpleBottomNavigation/>
    </div>
    </BrowserRouter>
    </>
  );
}
