import './App.css';
import { Route, BrowserRouter as Router, Switch, HashRouter} from 'react-router-dom'
import Home from './Home'
import DefiData from './components/Defi/DefiData'

function App(){
  return(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/defi" component={DefiData}/>
        </Switch>
    </HashRouter>
  )
};

export default App;