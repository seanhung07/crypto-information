import './App.css';
import ConceptList from './components/Concept/ConceptList'
import Dominance from './components/Dominance/Dominance'
import News from './components/News/News'
import Grid from '@material-ui/core/Grid' 
import {ThemeProvider, createMuiTheme,makeStyles} from '@material-ui/core/styles'
import {Box, Container, CssBaseline,Paper,Typography} from "@material-ui/core";
import React from 'react'
import FearGreed from './components/Dominance/FearGreed';
import Whale from './components/News/Whale';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../src/assets/logo.png'
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" style={{background: '#1E1E2D'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <div className="head">
              <img src={logo} alt="logo"  width="40" height="40"/>
            </div>
          </IconButton>
          <Typography variant="h4" className={classes.title}  style={{ marginTop: 20 , marginBottom:10}}>
            Crypto Information
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 30 , marginBottom:10}}></div>
      {/* <Container >
      <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={3}>
        <Grid item xs={6}>
          <ConceptList /> 
        </Grid>
        <Grid item xs={6}>
          <News />
        </Grid>
      </Grid>
      <Grid container direction="row"   justify="flex-start"
        alignItems="stretch" spacing={3}>
        <Grid item xs={6}>
          <Dominance />
        </Grid>
      </Grid>
      </Container> */}
       
      {/* <Box display="flex" flexDirection="row" p={{xs: 2, sm: 3, md: 5} } >
        <Box p={1} width="50%">
          <ConceptList /> 
          <Box p={1} pt={3}>
            <Dominance />
          </Box>
        </Box>
        <Box p={1} >
          <News />
        </Box>
      </Box> */}
      <Container >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <ConceptList /> 
            <Dominance />
          </Grid>
          <Grid item xs={12} sm={6}>
            <News />
            <div style={{ marginTop: 30 , marginBottom:10}}></div>
            <FearGreed/>
            <Whale/>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    
  );
  
};

export default App;