import axios from 'axios'
import React,{useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function CoinUpDown(){
  const classes = useStyles();
    const [up, setUp] = React.useState(0);
    const [down, setDown] = React.useState(0);
    const chart= () =>{
        async function fetchData(){
            const res = await axios.get("https://dncapi.bqrank.net/api/home/global?webp=1")
            setUp(res['data']['data']['risenum'])
            setDown(res['data']['data']['fallnum'])
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
    <TableContainer component={Paper} style={{marginBottom:10}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
            <StyledTableCell>24H幣種漲跌分佈</StyledTableCell>
            <StyledTableCell align="right" style={{color: "limegreen"}}>上漲數量： {up} </StyledTableCell>
            <StyledTableCell align="right" style={{color: "#ff1a1a"}}>下跌數量： {down}</StyledTableCell>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default CoinUpDown;