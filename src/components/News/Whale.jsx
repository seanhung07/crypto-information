import axios from 'axios'
function Whale(){
    async function fetchData(){
        const res = await axios.get("https://fapi.bybt.com/api/futures/longShortChart?symbol=BTC&timeType=3")
        console.log(res)
    }
    fetchData()
    return(
        <div></div>
    )


}

export default Whale