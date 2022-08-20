import { Fragment } from "react"
import Error from "../components/error/Error"
import { errorData } from "../data/pagedata"

export default function ServerErrorPage() {
    return (
        <Fragment>
            <Error errCode={errorData.internalServer.errCode} errTitle={errorData.internalServer.title} errDesc={errorData.internalServer.desc} btnDesc={errorData.internalServer.buttonText} btnAnchor="https://www.facebook.com/PhotoBytes999" />
        </Fragment>
    )
}