import axios from 'axios'
function Whale(){
    async function fetchData(){
        const res = await axios.get("https://defi-tracker.dappradar.com/api/defi/all?sgroup=max&limit=50&category=all&sort=tvlInUsd&order=desc")
        console.log(res['data']['dapps'])
    }
    fetchData()
    return(
        <div></div>
    )


}

export default Whale