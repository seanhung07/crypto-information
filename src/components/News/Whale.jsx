import React,{useEffect} from 'react'
import axios from 'axios'
function Whale(){

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get('https://api.whale-alert.io/feed.csv');
            console.log(request)
        }
        fetchData()
    
    },[])
    return(
        <div>Hello</div>
    )


}

export default Whale