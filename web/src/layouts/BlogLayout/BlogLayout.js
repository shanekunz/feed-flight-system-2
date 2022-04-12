import { routes, Link } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
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
      {children}
    </>
  )
}

export default BlogLayout
