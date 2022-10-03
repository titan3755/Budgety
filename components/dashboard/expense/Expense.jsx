import { Fragment } from "react"
import { Input, Button } from "@mantine/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDollarSign, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { SectionInfoCards, TransactionExpandedSection } from "../../public_components/Public"

export default function Income() {
    return (
        <Fragment>
            <div className="flex flex-row gap-3 h-full p-5">
                <div className="flex flex-col gap-3 h-full w-1/2">
                    <IncomeAdd />
                    <SectionInfoCards title="Expense Transactions" desc="In this page, you can add expense transactions. The transaction value will be used to calculate the final balance by subtracting the expenses from the income value. The transaction title is mandatory but the description is not." />
                </div>
                <div className="flex flex-col gap-3 h-full w-1/2">
                    <TransactionExpandedSection key={1} transactions="none" />
                </div>
            </div>
        </Fragment>
    )
}

function IncomeAdd() {
    return (
        <Fragment>
            <div className="flex flex-col">
                <div className="w-full text-center rounded-t-xl bg-red-500 p-4 flex flex-row align-middle justify-center items-center">
                    <h3 className="text-center text-white text-3xl font-bold font-overpass">Expense Section</h3>
                </div>
                <div className="flex flex-col shadow-xl rounded-b-xl p-6 gap-4 border-gray-300">
                <Input.Wrapper
                    id="transaction-expense-title"
                    withAsterisk
                    label="Transaction Information"
                    description="Please provide the title and description for the expense transaction you're making"
                >
                    <Input id="transaction-expense-title" placeholder="Title" />
                    <Input id="transaction-expense-desc" placeholder="Description" />
                </Input.Wrapper>
                <Input.Wrapper
                    id="transaction-expense-value"
                    withAsterisk
                    label="Expense Value"
                    description="Please provide the value of the expense transaction"
                >
                <Input id="transaction-expense-value" placeholder="Your email" />
                </Input.Wrapper>
                <div className="flex flex-row align-middle gap-2">
                    <FontAwesomeIcon icon={faInfoCircle} color="blue" size="xl" />
                    <h4 className="font-medium text-base text-slate-400">Your budget data is secure with us</h4>
                </div>
                <div className="flex flex-row justify-center align-middle items-center">
                    <Button leftIcon={<FontAwesomeIcon icon={faDollarSign} />} variant="outline" fullWidth size="lg">
                        Add Transaction
                    </Button>
                </div>
                </div>
            </div>
        </Fragment>
    )
}
