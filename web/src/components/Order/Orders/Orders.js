import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Order/OrdersCell'

const DELETE_ORDER_MUTATION = gql`
  mutation DeleteOrderMutation($id: Int!) {
    deleteOrder(id: $id) {
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

const OrdersList = ({ orders }) => {
  const [deleteOrder] = useMutation(DELETE_ORDER_MUTATION, {
    onCompleted: () => {
      toast.success('Order deleted')
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
    if (confirm('Are you sure you want to delete order ' + id + '?')) {
      deleteOrder({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Email</th>
            <th>Square nonce</th>
            <th>Total</th>
            <th>Phone</th>
            <th>Name</th>
            <th>Address1</th>
            <th>Address2</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Service method</th>
            <th>Payment method</th>
            <th>Instructions</th>
            <th>Status</th>
            <th>Placed on pos</th>
            <th>Delivery fee</th>
            <th>Tip</th>
            <th>Driver</th>
            <th>Credit terminal status</th>
            <th>Marketing campaign id</th>
            <th>Discount amount</th>
            <th>Discount id</th>
            <th>Processed for marketing</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{truncate(order.id)}</td>
              <td>{timeTag(order.createdAt)}</td>
              <td>{truncate(order.email)}</td>
              <td>{truncate(order.squareNonce)}</td>
              <td>{truncate(order.total)}</td>
              <td>{truncate(order.phone)}</td>
              <td>{truncate(order.name)}</td>
              <td>{truncate(order.address1)}</td>
              <td>{truncate(order.address2)}</td>
              <td>{truncate(order.city)}</td>
              <td>{truncate(order.state)}</td>
              <td>{truncate(order.zip)}</td>
              <td>{truncate(order.serviceMethod)}</td>
              <td>{truncate(order.paymentMethod)}</td>
              <td>{truncate(order.instructions)}</td>
              <td>{formatEnum(order.status)}</td>
              <td>{checkboxInputTag(order.placedOnPOS)}</td>
              <td>{truncate(order.deliveryFee)}</td>
              <td>{truncate(order.tip)}</td>
              <td>{truncate(order.driver)}</td>
              <td>{truncate(order.creditTerminalStatus)}</td>
              <td>{truncate(order.marketingCampaignId)}</td>
              <td>{truncate(order.discountAmount)}</td>
              <td>{truncate(order.discountId)}</td>
              <td>{checkboxInputTag(order.processedForMarketing)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.order({ id: order.id })}
                    title={'Show order ' + order.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editOrder({ id: order.id })}
                    title={'Edit order ' + order.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete order ' + order.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(order.id)}
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

export default OrdersList
