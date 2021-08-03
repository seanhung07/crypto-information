import axios from 'axios'
import React,{useEffect,useState} from 'react';
import {Pie,Chart} from 'react-chartjs-2'


function Market(){
    Chart.defaults.color = '#fefefe'
    Chart.defaults.borderColor = '#686868'
    const [data,setData] = useState([])
    const chart = () =>{
        async function fetchData(){
            let market = []
            const res = await axios.get("https://dncapi.bqrank.net/api/v2/news/action_stat?webp=1")
            for(let i=0;i<3;i++){
              market.push(res['data']['data']['items'][i]['ratio'])
            }
            setData(market)
        }
        fetchData()
        const interval=setInterval(()=>{
            fetchData();
        },50000)
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
            '看漲',
            '空手',
            '看跌'
          ],
          datasets: [{
            data: data,
            backgroundColor: [
              '#00ff00',
              '#696969',
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

export default Market;