import React ,{useEffect,useState}from 'react'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { CssBaseline} from "@material-ui/core";
import TopNavbar from '../Navigation/TopNavbar';
import { Table, Container } from 'react-bootstrap';
import axios from 'axios'
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

function Liquidation() {
    const [datas,setDatas] = useState([])
    const [to,setTo] = useState([])
    useEffect(() => {
        async function fetchData(){
            const res = await axios.get("https://fapi.bybt.com/api/futures/liquidation/order?side=&exName=&symbol=&pageSize=100&pageNum=1&volUsd=1000")
            setDatas(res.data.data.list)
        }
        async function fetchTotal(){
            const total = await axios.get("https://fapi.bybt.com/api/futures/home/statistics")
            setTo(total.data.data)
        }
        fetchData()
        fetchTotal()
        const interval=setInterval(()=>{
            fetchData();
            fetchTotal();
        },30000)
        return()=>clearInterval(interval)
        }, [to]);
    function change(x){
        x = ""+x
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    function convert(x){
        var date = new Date(x);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
        var day = date.getDate()
        var month = date.getMonth()

        // Will display time in 10:30:23 format
        var formattedTime = month+"/"+day+" " +hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return formattedTime;
    }
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopNavbar title="Liquidation"/>
        <Container>
        <div style={{marginTop: '25px'}}>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>24小時成交量: ${change(to.volUsd)} USD {to.volH24Chain > 0 ?<h5 style={{color:'#00FF00',fontSize: '15px', display: 'inline'}}>{to.volH24Chain}%</h5>: <h5 style={{color:'#FF0000',fontSize: '15px', display: 'inline'}}>{to.volH24Chain}%</h5> }</th>
                        <th>未平倉合約市值: ${change(to.openInterest)} USD {to.oiH24Chain > 0 ?<h5 style={{color:'#00FF00',fontSize: '15px', display: 'inline'}}>{to.oiH24Chain}%</h5>: <h5 style={{color:'#FF0000',fontSize: '15px', display: 'inline'}}>{to.oiH24Chain}%</h5> }</th>
                        <th>24小時爆倉總額: ${change(parseFloat(to.liquidationH24VolUsd).toFixed(2))} USD {to.lqH24Chain > 0 ? <h5 style={{color:'#00FF00',fontSize: '15px', display: 'inline'}}>{to.lqH24Chain}%</h5>: <h5 style={{color:'#FF0000',fontSize: '15px', display: 'inline'}}>{to.lqH24Chain}%</h5> }</th>
                    </tr>
                </thead>
            </Table>
        </div>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>交易所</th>
                <th>時間</th>
                <th>幣種</th>
                <th>爆倉價格</th>
                <th>數量</th>
                <th>爆倉金額</th>
                <th>種類</th>
                </tr>
            </thead>
            <tbody>
                {datas.map((data,index)=>{
                    var i = index+1
                    return(
                    <tr key={data.id}>
                       <td>{i}</td>
                       <td>{data.exchangeName}</td>
                       <td>{convert(data.turnoverTime)}</td>
                       <td>{data.originalSymbol}</td>
                       <td>{data.price} USDT</td>
                       <td>{data.qty} {data.symbol}</td>
                       <td>{data.volUsd} USD</td>
                       <td>{data.side===1 ? <p style={{color:'#00FF00'}}>多單爆倉</p>: <p style={{color:'#FF0000'}}>空單爆倉</p>}</td>
                    </tr>
                    )
                })}
            </tbody>
             </Table>
        </Container>
       
         
        </ThemeProvider>
    )

}


export default Liquidation