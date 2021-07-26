import React,{useEffect,useState,useRef} from 'react'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Container,CssBaseline} from '@material-ui/core/';
import '../../App.css'
import Button from '@material-ui/core/Button';
import TopNavbar from '../Navigation/TopNavbar';
import {Table} from 'react-bootstrap'

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
          setSelldatas(message.data.a)
          setBuydatas(message.data.b)
          // console.log(datas)
      };
  }, [isPaused,selldatas]);
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <TopNavbar title="ETH Order Book"/>
    <Container fixed>
      <div>
          <Button color="secondary" onClick={() => setPause(!isPaused)}>
              {isPaused ? "Resume" : "Pause"}
          </Button>
          <div className="rowC">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Buy</th>
                <th>Buy Quantity</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </Table>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Sell</th>
                <th>Sell Quantity</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </Table>
          </div>
    </div>
      </Container>
    </ThemeProvider>
          
  );
}

export default Order