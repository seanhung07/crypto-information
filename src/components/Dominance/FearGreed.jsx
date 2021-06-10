import React,{useEffect,useState} from 'react'
import {Line} from 'react-chartjs-2'
import {Card,Typography} from "@material-ui/core";
import axios from 'axios'

function FearGreed(){
    const [fddata,setFddata] = useState([])
    const [date,setDate] = useState([])
    const chart= () =>{
        let fd = []
        let dat=[]
        async function fetchData(){
            const res = await axios.get("https://api.alternative.me/fng/?limit=30")
            for(var i=0;i<30;i++){
                fd.push(res['data']['data'][i]['value'])
                var s = new Date(res['data']['data'][i]['timestamp']*1000).toLocaleDateString("en-US")
                dat.push(s);
            }
            setFddata(fd.reverse())
            setDate(dat.reverse())
        }
        fetchData();
        }
    useEffect(() => {
        chart();
      }, []);
    return(
        <div>
            <Card>
                <Typography align="center" style={{ marginTop: 5 , paddingBottom: 5, fontSize: 16}}>Extrem Fear: 0-25 |   Fear: 26-50 | Greed: 51-75 | Extrem Fear: 76-100</Typography>
            </Card>
            <Line 
                data ={{
                    labels: date,
                    datasets: [{
                        label: 'Bitcoin Fear & Greed Index: ',
                        data: fddata,
                        borderColor: '#fefefe'
                    }
                    ],
                }}

            />
        </div>
    )

}

export default FearGreed