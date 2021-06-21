import './App.css';
import { HashRouter,Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Home'
import DefiData from './components/Defi/DefiData'

function App(){
  return(
    <Router>
        <Switch>
          <Route exact path="/crypto-information"  component={Home}/>
          <Route exact path="/crypto-information/defi" component={DefiData}/>
        </Switch>
    </Router>
  )
};

export default App;