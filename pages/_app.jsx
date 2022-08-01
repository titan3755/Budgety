import "../styles/globals.css"
import Head from "next/head"
import Navbar from "../components/navbars/Navbar"
import Footer from "../components/footers/Footer"
import { MantineProvider, createEmotionCache } from "@mantine/core"
import { NotificationsProvider } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import { useRouter } from "next/dist/client/router"
import { SessionProvider } from "next-auth/react"

const myCache = createEmotionCache({ key: 'mantine', prepend: false });
 
export default function BudgetApp({ Component, pageProps: { session, ...pageProps }}) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Budgety</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider session={session}>
      {
        router.pathname === '/' || router.pathname === '/dashboard' ? <Navbar /> : <></>
      }
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          emotionCache={myCache}
          theme={{
            colorScheme: 'light',
          }}
        >
          <ModalsProvider>
            <NotificationsProvider>
              <Component {...pageProps} />
            </NotificationsProvider>
          </ModalsProvider>
        </MantineProvider>
      </SessionProvider>
      {
        router.pathname === '/' || router.pathname === '/dashboard' ? <Footer /> : <></>
      }
    </>
  )
}

