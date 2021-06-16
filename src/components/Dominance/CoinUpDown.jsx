import axios from 'axios'
import React,{useEffect, useState} from 'react';
import {Pie,Chart} from 'react-chartjs-2'


function CoinUpDown(){
    Chart.defaults.color = '#fefefe'
    Chart.defaults.borderColor = '#686868'
    const [coin, setCoin] = useState([])
    const chart= () =>{
        async function fetchData(){
            let data=[]
            const res = await axios.get("https://dncapi.bqrank.net/api/home/global?webp=1")
            data.push(res['data']['data']['risenum'])
            data.push(res['data']['data']['fallnum'])
            setCoin(data)
        }
        fetchData()
        const interval=setInterval(()=>{
            fetchData();
           },30000)
             
           return()=>clearInterval(interval)
    }
    useEffect(() => {
        chart();
      }, []);

  return (
    <div>
    <Pie
      data = {{
        labels: [
          '上漲數量',
          '下跌數量',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: coin,
          backgroundColor: [
            '#00ff00',
            '#cd0000',
          ],
          hoverOffset: 4
        }]
    }
    }
    width={500}
	  height={300}
    options={{ maintainAspectRatio: false }}
      />

    </div>
  );
}

export default CoinUpDown;