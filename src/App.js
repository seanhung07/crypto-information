import './App.css';
import ConceptList from './components/Concept/ConceptList'
import Dominance from './components/Chart/Dominance'
import CoinUpDown from './components/Chart/CoinUpDown'
import News from './components/News/News'
import Grid from '@material-ui/core/Grid' 
import {ThemeProvider, createMuiTheme,makeStyles} from '@material-ui/core/styles'
import {Container, CssBaseline,Typography} from "@material-ui/core";
import React,{useState} from 'react'
import FearGreed from './components/Chart/FearGreed';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../src/assets/logo.png'
import Market from './components/Chart/Market';
const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography:{
    fontFamily:`'Baloo Tammudu 2', 'cursive';`,
    fontSize: 15
  }
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
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

function App(){
  const classes = useStyles();
  const [active,setActive] = useState("First")
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" style={{background: '#202020'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <div className="head">
              <img src={logo} alt="logo"  width="35" height="35"/>
            </div>
          </IconButton>
          <Typography variant="h4" className={classes.title}  style={{ marginTop: 20 , marginBottom:10}}>
            Crypto Information
          </Typography>
        </Toolbar>
      </AppBar>
      <Container >
      <div className="topnav" style={{ marginTop: 30 , marginBottom:10}}>
        <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        >
          <Button onClick={()=> setActive("First")}>漲跌分佈</Button>
          <Button onClick={()=> setActive("Second")}>市場情況</Button>
          <Button onClick={()=> setActive("Third")}>市占率</Button>
          <Button onClick={()=> setActive("Fourth")}>貪婪指標</Button>
        </Grid>
        </div>
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
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    
  );
  
};

export default App;