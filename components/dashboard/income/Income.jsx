import { Fragment } from "react"

export default function Income() {
    return (
        <Fragment>
            <div className="flex flex-row gap-3 align-middle justify-center items-center h-full p-5">
                <div className="flex flex-col gap-3 h-full">
                    <IncomeAdd />
                    <IncomeGraphs />
                </div>
                <div className="flex flex-col align-middle justify-center items-center h-full">
                    <IncomeTransactions />
                </div>
            </div>
        </Fragment>
    )
}

function IncomeAdd() {
    return (
        <Fragment>
            <div className="">

            </div>
        </Fragment>
    )
}

function IncomeTransactions() {
    return (
        <Fragment>
            <div className="h-full">

            </div>
        </Fragment>
    )
}

function IncomeGraphs() {
    return (
        <Fragment>
            <div className="">
                
            </div>
        </Fragment>
    )
}