import { Fragment } from "react"
import { useSession } from "next-auth/react"
import { Alert } from "@mantine/core"
import { IconAlertCircle } from "@tabler/icons"

export default function LoginWarning() {
    const { data: session } = useSession()
    return (
        <Fragment>
            {
                <Alert className={session ? "hidden" : "block"} icon={<IconAlertCircle size={26} />} title="Save functionality" color="red" style={{width: `100%`}}>You must login to save your budget data or it will be lost on page refresh or by closing the page!</Alert>
            }
        </Fragment>
    )
}