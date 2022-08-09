import { useState } from "react"
import { useRouter } from "next/router"
import { Navbar, Tooltip, UnstyledButton, createStyles, Stack } from "@mantine/core"
import {
  IconScale,
  IconChartInfographic,
  IconBusinessplan,
  IconCash,
  IconRefresh,
  IconLogout,
  IconCheck,
  IconChevronRight,
  IconChevronLeft,
} from "@tabler/icons"
import { signOut, useSession } from "next-auth/react"
import { Fragment } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: `#6666ff`,

    '&:hover': {
      backgroundColor: `#e6e6ff`,
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: `#ccccff`,
      color: `#3333ff`,
    },
  },
}));

function NavbarLink({ icon: Icon, label, active, onClick }) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconScale, label: 'Balance' },
  { icon: IconBusinessplan, label: 'Income' },
  { icon: IconCash, label: 'Expenses' },
  { icon: IconChartInfographic, label: 'Statistics' },
];

export default function NavbarDashboard({activeSidebarItem, setActiveSidebarItem}) {
  const [navbarCollapsed, setNavbarCollapsed] = useState(1)
  const router = useRouter()
  const { data: session } = useSession()
  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === activeSidebarItem}
      onClick={() => setActiveSidebarItem(index)}
    />
  ))
  const pageReloader = () => {
    router.reload()
  }

  return (
    <Fragment>
      <div className="relative">
        <Navbar style={navbarCollapsed === 0 ? {display: 'none'} : {display: ''}} height="90vh" width={{ base: 80 }} p="md">
        <Navbar.Section grow mt={50}>
          <Stack justify="center" spacing={0}>
            {links}
          </Stack>
        </Navbar.Section>
        {
          session 
            ? (
                <Navbar.Section>
                  <Stack justify="center" spacing={0}>
                    <NavbarLink icon={IconCheck} label="Save Budget Data" />
                    <NavbarLink onClick={pageReloader} icon={IconRefresh} label="Refresh data" />
                    <NavbarLink onClick={() => {signOut()}} icon={IconLogout} label="Logout" />
                  </Stack>
                </Navbar.Section>
              )
            : <></>
        }
      </Navbar>
      <NavCollapseBtn setCollapse={setNavbarCollapsed} btnClasses={navbarCollapsed === 0 ? "rounded-full p-2 shadow-md absolute top-1/2 left-2 -translate-x-1/2 -translate-y-1/2 opacity-100 bg-white border border-gray-200 hover:bg-gray-100" : "rounded-full p-2 shadow-md absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 opacity-100 bg-white border border-gray-200 hover:bg-gray-100"} icon={navbarCollapsed === 0 ? <IconChevronRight className="text-indigo-600" size={20} /> : <IconChevronLeft className="text-indigo-600" size={20} />} />
      </div>
    </Fragment>
  );
}

function NavCollapseBtn({btnClasses, setCollapse, icon}) {
  return (
    <Fragment>
      <button className={btnClasses} onClick={() => {setCollapse(prev => {if (prev === 0) {return 1} else {return 0}})}}>{icon}</button>
    </Fragment>
  )
}