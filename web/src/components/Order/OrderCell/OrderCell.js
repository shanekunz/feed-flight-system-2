import Order from 'src/components/Order/Order'

export const QUERY = gql`
  query FindOrderById($id: Int!) {
    order: order(id: $id) {
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

export const Empty = () => <div>Order not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ order }) => {
  return <Order order={order} />
}
