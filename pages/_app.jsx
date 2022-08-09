import "../styles/globals.css"
import Head from "next/head"
import Header from "../components/headers/Header"
import Footer from "../components/footers/Footer"
import { MantineProvider, createEmotionCache } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"
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
        router.pathname === '/' || router.pathname === '/dashboard' || router.pathname === '/privacy' ? <Header /> : <></>
      }
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          emotionCache={myCache}
          theme={{
            colorScheme: 'light',
          }}
        >
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </SessionProvider>
      {
        router.pathname === '/' || router.pathname === '/privacy' ? <Footer /> : <></>
      }
    </>
  )
}

