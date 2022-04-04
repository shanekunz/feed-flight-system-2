import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ADD_ON_ORDER_MUTATION = gql`
  mutation DeleteAddOnOrderMutation($id: Int!) {
    deleteAddOnOrder(id: $id) {
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

const AddOnOrder = ({ addOnOrder }) => {
  const [deleteAddOnOrder] = useMutation(DELETE_ADD_ON_ORDER_MUTATION, {
    onCompleted: () => {
      toast.success('AddOnOrder deleted')
      navigate(routes.addOnOrders())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete addOnOrder ' + id + '?')) {
      deleteAddOnOrder({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AddOnOrder {addOnOrder.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{addOnOrder.id}</td>
            </tr>
            <tr>
              <th>Menu item order id</th>
              <td>{addOnOrder.menuItemOrderId}</td>
            </tr>
            <tr>
              <th>Add on id</th>
              <td>{addOnOrder.addOnId}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{addOnOrder.price}</td>
            </tr>
            <tr>
              <th>Left side</th>
              <td>{checkboxInputTag(addOnOrder.leftSide)}</td>
            </tr>
            <tr>
              <th>Right side</th>
              <td>{checkboxInputTag(addOnOrder.rightSide)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAddOnOrder({ id: addOnOrder.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(addOnOrder.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AddOnOrder
