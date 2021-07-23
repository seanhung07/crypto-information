import React from 'react'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { CssBaseline} from "@material-ui/core";
import ReactApexChart from 'react-apexcharts'
import axios from 'axios'
const theme = createMuiTheme({
    palette: {
      type: "dark"
    },
    typography:{
      fontFamily:`'Baloo Tammudu 2', 'cursive';`,
      fontSize: 15
    }
  });
function Defi(){
  async function fetchData(){
    const res = await axios.get("https://fapi.bybt.com/api/futures/longShortChart?symbol=BTC&timeType=3")
    console.log(res)
}
fetchData()
  const series = [{
    name: 'Marine Sprite',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  }]
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: '100% Stacked Bar'
    },
    xaxis: {
      categories: [2008, 2009],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
        }
      },
      theme: 'dark'
    },
    fill: {
      opacity: 1
    
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    },
    chart: {
      foreColor: '#fff'
  }  
  }
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ReactApexChart options={options} series={series} type="bar" height={350} />
    
        </ThemeProvider>
    )
}

export default Defi