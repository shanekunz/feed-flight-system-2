import { routes, Link } from '@redwoodjs/router'
import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <Tabs>
        <div className="flex-between">
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <TabList>
          <Link to={routes.home()}>
            <Tab>Home</Tab>
          </Link>
          <Link to={routes.about()}>
            <Tab>About</Tab>
          </Link>
          <Link to={routes.contact()}>
            <Tab>Contact</Tab>
          </Link>
        </TabList>
      </Tabs>
      {children}
    </>
  )
}

export default BlogLayout
