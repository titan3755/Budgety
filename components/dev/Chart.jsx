import { Fragment } from "react"
import { useState } from "react"
import random from "random"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function rangeCreator() {
    let arr = []
    for (let x = 0; x < 20; x++) {
        arr.push(x)
    }
    return arr
}

function randomRangeCreator(range, min, max) {
    let arr = []
    for (let x = 0; x < range; x++) {
        arr.push(random.int(min, max))
    }
    return arr
}
  

export default function DevChart() {
    const [chartDataState, setChartDataState] = useState({
        labels: rangeCreator(),
        datasets: [
            {
                label: 'Waddap',
                data: randomRangeCreator(500, 1, 5000),
                backgroundColor: [
                    `rgb(234, 123, 98)`
                ]
            }
        ]
    })
    return (
        <Fragment>
            <div className="w-[800px] h-[600px]">
                <Line data={chartDataState} />
            </div>
        </Fragment>
    )
}