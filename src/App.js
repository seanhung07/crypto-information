import './App.css';
import ConceptList from './components/Concept/ConceptList'
import Dominance from './components/Dominance/Dominance'
import CoinUpDown from './components/Dominance/CoinUpDown'
import News from './components/News/News'
import Grid from '@material-ui/core/Grid' 
import {ThemeProvider, createMuiTheme,makeStyles} from '@material-ui/core/styles'
import {Box, Container, CssBaseline,Paper,Typography} from "@material-ui/core";
import React from 'react'
import Divider from '@material-ui/core/Divider';
import FearGreed from './components/Dominance/FearGreed';
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
}));

function App(){
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography align="center" style={{ marginTop: 20 , marginBottom:10, fontSize: 50}}>Crypto Information</Typography>
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
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    
  );
  
};

export default App;