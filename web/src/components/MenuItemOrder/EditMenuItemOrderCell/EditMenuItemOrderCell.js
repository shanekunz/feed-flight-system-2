import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import MenuItemOrderForm from 'src/components/MenuItemOrder/MenuItemOrderForm'

export const QUERY = gql`
  query EditMenuItemOrderById($id: Int!) {
    menuItemOrder: menuItemOrder(id: $id) {
      id
      menuItemId
      orderId
      price
      quantity
    }
  }
`
const UPDATE_MENU_ITEM_ORDER_MUTATION = gql`
  mutation UpdateMenuItemOrderMutation(
    $id: Int!
    $input: UpdateMenuItemOrderInput!
  ) {
    updateMenuItemOrder(id: $id, input: $input) {
      id
      menuItemId
      orderId
      price
      quantity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ menuItemOrder }) => {
  const [updateMenuItemOrder, { loading, error }] = useMutation(
    UPDATE_MENU_ITEM_ORDER_MUTATION,
    {
      onCompleted: () => {
        toast.success('MenuItemOrder updated')
        navigate(routes.menuItemOrders())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      menuItemId: parseInt(input.menuItemId),
      orderId: parseInt(input.orderId),
    })
    updateMenuItemOrder({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit MenuItemOrder {menuItemOrder.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MenuItemOrderForm
          menuItemOrder={menuItemOrder}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
