import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MENU_ITEM_ORDER_MUTATION = gql`
  mutation DeleteMenuItemOrderMutation($id: Int!) {
    deleteMenuItemOrder(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const MenuItemOrder = ({ menuItemOrder }) => {
  const [deleteMenuItemOrder] = useMutation(DELETE_MENU_ITEM_ORDER_MUTATION, {
    onCompleted: () => {
      toast.success('MenuItemOrder deleted')
      navigate(routes.menuItemOrders())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete menuItemOrder ' + id + '?')) {
      deleteMenuItemOrder({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            MenuItemOrder {menuItemOrder.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{menuItemOrder.id}</td>
            </tr>
            <tr>
              <th>Menu item id</th>
              <td>{menuItemOrder.menuItemId}</td>
            </tr>
            <tr>
              <th>Order id</th>
              <td>{menuItemOrder.orderId}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{menuItemOrder.price}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{menuItemOrder.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMenuItemOrder({ id: menuItemOrder.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(menuItemOrder.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default MenuItemOrder
