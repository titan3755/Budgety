import { Fragment } from "react"
import { Input, Button } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDollarSign, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { SectionInfoCards, TransactionExpandedSection, TransactionAdd } from "../../public_components/Public"

export default function Expense({ data }) {
    return (
        <Fragment>
            <div className="flex flex-row gap-3 h-full p-5">
                <div className="flex flex-col gap-3 h-full w-1/2">
                    <TransactionAdd key="expense-transaction" color="red" type="expense" />
                    <SectionInfoCards title="Balance" desc="Your current balance is shown below" balanceData={Number(data.response.income) - Number(data.response.expense)} />
                </div>
                <div className="flex flex-col gap-3 h-full w-1/2">
                    <TransactionExpandedSection key={1} transactions="none" />
                </div>
            </div>
        </Fragment>
    )
}
