import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BasicTable from '../Concept/BasicTable'
import {Box, Typography} from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
function ConceptList(){
    const [concepts,setConcepts] = useState([]);
    const columns = [
        { 
          id: 'rank', 
          label: 'Rank' 
        },
        {
           id: 'name',
         label: '板塊' 
        },
        { 
          id: 'change_percent', 
          label: '漲跌幅'},
        {
          id: 'total_coin',
          label: '幣種',
        },
        {
          id: 'best',
          label: '最好幣種',
        },
        {
          id:'best_percent',
          label: '領漲'
        }
      ];
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get('https://dncapi.bqrank.net/api/concept/web-conceptlist?page=1&webp=1');
                setConcepts(request['data']['data']);
        }
        fetchData();
        const interval=setInterval(()=>{
          fetchData();
         },50000)
           
         return()=>clearInterval(interval)
    },[])

  
    return(
      <div>
        <ThemeProvider theme={theme}>
        <Typography variant="h4" style={{ marginTop: 20 , marginBottom:10}} >
          <Box fontWeight="fontWeightBold">板塊分佈</Box>
        </Typography>
        <Typography variant="h7" style={{ marginTop: 20 , marginBottom:10}}>
          <Box color="#c1b9bc">幣圈由許多不同領域所組成，此表排列出了全部領域以及更深入的訊息</Box>
        </Typography>
        </ThemeProvider>
         <BasicTable data = {concepts} columns = {columns}/>
      </div>
    )
}

export default ConceptList;