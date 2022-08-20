import { Fragment, useState } from "react"
import { Progress } from "@mantine/core"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { Doughnut } from "react-chartjs-2"
import {Chart, ArcElement, Legend} from 'chart.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
Chart.register(ArcElement)
Chart.register(Legend)

export default function Balance() {
    const [chartData, setChartData] = useState(
        {
            balanceChart: {
                labels: [
                  'Red',
                  'Blue',
                  'Yellow'
                ],
                datasets: [{
                  label: 'My First Dataset',
                  data: [300, 50, 100],
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                  ],
                  hoverOffset: 4
                }]
            }
        }
    )
    return (
        <Fragment>
            <div className="h-full w-full gap-8 p-10 flex flex-col">
                <div className="flex flex-col md:flex-row gap-8 align-middle">
                    <BalanceCard />
                    <IncomeCard />
                    <ChartCard chartExpenseData={chartData.balanceChart} chartIncomeData={chartData.balanceChart} />
                </div>
                <div className="h-full w-full">
                    <Transactions />
                </div>
            </div>
        </Fragment>
    )
}

function BalanceCard() {
    return (
        <Fragment>
            <div className="flex flex-col p-10 rounded-lg shadow-md w-full md:w-[33%]">
                <div className="flex flex-row gap-2 w-full">
                    <div className="flex flex-row gap-5 w-full">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-slate-400 text-base font-semibold">Total Balance</h1>
                            <div className="flex flex-row gap-8">
                                <h1 className="text-slate-800 text-4xl font-bold font-overpass">&#36; 8753.09</h1>
                                <CircularBadge icon={faChevronUp} />
                            </div>
                        </div>
                        <div className="flex flex-row justify-end items-end">

                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-5 w-full">
                    <h3 className="text-green-500 text-sm">Income more than expense!</h3>
                    <Progress value={30} size="lg" color="green" striped />
                </div>
            </div>
        </Fragment>
    )
}

function CircularBadge({icon}) {
    return (
        <Fragment>
            <div className="p-2 rounded-full bg-green-500 w-[30px] h-[30px] flex flex-row justify-center items-center align-middle">
                <FontAwesomeIcon icon={icon} className="m-0 text-white" />
            </div>
        </Fragment>
    )
}

function IncomeCard() {
    return (
        <Fragment>
            <div className="flex flex-col p-10 rounded-lg shadow-md w-full md:w-[33%] gap-3">
                <div className="flex flex-row justify-start align-middle w-full">
                    <h1 className="text-slate-400 text-base font-semibold">Income</h1>
                </div>
                <div className="flex flex-col-reverse w-full">
                    <div className="flex flex-col w-full gap-3">
                        <h1 className="text-slate-400 text-base font-semibold mt-2">Expense</h1>
                        <h1 className="text-red-500 text-4xl font-bold font-overpass">&#36; 8753.09</h1>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row w-full">
                            <h1 className="text-green-500 text-4xl font-bold font-overpass">&#36; 8753.09</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

function ChartCard({chartIncomeData, chartExpenseData}) {
    const chartOptions = {
        cutout: 65,
        plugins: {
            legend: {
                display: true,
                labels: {
                    usePointStyle: true
                }
            }
        }
    }
    return (
        <Fragment>
            <div className="flex flex-row justify-center items-center align-middle gap-8 p-10 rounded-lg shadow-md w-full md:w-[33%]">
                <div className="w-1/2">
                    <Doughnut data={chartIncomeData} options={chartOptions} />
                </div>
                <div className="w-1/2">
                    <Doughnut data={chartExpenseData} options={chartOptions} />
                </div>
            </div>
        </Fragment>
    )
}

function Transactions() {
    return (
        <Fragment>
            <div className="shadow-inner rounded-lg p-10 bg-gray-100 w-full h-full flex flex-col align-middle justify-center items-center">
                <div className="flex flex-col align-middle justify-center items-center">
                    <h1 className="text-slate-600 text-center text-3xl font-extralight font-alata">No recent transactions</h1>
                </div>
            </div>
        </Fragment>
    )
}

function TransactionPart() {
    return (
        <Fragment>
            <div className="">

            </div>
        </Fragment>
    )
}