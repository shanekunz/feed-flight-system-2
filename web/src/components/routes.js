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

import { routes } from '@redwoodjs/router'

var dashRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    rtlName: 'لوحة القيادة',
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: '',
  },
  {
    path: '/tables',
    name: 'Tables',
    rtlName: 'لوحة القيادة',
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: '',
  },
  {
    path: '/billing',
    name: 'Billing',
    rtlName: 'لوحة القيادة',
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: '',
  },
  {
    path: '/rtl-support-page',
    name: 'RTL',
    rtlName: 'آرتيإل',
    icon: <SupportIcon color="inherit" />,
    component: RTLPage,
    layout: '',
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
        layout: '',
      },
      {
        path: '/login',
        name: 'Sign In',
        rtlName: 'لوحة القيادة',
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: '',
      },
      {
        path: '/signup',
        name: 'Sign Up',
        rtlName: 'لوحة القيادة',
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: '',
      },
    ],
  },
]
dashRoutes.forEach(d => {
  d.route = routes.login
})
export default dashRoutes
