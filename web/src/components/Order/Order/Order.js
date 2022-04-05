import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ORDER_MUTATION = gql`
  mutation DeleteOrderMutation($id: Int!) {
    deleteOrder(id: $id) {
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

const Order = ({ order }) => {
  const [deleteOrder] = useMutation(DELETE_ORDER_MUTATION, {
    onCompleted: () => {
      toast.success('Order deleted')
      navigate(routes.orders())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete order ' + id + '?')) {
      deleteOrder({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Order {order.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{order.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(order.createdAt)}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{order.email}</td>
            </tr>
            <tr>
              <th>Square nonce</th>
              <td>{order.squareNonce}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{order.total}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{order.phone}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{order.name}</td>
            </tr>
            <tr>
              <th>Address1</th>
              <td>{order.address1}</td>
            </tr>
            <tr>
              <th>Address2</th>
              <td>{order.address2}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{order.city}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{order.state}</td>
            </tr>
            <tr>
              <th>Zip</th>
              <td>{order.zip}</td>
            </tr>
            <tr>
              <th>Service method</th>
              <td>{formatEnum(order.serviceMethod)}</td>
            </tr>
            <tr>
              <th>Payment method</th>
              <td>{formatEnum(order.paymentMethod)}</td>
            </tr>
            <tr>
              <th>Instructions</th>
              <td>{order.instructions}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{formatEnum(order.status)}</td>
            </tr>
            <tr>
              <th>Placed on pos</th>
              <td>{checkboxInputTag(order.placedOnPOS)}</td>
            </tr>
            <tr>
              <th>Delivery fee</th>
              <td>{order.deliveryFee}</td>
            </tr>
            <tr>
              <th>Tip</th>
              <td>{order.tip}</td>
            </tr>
            <tr>
              <th>Driver</th>
              <td>{order.driver}</td>
            </tr>
            <tr>
              <th>Credit terminal status</th>
              <td>{order.creditTerminalStatus}</td>
            </tr>
            <tr>
              <th>Marketing campaign id</th>
              <td>{order.marketingCampaignId}</td>
            </tr>
            <tr>
              <th>Discount amount</th>
              <td>{order.discountAmount}</td>
            </tr>
            <tr>
              <th>Discount id</th>
              <td>{order.discountId}</td>
            </tr>
            <tr>
              <th>Processed for marketing</th>
              <td>{checkboxInputTag(order.processedForMarketing)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editOrder({ id: order.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(order.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Order
