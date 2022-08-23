import { Fragment } from "react"
import NavbarDashboard from "../navbars/Navbar"
import LoginWarning from "./warnings/LoginWarning"
import { useState } from "react"
import Balance from "./balance/Balance"
import Income from "./income/Income"
import Expense from "./expense/Expense"
import Statistics from "./statistics/Statistics"

export default function Dashboard({data}) {
    const [sbarItem, setSbarItem] = useState(0)
    return (
        <Fragment>
            <div className="flex flex-row h-full">
                <NavbarDashboard activeSidebarItem={sbarItem} setActiveSidebarItem={setSbarItem} />
                <div className="w-full overflow-auto h-[90vh]">
                    <LoginWarning />
                    { /* More components here */ }
                    {
                        sbarItem === 0 
                            ?   (
                                    <Balance data={data} />
                                )
                            : 
                        sbarItem === 1 
                            ?   (
                                    <Income data={data} />
                                )
                            :
                        sbarItem === 2
                            ?   (
                                    <Expense data={data} />
                                )
                            :
                        sbarItem === 3 
                            ?   (
                                    <Statistics data={data} />
                                )
                            : <></>
                    }
                </div>
            </div>
        </Fragment>
    )
}