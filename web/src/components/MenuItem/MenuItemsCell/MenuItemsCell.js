import { Link, routes } from '@redwoodjs/router'

import MenuItems from 'src/components/MenuItem/MenuItems'

export const QUERY = gql`
  query FindMenuItems {
    menuItems {
      id
      name
      price
      profits
      categoryId
      deleted
      showQuantityPicker
      showOnPOS
      showOnSite
      HasSides
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No menuItems yet. '}
      <Link to={routes.newMenuItem()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ menuItems }) => {
  return <MenuItems menuItems={menuItems} />
}
