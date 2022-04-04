import { Link, routes } from '@redwoodjs/router'

import Orders from 'src/components/Order/Orders'

export const QUERY = gql`
  query FindOrders {
    orders {
      id
      createdAt
      email
      squareNonce
      total
      phone
      name
      address1
      address2
      city
      state
      zip
      serviceMethod
      paymentMethod
      instructions
      status
      placedOnPOS
      deliveryFee
      tip
      driver
      creditTerminalStatus
      marketingCampaignId
      discountAmount
      discountId
      processedForMarketing
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No orders yet. '}
      <Link to={routes.newOrder()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ orders }) => {
  return <Orders orders={orders} />
}
