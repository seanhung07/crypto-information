import React,{useEffect} from 'react'
import axios from 'axios'
function Whale(){

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get('https://api.whale-alert.io/feed.csv?api_key=YDV2AMXZoLApRCNHvlQjKzF6I0h2SEzL');
            // console.log(request)
        }
        fetchData()
    
    },[])
    return(
        <div></div>
    )


}

export default Whale