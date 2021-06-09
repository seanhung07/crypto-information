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
    fontSize: 16,
    paddingTop: 18,
  },
  body: {
    fontSize: 30,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function Market(){
    const classes = useStyles();
    const [up, setUp] = React.useState(0);
    const [down, setDown] = React.useState(0);
    const [no, setNo] = React.useState(0);
    const chart= () =>{
        async function fetchData(){
            const res = await axios.get("https://dncapi.bqrank.net/api/v2/news/action_stat?webp=1")
            setUp(res['data']['data']['items'][0]['ratio'])
            setNo(res['data']['data']['items'][1]['ratio'])
            setDown(res['data']['data']['items'][2]['ratio'])
        }
        fetchData()
    }
    useEffect(() => {
        chart();
        }, []);

  return (
    <TableContainer component={Paper} style={{marginBottom:10}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
            <StyledTableCell>市場情況</StyledTableCell>
            <StyledTableCell align="right" style={{color: "limegreen"}}>看漲： {up}% </StyledTableCell>
            <StyledTableCell align="right" style={{color: "#A9A9A9"}}>空手： {no}%</StyledTableCell>
            <StyledTableCell align="right" style={{color: "#ff1a1a"}}>看跌： {down}%</StyledTableCell>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default Market;