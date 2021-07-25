import axios from 'axios'
import React,{useEffect} from 'react';
import {Pie,Chart} from 'react-chartjs-2'
import {ThemeProvider, createMuiTheme,makeStyles} from '@material-ui/core/styles'
import {Container, CssBaseline,Typography,Box} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../../src/assets/logo.png'
import { Link } from 'react-router-dom';


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
function Data(){
    const classes = useStyles();
    Chart.defaults.color = '#fefefe'
    Chart.defaults.borderColor = '#686868'
    const [data,setData] = React.useState([])
    const [ethdata,setEthdata] = React.useState([])
    const chart= () =>{
        async function fetchData(){
            let market = []
            const res = await axios.get("https://fapi.bybt.com/api/futures/longShortRate?timeType=10&symbol=BTC")
            market.push(res.data.data[0].longRate);
            market.push(res.data.data[0].shortRate);
            setData(market)
        }
        async function fetchData2(){
          let market2 = []
          const res = await axios.get("https://fapi.bybt.com/api/futures/longShortRate?timeType=10&symbol=ETH")
          market2.push(res.data.data[0].longRate);
          market2.push(res.data.data[0].shortRate);
          setEthdata(market2)
      }
        fetchData()
        fetchData2()
        const interval=setInterval(()=>{
            fetchData();
            fetchData2()
        },10000)
        return()=>clearInterval(interval)
    }
    useEffect(() => {
        chart();
        }, []);

  return (
    <div>
         <ThemeProvider theme={theme}>
      <CssBaseline />
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
          <Box display='flex'>
            <Button component={Link} to="/order">Order Book</Button>
            <Button component={Link} to="/draw">TradingView</Button>
            <Button component={Link} to="/data">Long/Short</Button>
        </Box>
        </Toolbar>
      </AppBar>
      <h1 style={{textAlign: 'center'}}>BTC</h1>
      <Container fixed>
      <Pie
        data = {{
          labels: [
            '空方(%)',
            '多方(%)'
          ],
          datasets: [{
            data: data,
            backgroundColor: [
              '#cd0000',
              '#00ff00'
            ],
            hoverOffset: 4
          }]
      }
      }
        width={500}
        height={300}
        options={{ maintainAspectRatio: false }}
      />
      </Container>
      <h1 style={{textAlign: 'center'}}>ETH</h1>
      <Container fixed>
      <Pie
        data = {{
          labels: [
            '空方(%)',
            '多方(%)'
          ],
          datasets: [{
            data: ethdata,
            backgroundColor: [
              '#cd0000',
              '#00ff00'
            ],
            hoverOffset: 4
          }]
      }
      }
        width={500}
        height={300}
        options={{ maintainAspectRatio: false }}
      />
      </Container>
    </ThemeProvider>

    </div>
  );
}

export default Data;