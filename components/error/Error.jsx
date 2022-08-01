import { Fragment } from "react"
import { Button } from "@mantine/core"
import Link from "next/link"


export default function Error({errCode, errTitle, errDesc, btnDesc, btnAnchor}) {
    return (
        <Fragment>
            <div className="w-full h-[100vh] bg-red-500 flex flex-col align-middle justify-center">
                <h1 className="text-center text-red-300 text-[150px] font-extrabold">{errCode}</h1>
                <h2 className="text-center text-white text-4xl font-bold mb-5">{errTitle}</h2>
                <div className="flex flex-row align-middle justify-center">
                    <p className="text-center text-gray-300 text-lg mb-5 w-[500px]">{errDesc}</p>
                </div>
                <HomeBtn btnText={btnDesc} btnLink={btnAnchor} />
            </div>
        </Fragment>
    )
}

function HomeBtn({btnText, btnLink}) {
    return (
        <Fragment>
            <div className="flex flex-row align-middle justify-center my-5">
                <Link href={btnLink}>
                    <Button variant="white" size="lg" style={{color: `red`}}>
                        {btnText}
                    </Button>
                </Link>
            </div>
        </Fragment>
    )
}