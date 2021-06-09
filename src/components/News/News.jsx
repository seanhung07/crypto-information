import React,{useEffect, useState} from 'react'
import axios from 'axios'
import NewsTable from './NewsTable';
function News(){
    const [data,setData] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get('https://www.abmedia.io/wp-json/wp/v2/posts?categories_exclude=3818%2C3819%2C3820%2C3782%2C1&per_page=9');
            setData(request['data'])
        }
        fetchData();
        const interval=setInterval(()=>{
          fetchData();
         },300000)
           
         return()=>clearInterval(interval)
    },[])
    return(
        <NewsTable data={data}/>
    )
}

export default News;
