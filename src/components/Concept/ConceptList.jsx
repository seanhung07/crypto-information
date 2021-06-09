import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BasicTable from '../Concept/BasicTable'
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
         <BasicTable data = {concepts} columns = {columns}/>
    )
}

export default ConceptList;