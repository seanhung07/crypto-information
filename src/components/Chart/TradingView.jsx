import React from 'react'
import {ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { AdvancedChart } from "react-tradingview-embed";
import {CssBaseline} from '@material-ui/core/';
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

function TradingView() {
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <AdvancedChart widgetPropsAny={{"style": "1", "height": 830 , "symbol": "BINANCE:ETHUSDT","watchlist": [
    "BINANCE:BTCUSDT","BINANCE:ETHUSDT","BINANCE:MATICUSDT","BINANCE:BCHUSDT","BINANCE:LTCUSDT","BINANCE:AAVEUSDT","BINANCE:UNIUSDT","BINANCE:SOLUSDT","BINANCE:CTSIUSDT","BINANCE:ADAUSDT","BINANCE:XRPUSDT",
    "BINANCE:DOGEUSDT","BINANCE:LINKUSDT","BINANCE:ETCUSDT","BINANCE:EOSUSDT","BINANCE:TRXUSDT","BINANCE:CAKEUSDT","BINANCE:FILUSDT","BINANCE:ENJUSDT","BINANCE:CHZUSDT","BINANCE:PERPUSDT","BINANCE:YFIUSDT","BINANCE:AVAXUSDT",
    "BINANCE:CRVUSDT","BINANCE:KSMUSDT","BINANCE:FTTUSDT","BINANCE:SUSHIUSDT","BINANCE:FLOWUSDT","BINANCE:DOTUSDT","BINANCE:ALICEUSDT","BINANCE:CHRUSDT","BINANCE:LUNAUSDT","BINANCE:RUNEUSDT","BINANCE:BAKEUSDT","BINANCE:VETUSDT","BINANCE:CHZUSDT"
    ,"BINANCE:XLMUSDT","BINANCE:DASHUSDT"]}} />
        </ThemeProvider>
    )

}


export default TradingView