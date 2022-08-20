import { Fragment } from "react"
import Error from "../components/error/Error"
import { errorData } from "../data/pagedata"

export default function NotFoundPage() {
    return (
        <Fragment>
            <Error errCode={errorData.notFound.errCode} errTitle={errorData.notFound.title} errDesc={errorData.notFound.desc} btnDesc={errorData.notFound.buttonText} btnAnchor="/" />
        </Fragment>
    )
}