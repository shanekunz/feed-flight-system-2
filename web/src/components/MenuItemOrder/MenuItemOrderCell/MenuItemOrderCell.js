import MenuItemOrder from 'src/components/MenuItemOrder/MenuItemOrder'

export const QUERY = gql`
  query FindMenuItemOrderById($id: Int!) {
    menuItemOrder: menuItemOrder(id: $id) {
      id
      menuItemId
      orderId
      price
      quantity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>MenuItemOrder not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ menuItemOrder }) => {
  return <MenuItemOrder menuItemOrder={menuItemOrder} />
}
