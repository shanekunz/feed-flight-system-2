import { Link, routes } from '@redwoodjs/router'

import MenuItemOrders from 'src/components/MenuItemOrder/MenuItemOrders'

export const QUERY = gql`
  query FindMenuItemOrders {
    menuItemOrders {
      id
      menuItemId
      orderId
      price
      quantity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No menuItemOrders yet. '}
      <Link to={routes.newMenuItemOrder()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ menuItemOrders }) => {
  return <MenuItemOrders menuItemOrders={menuItemOrders} />
}
