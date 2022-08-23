import axios from "axios"
import { Fragment } from "react"
import Dashboard from "../components/dashboard/Dashboard"
import { authOptions } from "./api/auth/[...nextauth]"
import { unstable_getServerSession } from "next-auth"

export default function DashboardPage({data}) {
    return (
        <Fragment>
            <Dashboard data={data} />
        </Fragment>
    )
}

export async function getServerSideProps(ctx) {
    const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)
    if (session) {
        let dbData = await (await axios.post(`${process.env.BASE_URL}/api/budget/fetchdata`, {email: session.user.email})).data
        return {
            props: {
                data: dbData
            }
        }
    }
    else {
        return {
            props: {
                data: {}
            }
        }
    }
}