import { Fragment } from "react"
import Hero from "./hero/Hero"
import Features from "./features/Features"
import Promo from "./promo/Promo"
import Newsletter from "./newsletter/Newsletter"

export default function Home() {
    return (
        <Fragment>
            <Hero />
            <Features />
            <Promo />
            <Newsletter />
        </Fragment>
    )
}