import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MenuItemOrderForm from 'src/components/MenuItemOrder/MenuItemOrderForm'

const CREATE_MENU_ITEM_ORDER_MUTATION = gql`
  mutation CreateMenuItemOrderMutation($input: CreateMenuItemOrderInput!) {
    createMenuItemOrder(input: $input) {
      id
    }
  }
`

const NewMenuItemOrder = () => {
  const [createMenuItemOrder, { loading, error }] = useMutation(
    CREATE_MENU_ITEM_ORDER_MUTATION,
    {
      onCompleted: () => {
        toast.success('MenuItemOrder created')
        navigate(routes.menuItemOrders())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      menuItemId: parseInt(input.menuItemId),
      orderId: parseInt(input.orderId),
    })
    createMenuItemOrder({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New MenuItemOrder</h2>
      </header>
      <div className="rw-segment-main">
        <MenuItemOrderForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMenuItemOrder
