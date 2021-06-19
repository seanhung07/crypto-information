import React,{useState,useEffect} from 'react'
import axios from 'axios'
import DominanceChart from '../Dominance/DominanceChart'
function Dominance(){
    const [chartData, setChartData] = useState({});
    const chart= () =>{
        async function fetchData(){
            let coins = []
            let percent = []
            let color = []
            const res = await axios.get("https://dncapi.bqrank.net/api/coin/coin_accounting?webp=1")
            var i;
             color =['#FF6F61','#34568B','#6B5B95','#88B04B','#F7CAC9','#92A8D1','#B565A7','#955251','#009B77','#BC243C']   
            for(i = 0 ; i<10 ; i++){
                coins.push(res['data']['data'][i].symbol)
                percent.push(res['data']['data'][i].percentage)
            }
            setChartData({
                labels: coins,
                datasets: [{
                    data: percent,
                    backgroundColor: color,
                    borderColor: '#fefefe'
                }
                ],
            })
        }
        fetchData();
        const interval=setInterval(()=>{
            fetchData();
         },300000)
           
        return()=>clearInterval(interval)
    }
    useEffect(() => {
        chart();
      }, []);
    return(
    <div>
        <div style={{ marginTop: 30 , marginBottom:20, fontSize: 50}}>
            <DominanceChart data = {chartData}/>
        </div>
    </div>
    )
}

export default Dominance;