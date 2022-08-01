import { Fragment } from "react"
import Error from "../components/error/Error"

export default function ServerErrorPage() {
    return (
        <Fragment>
            <Error errCode="500" errTitle="Internal Server Error" errDesc="The server encountered something unexpected that prevented it from fulfilling the request. This error indicates that something is wrong on our end. Let our development team know of this by contacting our support service." btnDesc="Contact Support" btnAnchor="https://www.facebook.com/PhotoBytes999" />
        </Fragment>
    )
}