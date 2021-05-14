import './App.css';
import Home from './containers/Home/index';
// import {BrowserRouter as  Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>       
     </Router> */}
     <Home />
    </div>
  );
}

export default App;