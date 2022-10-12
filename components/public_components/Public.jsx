import { Fragment, useState } from "react"
import { Input, Button } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDollarSign, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { showNotification } from "@mantine/notifications"
import axios from "axios"

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

export function TransactionAdd({ color, type }) {
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        value: 0
    })
    const submitHandler = async (e) => {
        e.preventDefault()
        let submission = await (await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/budget/transaction`, {type: type, title: formData.title, desc: formData.desc, value: formData.value})).data
        if (submission.message === 'success') {
            showNotification({
                title: 'Transaction executed successfully',
                message: `The ${type} transaction has been executed successfully and your total balance has been modified`,
                color: 'green',
                autoClose: 4500
            })
        }
        else {
            showNotification({
                title: 'Transaction error',
                message: `An error was encountered while processing your transaction`,
                color: 'red',
                autoClose: 4500
            })
        }
        setFormData({
            title: '',
            desc: '',
            value: 0
        })
    }
    return (
        <Fragment>
            <div className="flex flex-col">
                <div className={`w-full text-center rounded-t-xl bg-${color.trim()}-500 p-4 flex flex-row align-middle justify-center items-center`}>
                    <h3 className="text-center text-white text-3xl font-bold font-overpass">{`${type.charAt(0).toUpperCase() + type.slice(1)} section`}</h3>
                </div>
                <form onSubmit={submitHandler}>
                <div className="flex flex-col shadow-xl rounded-b-xl p-6 gap-4 border-gray-300">
                        <Input.Wrapper
                        id={`transaction-${type.trim()}-title`}
                        label="Transaction Information"
                        description={`Please provide the title and description for the ${type} transaction you're making`}
                    >
                        <Input value={formData.title} type="text" onChange={(e) => {setFormData(prev => { return {...prev, title: e.target.value}})}} id={`transaction-${type.trim()}-title`} placeholder="Title" />
                        <Input value={formData.desc} type="text" onChange={(e) => {setFormData(prev => { return {...prev, desc: e.target.value}})}} id={`transaction-${type.trim()}-desc`} placeholder="Description" />
                    </Input.Wrapper>
                    <Input.Wrapper
                        id={`transaction-${type.trim()}-value`}
                        label={`${type.charAt(0).toUpperCase() + type.slice(1)} Value`}
                        description={`Please provide the value of the ${type.trim()} transaction`}
                    >
                    <Input value={formData.value} type="number" onChange={(e) => {setFormData(prev => { return {...prev, value: e.target.value}})}} id={`transaction-${type.trim()}-value`} placeholder="Transaction value" />
                    </Input.Wrapper>
                    <div className="flex flex-row align-middle gap-2">
                        <FontAwesomeIcon icon={faInfoCircle} color="blue" size="xl" />
                        <h4 className="font-medium text-base text-slate-400">Your budget data is secure with us</h4>
                    </div>
                    <div className="flex flex-row justify-center align-middle items-center">
                        <Button type="submit" leftIcon={<FontAwesomeIcon icon={faDollarSign} />} variant="outline" fullWidth size="lg">
                            Add Transaction
                        </Button>
                    </div>
                </div>
                </form>
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

export function TransactionIndividual({type, data}) {
    if (type === 'income') {
        return (
            <Fragment>
                <div className="flex flex-row align-middle border-2 border-green-500 w-full p-4 rounded-none gap-4 shadow-md my-2">
                    <FontAwesomeIcon icon={faDollarSign} size="3x" className="text-green-600 mx-3" />
                    <div className="flex flex-row w-full gap-5 mx-2">
                        <h3>Income Added</h3>
                        <h3>{data.income}</h3>
                        <h3>New Balance: {data.income - data.expense}</h3>
                    </div>
                </div>
            </Fragment>
        )
    }
    else {
        return (
            <Fragment>
                <div className="flex flex-row align-middle border-2 border-red-500 w-full p-4 rounded-none">
                    
                </div>
            </Fragment>
        )
    }
}