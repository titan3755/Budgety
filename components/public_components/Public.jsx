import { Fragment } from 'react'

export function SectionInfoCards({title, desc}) {
    return (
        <Fragment>
            <div className="flex flex-col justify-center p-6 gap-2 shadow-xl rounded-lg h-full">
                <h1 className="text-2xl font-ubuntu font-semibold text-slate-500">{title}</h1>
                <p className="text-sm font-alata font-medium text-slate-400">{desc}</p>
            </div>
        </Fragment>
    )
}

export function TransactionExpandedSection({transactions}) {
    if (transactions === "none" || !transactions) {
        return (
            <Fragment>
                <div className="flex flex-col h-full">
                    <div className="w-full text-center rounded-t-xl bg-blue-500 p-4 flex flex-row align-middle justify-center items-center">
                        <h3 className="text-center text-white text-3xl font-bold font-overpass">Budget Transactions</h3>
                    </div>
                    <div className="h-full shadow-xl p-5 flex flex-col align-middle justify-center bg-slate-200 items-center rounded-b-xl">
                        <h3 className="text-center text-3xl font-extrabold font-alata text-slate-500">No Transactions Yet</h3>
                    </div>
                </div>
            </Fragment>
        )
    }
    else {
        return (
            <Fragment>
                <div className="flex flex-col h-full">
                    <div className="w-full text-center rounded-t-xl bg-blue-500 p-4 flex flex-row align-middle justify-center items-center">
                        <h3 className="text-center text-white text-3xl font-bold font-overpass">Budget Transactions</h3>
                    </div>
                    <div className="h-full shadow-xl p-5 flex flex-col align-middle justify-center bg-slate-200 items-center rounded-b-xl">
                        <h3 className="text-center text-3xl font-extrabold font-alata text-slate-500">No Transactions Yet</h3>
                    </div>
                </div>
            </Fragment>
        )
    }
}