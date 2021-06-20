import React,{useEffect, useState} from 'react'
import axios from 'axios'
import NewsTable from './NewsTable';
import { Typography,Box } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
function News(){
    const [data,setData] = useState([])
    const news = ()=>{
        async function fetchData(){
            const request = await axios.get('https://www.abmedia.io/wp-json/wp/v2/posts?categories_exclude=3818%2C3819%2C3820%2C3782%2C1&per_page=9');
            setData(request['data'])
        }
        fetchData();
        const interval=setInterval(()=>{
          fetchData();
         },300000)
           
         return()=>clearInterval(interval)
    }
    useEffect(()=>{
        news()
    },[])
    return(
        <div>
            <ThemeProvider theme={theme}>
            <Typography variant="h4" style={{ marginTop: 20 , marginBottom:10}} >
            <   Box fontWeight="fontWeightBold">今日新聞</Box>
            </Typography>
            <Typography variant="subtitle2" style={{ marginTop: 20 , marginBottom:10}}>
                <Box color="#c1b9bc">此表列出從鏈新聞取出的新聞</Box>
            </Typography>
            </ThemeProvider>
            <NewsTable data={data}/>
        </div>
    )
}

export default News;
