import React,{useEffect,useState,useRef} from 'react'
import {ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {Container,CssBaseline} from '@material-ui/core/';
import '../../App.css'
import Button from '@material-ui/core/Button';

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

function Order(){
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
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container fixed>
      <div>
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
    </ThemeProvider>
          
  );
}

export default Order