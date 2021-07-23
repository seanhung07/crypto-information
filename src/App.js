import './App.css';
import { Route, BrowserRouter as Router, Switch, HashRouter} from 'react-router-dom'
import Home from './Home'
import Order from './components/Chart/TradingView'

function App(){
  return(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/defi" component={Order}/>
        </Switch>
    </HashRouter>
  )
};

export default App;