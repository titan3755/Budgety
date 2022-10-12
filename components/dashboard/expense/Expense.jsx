import { Fragment } from "react"
import { Input, Button } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDollarSign, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { SectionInfoCards, TransactionExpandedSection, TransactionAdd } from "../../public_components/Public"

export default function Expense() {
    return (
        <Fragment>
            <div className="flex flex-row gap-3 h-full p-5">
                <div className="flex flex-col gap-3 h-full w-1/2">
                    <TransactionAdd key="expense-transaction" color="red" type="expense" />
                    <SectionInfoCards title="Expense Transactions" desc="In this page, you can add expense transactions. The transaction value will be used to calculate the final balance by subtracting the expenses from the income value. The transaction title is mandatory but the description is not." />
                </div>
                <div className="flex flex-col gap-3 h-full w-1/2">
                    <TransactionExpandedSection key={1} transactions="none" />
                </div>
            </div>
        </Fragment>
    )
}
