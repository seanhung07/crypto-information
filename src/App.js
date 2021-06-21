import './App.css';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Home'
import DefiData from './components/Defi/DefiData'

function App(){
  return(
      <Router path={process.env.PUBLIC_URL + '/'}>
        <Switch>
          <Route path="/crypto-information" exact component={Home}/>
          <Route path="/crypto-information/defi" component={DefiData}/>
        </Switch>
      </Router>
  )
};

export default App;