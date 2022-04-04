import { Link, routes } from '@redwoodjs/router'

import AddOnOrders from 'src/components/AddOnOrder/AddOnOrders'

export const QUERY = gql`
  query FindAddOnOrders {
    addOnOrders {
      id
      menuItemOrderId
      addOnId
      price
      leftSide
      rightSide
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No addOnOrders yet. '}
      <Link to={routes.newAddOnOrder()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ addOnOrders }) => {
  return <AddOnOrders addOnOrders={addOnOrders} />
}
