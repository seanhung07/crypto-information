import './App.css';
import ConceptList from './components/Concept/ConceptList'
import Dominance from './components/Chart/Dominance'
import CoinUpDown from './components/Chart/CoinUpDown'
import News from './components/News/News'
import Grid from '@material-ui/core/Grid' 
import {ThemeProvider, createMuiTheme,makeStyles} from '@material-ui/core/styles'
import {Container, CssBaseline,Typography,Box} from "@material-ui/core";
import React,{useState} from 'react'
import FearGreed from './components/Chart/FearGreed';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../src/assets/logo.png'
import Market from './components/Chart/Market';
import Whale from './components/News/Navbar';
import { Link } from 'react-router-dom';
import Navbar from './components/News/Navbar';
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
  typography:{
    fontFamily:`'Baloo Tammudu 2', 'cursive';`,
    fontSize: 15
  },
  background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(167,57,165,1) 100%)'
});

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // textAlign: 'center',
  },
}));

function Home(){
  const classes = useStyles();
  const [active,setActive] = useState("First")
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
      <AppBar position="static" style={{background: 'linear-gradient(45deg, rgba(117,61,111,1) 1%, rgba(62,62,69,1) 69%)'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" component={Link} to="/">
            <div className="head">
              <img src={logo} alt="logo"  width="35" height="35"/>
            </div>
          </IconButton>
          <Typography variant="h4" className={classes.title}  style={{ marginTop: 20 , marginBottom:10}}>
            Crypto Information
          </Typography>
          {/* <Box display='flex'>
            <Button component={Link} to="/order">Order Book</Button>
            <Button component={Link} to="/draw">TradingView</Button>
            <Button component={Link} to="/data">Long/Short</Button>
        </Box> */}
        </Toolbar>
      </AppBar>
      <Container fixed>
      <Typography align='center'>
        <div className={classes.root} style={{ marginTop: 30 , marginBottom:10 }}>
            <Button variant="outlined" onClick={()=> setActive("First")}>漲跌分佈</Button>
            <Button variant="outlined" onClick={()=> setActive("Second")}>市場情況</Button>
            <Button variant="outlined" onClick={()=> setActive("Third")}>市占率</Button>
            <Button variant="outlined" onClick={()=> setActive("Fourth")}>貪婪指標</Button>
        </div>
      </Typography>
        <div style={{ marginBottom:30}}>
          {active === "First" && <CoinUpDown/>}
          {active === "Second" && <Market/>}
          {active === "Third" && <Dominance/>}
          {active === "Fourth" && <FearGreed/>}
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <ConceptList /> 
          </Grid>
          <Grid item xs={12} sm={6}>
            <News />
            <Whale/>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    
  );
  
};

export default Home;