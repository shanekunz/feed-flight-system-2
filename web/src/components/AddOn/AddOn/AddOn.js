import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ADD_ON_MUTATION = gql`
  mutation DeleteAddOnMutation($id: Int!) {
    deleteAddOn(id: $id) {
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

const AddOn = ({ addOn }) => {
  const [deleteAddOn] = useMutation(DELETE_ADD_ON_MUTATION, {
    onCompleted: () => {
      toast.success('AddOn deleted')
      navigate(routes.addOns())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete addOn ' + id + '?')) {
      deleteAddOn({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AddOn {addOn.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{addOn.id}</td>
            </tr>
            <tr>
              <th>Menu item id</th>
              <td>{addOn.menuItemId}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{addOn.name}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{addOn.price}</td>
            </tr>
            <tr>
              <th>Profits</th>
              <td>{addOn.profits}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{formatEnum(addOn.type)}</td>
            </tr>
            <tr>
              <th>Deleted</th>
              <td>{checkboxInputTag(addOn.deleted)}</td>
            </tr>
            <tr>
              <th>Sort position</th>
              <td>{addOn.sortPosition}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAddOn({ id: addOn.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(addOn.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AddOn
