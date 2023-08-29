import React from "react";
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const value = props.dataPoints.map(x => x.value);
    const totalMax = Math.max(...value)

    return <div className="chart">
        {props.dataPoints.map(datapoint =>
            <ChartBar
                key={datapoint.id}
                value={datapoint.value}
                maxValue={totalMax}
                label={datapoint.label}/>)}
    </div>




}

export default Chart