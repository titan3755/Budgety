import { Fragment, useState } from "react"
import { Progress } from "@mantine/core"
import { faChevronUp, faChevronDown, faBan, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Doughnut } from "react-chartjs-2"
import {Chart, ArcElement, Legend} from 'chart.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ActionIcon } from "@mantine/core"
Chart.register(ArcElement)
Chart.register(Legend)

export default function Balance({data}) {
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
                    <BalanceCard data={data} />
                    <IncomeCard data={data} />
                    <ChartCard data={data} chartExpenseData={chartData.balanceChart} chartIncomeData={chartData.balanceChart} />
                </div>
                <div className="h-full w-full">
                    <Transactions />
                </div>
            </div>
        </Fragment>
    )
}

function BalanceCard({data}) {
    return (
        <Fragment>
            <div className="flex flex-col gap-4 p-10 rounded-lg shadow-md w-full md:w-[33%]">
                <div className="flex flex-row gap-2 w-full">
                    <div className="flex flex-row gap-5 w-full">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-slate-400 text-base font-semibold">Total Balance</h1>
                            <div className="flex flex-row gap-8">
                                <h1 className="text-slate-800 text-4xl font-bold font-overpass">&#36; {data.response ? Number(data.response.income) - Number(data.response.expense) : 0}</h1>
                                {
                                    data.response ? (
                                        (Number(data.response.income) > Number(data.response.expense) 
                                            ?
                                            <CircularBadge icon={faChevronUp} color="bg-green-500" />
                                            :   
                                        (Number(data.response.income) < Number(data.response.expense) 
                                            ?
                                            <CircularBadge icon={faChevronDown} color="bg-red-500" />
                                            :
                                            <CircularBadge icon={faBan} color="bg-gray-400" />
                                    ))) : <CircularBadge icon={faBan} color="bg-gray-400" />
                                }
                            </div>
                        </div>
                        <div className="ml-5 flex flex-row justify-end items-end align-middle">
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-5 w-full">
                    <h3 className={`text-${data.response ? (Number(data.response.income) > Number(data.response.expense) ? `green-500` : (Number(data.response.income) < Number(data.response.expense) ? `red-500` : `gray-500` )) : `gray-500`} text-sm`}>{data.response ? Number(data.response.income) > Number(data.response.expense) ? "Income greater than expense!" : Number(data.response.income) < Number(data.response.expense) ? "Expense is greater than income!" : Number(data.response.expense) === 0 && Number(data.response.income) === 0 ? "No income or expenses!" : Number(data.response.income) === Number(data.response.expense) && Number(data.response.expense) !== 0 && Number(data.response.income) !== 0 ? "Income is same as expense!" : "Income / Expense value doesn't meet criteria" : "No income or expenses!"}</h3>
                    <Progress value={data.response ? (Number(data.response.income) / Number(data.response.expense)) * 100 : 0} size="lg" color={`${Number(data.response.income) - Number(data.response.expense) > 0 ? "green" : Number(data.response.income) - Number(data.response.expense) === 0 ? "gray" : "red"}`} striped />
                </div>
            </div>
        </Fragment>
    )
}

function CircularBadge({icon, color}) {
    return (
        <Fragment>
            <div className={`p-2 rounded-full ${color} w-[30px] h-[30px] flex flex-row justify-center items-center align-middle`}>
                <FontAwesomeIcon icon={icon} className="m-0 text-white" />
            </div>
        </Fragment>
    )
}

function IncomeCard({data}) {
    return (
        <Fragment>
            <div className="flex flex-col p-10 rounded-lg shadow-md w-full md:w-[33%] gap-3">
                <div className="flex flex-col-reverse w-full">
                    <div className="flex flex-row w-full">
                        <div className="flex w-1/2 flex-col gap-3">
                            <h1 className="text-slate-400 text-base font-semibold mt-2">Expense</h1>
                            <h1 className="text-red-500 text-4xl font-bold font-overpass">&#36; {data.response ? data.response.expense : 0}</h1>
                        </div>
                        <div className="flex flex-row w-1/2 justify-end items-end align-middle">
                            <ActionIcon className="p-5" variant="light" color="red" radius="xl" ><FontAwesomeIcon icon={faChevronDown} color="red" size="lg" /></ActionIcon>
                        </div>
                    </div>
                    <div className="flex flex-row align-middle items-center w-full">
                        <div className="flex w-1/2 flex-col gap-3">
                            <h1 className="text-slate-400 text-base font-semibold mt-2">Income</h1>
                            <h1 className="text-green-500 text-4xl font-bold font-overpass">&#36; {data.response ? data.response.income : 0}</h1>
                        </div>
                        <div className="flex flex-row w-1/2 justify-end items-end align-middle">
                            <ActionIcon className="p-5" variant="light" color="red" radius="xl" ><FontAwesomeIcon icon={faChevronUp} color="green" size="lg" /></ActionIcon>
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

export function TransactionPart() {
    return (
        <Fragment>
            <div className="">

            </div>
        </Fragment>
    )
}