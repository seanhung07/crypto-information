import React from 'react'
import {ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { AdvancedChart } from "react-tradingview-embed";
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
      flexGrow: 2,
      // textAlign: 'center',
    },
    
  }));
  

function TradingView() {
    const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="flex" style={{background: 'linear-gradient(45deg, rgba(117,61,111,1) 1%, rgba(62,62,69,1) 69%)'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  component={Link} to="/">
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
        </Box>
        </Toolbar>
      </AppBar>
            <AdvancedChart widgetPropsAny={{"hotlist": true,"calendar": true,"details": true,"style": "1","interval": "15","locale": "zh_TW", "width": "100%","height": "830","symbol": "BINANCE:ETHUSDT","watchlist": [
                "BINANCE:BTCUSDT","BINANCE:ETHUSDT","DJI","BINANCE:MATICUSDT","BINANCE:BCHUSDT","BINANCE:LTCUSDT","BINANCE:AAVEUSDT","BINANCE:UNIUSDT","BINANCE:SOLUSDT","BINANCE:CTSIUSDT","BINANCE:ADAUSDT","BINANCE:XRPUSDT",
                "BINANCE:DOGEUSDT","BINANCE:LINKUSDT","BINANCE:ETCUSDT","BINANCE:EOSUSDT","BINANCE:TRXUSDT","BINANCE:CAKEUSDT","BINANCE:FILUSDT","BINANCE:ENJUSDT","BINANCE:CHZUSDT","BINANCE:PERPUSDT","BINANCE:YFIUSDT","BINANCE:AVAXUSDT",
                "BINANCE:CRVUSDT","BINANCE:KSMUSDT","BINANCE:FTTUSDT","BINANCE:SUSHIUSDT","BINANCE:FLOWUSDT","BINANCE:DOTUSDT","BINANCE:ALICEUSDT","BINANCE:CHRUSDT","BINANCE:LUNAUSDT","BINANCE:RUNEUSDT","BINANCE:BAKEUSDT","BINANCE:VETUSDT","BINANCE:CHZUSDT"
                ,"BINANCE:XLMUSDT","BINANCE:DASHUSDT"]}} />
        </ThemeProvider>
    )

}


export default TradingView