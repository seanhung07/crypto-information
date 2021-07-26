import axios from 'axios'
import React,{useEffect} from 'react';
import {Pie,Chart} from 'react-chartjs-2'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {Container, CssBaseline} from "@material-ui/core";
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
function Data(){
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
      <TopNavbar/>
      <h1 style={{textAlign: 'center',marginTop: '20px'}}>BTC</h1>
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
      <h1 style={{textAlign: 'center',marginTop: '20px'}}>ETH</h1>
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