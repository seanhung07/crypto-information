import './App.css';
import { Route, BrowserRouter as Router, Switch, HashRouter} from 'react-router-dom'
import Home from './Home'
import Order from './components/Chart/Order'
import TradingView from './components/Chart/TradingView'
import Data from './components/Bybt/Data'
import Navbar from './components/Navigation/TopNavbar'
import Liquidation from './components/Bybt/Liquidation';
function App(){
  return(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/order" component={Order}/>
          <Route exact path="/draw" component={TradingView}/>
          <Route exact path="/data" component={Data}/>
          <Route exact path="/liquidation" component={Liquidation}/>
        </Switch>
    </HashRouter>
  )
};

export default App;