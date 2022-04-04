import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/MenuItemOrder/MenuItemOrdersCell'

const DELETE_MENU_ITEM_ORDER_MUTATION = gql`
  mutation DeleteMenuItemOrderMutation($id: Int!) {
    deleteMenuItemOrder(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const MenuItemOrdersList = ({ menuItemOrders }) => {
  const [deleteMenuItemOrder] = useMutation(DELETE_MENU_ITEM_ORDER_MUTATION, {
    onCompleted: () => {
      toast.success('MenuItemOrder deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete menuItemOrder ' + id + '?')) {
      deleteMenuItemOrder({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Menu item id</th>
            <th>Order id</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {menuItemOrders.map((menuItemOrder) => (
            <tr key={menuItemOrder.id}>
              <td>{truncate(menuItemOrder.id)}</td>
              <td>{truncate(menuItemOrder.menuItemId)}</td>
              <td>{truncate(menuItemOrder.orderId)}</td>
              <td>{truncate(menuItemOrder.price)}</td>
              <td>{truncate(menuItemOrder.quantity)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.menuItemOrder({ id: menuItemOrder.id })}
                    title={'Show menuItemOrder ' + menuItemOrder.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMenuItemOrder({ id: menuItemOrder.id })}
                    title={'Edit menuItemOrder ' + menuItemOrder.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete menuItemOrder ' + menuItemOrder.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(menuItemOrder.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MenuItemOrdersList
