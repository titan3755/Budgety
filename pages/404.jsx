import { Fragment } from "react"
import Error from "../components/error/Error"

export default function NotFoundPage() {
    return (
        <Fragment>
            <Error errCode="404" errTitle="Requested page does not exist" errDesc="Page you are trying to navigate to does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is a mistake, contact support." btnDesc="Back to Home page" btnAnchor="/" />
        </Fragment>
    )
}