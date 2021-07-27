import React from 'react'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { AdvancedChart } from "react-tradingview-embed";
import { CssBaseline} from "@material-ui/core";
import TopNavbar from '../Navigation/TopNavbar';
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
        <TopNavbar title="TradingView"/>
            <AdvancedChart widgetPropsAny={{"hotlist": true,"calendar": true,"details": true,"style": "1","locale": "zh_TW", "width": "100%","height": "760","symbol": "BINANCE:ETHUSDT","watchlist": [
                "BINANCE:BTCUSDT","BINANCE:ETHUSDT","DJI","BINANCE:MATICUSDT","BINANCE:BCHUSDT","BINANCE:LTCUSDT","BINANCE:AAVEUSDT","BINANCE:UNIUSDT","BINANCE:SOLUSDT","BINANCE:CTSIUSDT","BINANCE:ADAUSDT","BINANCE:XRPUSDT",
                "BINANCE:DOGEUSDT","BINANCE:LINKUSDT","BINANCE:ETCUSDT","BINANCE:EOSUSDT","BINANCE:TRXUSDT","BINANCE:CAKEUSDT","BINANCE:FILUSDT","BINANCE:ENJUSDT","BINANCE:CHZUSDT","BINANCE:PERPUSDT","BINANCE:YFIUSDT","BINANCE:AVAXUSDT",
                "BINANCE:CRVUSDT","BINANCE:KSMUSDT","BINANCE:FTTUSDT","BINANCE:SUSHIUSDT","BINANCE:FLOWUSDT","BINANCE:DOTUSDT","BINANCE:ALICEUSDT","BINANCE:CHRUSDT","BINANCE:LUNAUSDT","BINANCE:RUNEUSDT","BINANCE:BAKEUSDT","BINANCE:VETUSDT","BINANCE:CHZUSDT"
                ,"BINANCE:XLMUSDT","BINANCE:DASHUSDT","OKEX:OKBUSDT"]}} widgetProps={{"interval": "15"}}/>
        </ThemeProvider>
    )

}


export default TradingView