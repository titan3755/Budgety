import { Fragment } from "react"
import { Button, Menu } from "@mantine/core"
import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import { openModal } from "@mantine/modals"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import { IconUser, IconLock, IconChevronDown, IconLogout } from '@tabler/icons'
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function Navbar() {
  const router = useRouter()
  const { data: session } = useSession()
  const [mobileNavState, setMobileNavState] = useState(false)
  const loginModal = () => {
    openModal({
      children: (
        <>
          <p className="my-2 mb-4 text-lg font-normal font-ubuntu">Login to Budgety instantly without registering an account via Google, Facebook or GitHub account</p>
          <Link href="https://accounts.google.com/o/oauth2/v2/auth?client_id=988675066221-fjh6g136rg2nb0o6s95e3lk6tskfmbf0.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=03bgVH0KKTIXTW8gtFExdcXq5pDdzSjDJcCfQ0NGVcc&code_challenge=RMRY-wiBRFyUAAr_UnrVnxsPYemdxE8p0cbWPIPBSrU&code_challenge_method=S256">
            <Button styles={(theme) => ({
              leftIcon: {
                marginRight: 15
              }
            })} className="my-2" style={{borderWidth: `2px`, borderColor: `black`}} radius="md" leftIcon={<FontAwesomeIcon icon={faGoogle} size="1x" />} color="dark" variant="white" size="md" fullWidth={true} >Sign in with Google</Button>
          </Link>
          <Link href="">
            <Button styles={(theme) => ({
              leftIcon: {
                marginRight: 15
              }
            })} className="my-2" radius="md" leftIcon={<FontAwesomeIcon icon={faFacebook} size="1x" />} color="blue" variant="filled" size="md" fullWidth={true}>Sign in with Facebook</Button>
          </Link>
          <Link href="">
            <Button styles={(theme) => ({
              leftIcon: {
                marginRight: 15
              }
            })} className="my-2" radius="md" leftIcon={<FontAwesomeIcon icon={faGithub} size="1x" />} color="dark" variant="filled" size="md" fullWidth={true}>Sign in with GitHub</Button>
          </Link>
        </>
      ),
      size: 'md',
      centered: true
    })
  }
  return (
    <Fragment>
      <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {setMobileNavState(prev => !prev)}}
            >
              <span className="sr-only">Open main menu</span>
{/* 
                  Icon when menu is closed.

                  Heroicon name: outline/menu

                  Menu open: "hidden", Menu closed: "block" */}

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

                  {/* Icon when menu is open.

                  Heroicon name: outline/x

                  Menu open: "block", Menu closed: "hidden" */}

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h1 className="text-indigo-500 font-bold text-2xl ml-[5px] mr-2 mb-[2px]">Budgety</h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-2 mt-1 ml-2">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link href="/">
                  <a
                    className={router.pathname === '/' ? "text-slate-600 block px-3 py-2 rounded-md text-base font-medium mt-[2px]" : "text-gray-400 block px-3 py-2 rounded-md text-base font-medium mt-[2px]"}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a
                    className={router.pathname === '/dashboard' ? "text-slate-600 block px-3 py-2 rounded-md text-base font-medium mt-[3px]" : "text-gray-400 block px-3 py-2 rounded-md text-base font-medium mt-[3px]"}
                  >
                    Dashboard
                  </a>
                </Link>
                <a
                  href="https://www.facebook.com/PhotoBytes999"
                  className="text-gray-400 block px-3 py-2 rounded-md text-base font-medium mt-[3px]"
                >
                  Team
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:block">
            {
              session ? <UserMenuDropdown username={session.user.name} /> : <Button variant="outline" color="indigo" className="mx-1"onClick={() => {signIn()}}>Login</Button>
            }
            {/* Profile dropdown */} { /* Disabled */ }

          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={mobileNavState ? "visible" : "hidden"} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <Link href="/">
            <a
              className={router.pathname === '/' ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"}
            >
              Home
            </a>
          </Link>

          <Link href="/dashboard">
            <a
              className={router.pathname === '/dashboard' ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"}
            >
              Dashboard
            </a>
          </Link>
          <a
            href="https://www.facebook.com/PhotoBytes999"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>
          <div className="flex flex-row align-middle justify-center items-center">
            {
              session ? <UserMenuDropdown username={session.user.name} /> :  <Button variant="outline" color="indigo" className="mx-1" fullWidth onClick={() => {signIn()}}>Login</Button>
            }
          </div>
        </div>
      </div>
    </nav>
    </Fragment>
  )
}

function UserMenuDropdown({username}) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button rightIcon={<IconChevronDown size={20} />} variant="filled" color="indigo" size="md">{username}</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item icon={<IconUser size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconLock size={14} />}>Privacy</Menu.Item>
        <Menu.Divider />
        <Menu.Item component="button" icon={<IconLogout size={14} />} onClick={() => {signOut()}}>Sign Out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}