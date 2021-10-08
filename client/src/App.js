import Navbar from "./components/Navbar"
import ItemCards from "./components/ItemCards"
import ItemDetails from "./components/ItemDetails"
import AddItem from "./components/AddItem"


import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={ItemCards} />
          <Route path="/items/:id" exact component={ItemDetails} />
          <Route path="/items/add/new" exact component={AddItem} />
        </Switch>
        

       
    </div>
    </Router>
    
  );
}

export default App;
