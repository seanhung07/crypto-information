import React,{useEffect,useState,useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../../App.css'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Tradingview(){
  const classes = useStyles();
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);
  const [selldatas,setSelldatas ] = useState([])
  const [buydatas,setBuydatas ] = useState([])
  useEffect(() => {
      ws.current = new WebSocket("wss://stream.binance.com/stream?streams=ethusdt@depth");
      ws.current.onopen = () => console.log("ws opened");
      ws.current.onclose = () => console.log("ws closed");

      return () => {
          ws.current.close();
      };
  }, []);

  useEffect(() => {
      if (!ws.current) return;

      ws.current.onmessage = e => {
          if (isPaused) return;
          const message = JSON.parse(e.data);
          console.log("a",message.data.a);
          console.log("b",message.data.b);
          setSelldatas(message.data.a)
          setBuydatas(message.data.b)
          // console.log(datas)
      };
  }, [isPaused,selldatas]);
  return (
    <Container fixed>
      <div className={classes.root}>
          <Button color="secondary" onClick={() => setPause(!isPaused)}>
              {isPaused ? "Resume" : "Pause"}
          </Button>
          <div className='rowC'> 
          <table>
            <tr>
              <th>Sell</th>
              <th>Quantity</th>
            </tr>
            {selldatas.map(
            data =>{
              return(
               <tr>
                <td className={data[1] > 100 ? 'r' : 'b' }> {Number.parseFloat(data[0]).toFixed(2)} </td>
                <td className={data[1] > 100 ? 'r' : 'b' }> {Number.parseFloat(data[1]).toFixed(2)} </td>
              </tr>
              )
            }
          )}
          </table>
          <table>
            <tr>
              <th>Buy</th>
              <th>Quantity</th>
            </tr>
            {buydatas.map(
            data =>{
              return(
               <tr>
                <td className={data[1] > 100 ? 'r' : 'b' }> {Number.parseFloat(data[0]).toFixed(2)} </td>
                <td className={data[1] > 100 ? 'r' : 'b' }> {Number.parseFloat(data[1]).toFixed(2)} </td>
              </tr>
              )
            }
          )}
          </table>
      </div>
    </div>
    </Container>
          
  );
}

export default Tradingview