import React from 'react'
import {Pie,Chart} from 'react-chartjs-2'
function DominanceChart({data}){
    Chart.defaults.color = '#fefefe'
    Chart.defaults.borderColor = '#686868'
    return(
        <div>
            <Pie
            data = {data}
            width={500}
	        height={300}
            options={{ maintainAspectRatio: false }}
            />
        </div>
    )
}

export default DominanceChart;