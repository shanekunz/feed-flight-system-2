import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/AddOnOrder/AddOnOrdersCell'

const DELETE_ADD_ON_ORDER_MUTATION = gql`
  mutation DeleteAddOnOrderMutation($id: Int!) {
    deleteAddOnOrder(id: $id) {
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

const AddOnOrdersList = ({ addOnOrders }) => {
  const [deleteAddOnOrder] = useMutation(DELETE_ADD_ON_ORDER_MUTATION, {
    onCompleted: () => {
      toast.success('AddOnOrder deleted')
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
    if (confirm('Are you sure you want to delete addOnOrder ' + id + '?')) {
      deleteAddOnOrder({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Menu item order id</th>
            <th>Add on id</th>
            <th>Price</th>
            <th>Left side</th>
            <th>Right side</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {addOnOrders.map((addOnOrder) => (
            <tr key={addOnOrder.id}>
              <td>{truncate(addOnOrder.id)}</td>
              <td>{truncate(addOnOrder.menuItemOrderId)}</td>
              <td>{truncate(addOnOrder.addOnId)}</td>
              <td>{truncate(addOnOrder.price)}</td>
              <td>{checkboxInputTag(addOnOrder.leftSide)}</td>
              <td>{checkboxInputTag(addOnOrder.rightSide)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.addOnOrder({ id: addOnOrder.id })}
                    title={'Show addOnOrder ' + addOnOrder.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAddOnOrder({ id: addOnOrder.id })}
                    title={'Edit addOnOrder ' + addOnOrder.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete addOnOrder ' + addOnOrder.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(addOnOrder.id)}
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

export default AddOnOrdersList
