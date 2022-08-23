import { Fragment } from "react"
import { useState } from "react"
import { rangeCreator, randomRangeCreator } from "../../helpers/functions"
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