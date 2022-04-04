import AddOnOrder from 'src/components/AddOnOrder/AddOnOrder'

export const QUERY = gql`
  query FindAddOnOrderById($id: Int!) {
    addOnOrder: addOnOrder(id: $id) {
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

export const Empty = () => <div>AddOnOrder not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ addOnOrder }) => {
  return <AddOnOrder addOnOrder={addOnOrder} />
}
