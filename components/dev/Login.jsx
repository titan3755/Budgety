import { Fragment } from "react"
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from "next/link"

export default function DevLogin() {
    const {data: session} = useSession()
    if (session) {
        return (
            <Fragment>
                <div>Welcome! {session.user.email}</div>
                <button onClick={() => {signOut()}}>Sign Out</button>
            </Fragment>
        )
    }
    else {
        return (
            <Fragment>
                <div>Not signed in</div>
                <Link href="https://accounts.google.com/o/oauth2/v2/auth?client_id=988675066221-fjh6g136rg2nb0o6s95e3lk6tskfmbf0.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=03bgVH0KKTIXTW8gtFExdcXq5pDdzSjDJcCfQ0NGVcc&code_challenge=RMRY-wiBRFyUAAr_UnrVnxsPYemdxE8p0cbWPIPBSrU&code_challenge_method=S256">
                    <button>Sign In</button>
                </Link>
            </Fragment>
        )
    }
} 