import './App.css';
import Home from './containers/Home/index';
import {BrowserRouter as  Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={Home}/>       
      </Router>
    </div>
  );
}

export default App;