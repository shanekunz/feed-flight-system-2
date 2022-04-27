// Chakra imports
import { ChakraProvider, Portal, useDisclosure } from '@chakra-ui/react'
import Configurator from 'src/components/Configurator/Configurator'
import Footer from 'src/components/Footer/Footer.js'
// Layout components
import AdminNavbar from 'src/components/Navbars/AdminNavbar.js'
import Sidebar from 'src/components/Sidebar/index.js'
import React, { useState } from 'react'
import { Route } from 'react-router-dom'
// Custom Chakra theme
import theme from '../../theme/theme.js'
import FixedPlugin from '../../components/FixedPlugin/FixedPlugin'
// Custom components
import MainPanel from '../../components/Layout/MainPanel'
import PanelContainer from '../../components/Layout/PanelContainer'
import PanelContent from '../../components/Layout/PanelContent'

// import
import Dashboard from 'src/pages/DashboardPage'
import Tables from 'src/views/Dashboard/Tables'
import Billing from 'src/views/Dashboard/Billing'
import RTLPage from 'src/views/Dashboard/RTL'
import Profile from 'src/views/Dashboard/Profile'
import SignIn from 'src/views/Auth/SignIn.js'
import SignUp from 'src/views/Auth/SignUp.js'

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from 'src/components/Icons/Icons'

import { routes as routes2, Link } from '@redwoodjs/router'

var dashRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    rtlName: 'لوحة القيادة',
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/tables',
    name: 'Tables',
    rtlName: 'لوحة القيادة',
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: '/admin',
  },
  {
    path: '/billing',
    name: 'Billing',
    rtlName: 'لوحة القيادة',
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: '/admin',
  },
  {
    path: '/rtl-support-page',
    name: 'RTL',
    rtlName: 'آرتيإل',
    icon: <SupportIcon color="inherit" />,
    component: RTLPage,
    layout: '/rtl',
  },
  {
    name: 'ACCOUNT PAGES',
    category: 'account',
    rtlName: 'صفحات',
    state: 'pageCollapse',
    views: [
      {
        path: '/profile',
        name: 'Profile',
        rtlName: 'لوحة القيادة',
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: '/admin',
      },
      {
        path: '/signin',
        name: 'Sign In',
        rtlName: 'لوحة القيادة',
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: '/auth',
      },
      {
        path: '/signup',
        name: 'Sign Up',
        rtlName: 'لوحة القيادة',
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: '/auth',
      },
    ],
  },
]
console.log(dashRoutes)
const AdminLayout = ({ children }) => {
  // states and functions
  const [sidebarVariant, setSidebarVariant] = useState('transparent')
  const [fixed, setFixed] = useState(false)
  // functions for changing the states from le-n
  const getRoute = () => {
    return window.location.pathname !== '/admin/full-screen-maps'
  }
  const getActiveRoute = (routes) => {
    let activeRoute = 'Default Brand Text'
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views)
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views)
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].path) !== -1
        ) {
          return routes[i].name
        }
      }
    }
    return activeRoute
  }
  // This changes navbar state(fixed or not)
  const getActiveNavbar = (routes) => {
    let activeNavbar = false
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views)
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar
          }
        }
      }
    }
    return activeNavbar
  }
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views)
      }
      if (prop.category === 'account') {
        return getRoutes(prop.views)
      }
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      } else {
        return null
      }
    })
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  document.documentElement.dir = 'ltr'
  // Chakra Color Mode
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Sidebar
        routes={dashRoutes}
        logoText={'PURITY UI DASHBOARD'}
        display="none"
        sidebarVariant={sidebarVariant}
      />
      <MainPanel
        w={{
          base: '100%',
          xl: 'calc(100% - 275px)',
        }}
      >
        <Portal>
          <AdminNavbar
            onOpen={onOpen}
            logoText={'PURITY UI DASHBOARD'}
            brandText={getActiveRoute(dashRoutes)}
            secondary={getActiveNavbar(dashRoutes)}
            fixed={fixed}
          />
        </Portal>
        {getRoute() ? (
          <PanelContent>
            <PanelContainer>
              {children}
            </PanelContainer>
          </PanelContent>
        ) : null}
        <Footer />
        <Portal>
          <FixedPlugin
            secondary={getActiveNavbar(dashRoutes)}
            fixed={fixed}
            onOpen={onOpen}
          />
        </Portal>
        <Configurator
          secondary={getActiveNavbar(dashRoutes)}
          isOpen={isOpen}
          onClose={onClose}
          isChecked={fixed}
          onSwitch={(value) => {
            setFixed(value)
          }}
          onOpaque={() => setSidebarVariant('opaque')}
          onTransparent={() => setSidebarVariant('transparent')}
        />
      </MainPanel>
    </ChakraProvider>
  )
}

export default AdminLayout
