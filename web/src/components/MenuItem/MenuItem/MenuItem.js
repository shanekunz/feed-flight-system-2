import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MENU_ITEM_MUTATION = gql`
  mutation DeleteMenuItemMutation($id: Int!) {
    deleteMenuItem(id: $id) {
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

const MenuItem = ({ menuItem }) => {
  const [deleteMenuItem] = useMutation(DELETE_MENU_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('MenuItem deleted')
      navigate(routes.menuItems())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete menuItem ' + id + '?')) {
      deleteMenuItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            MenuItem {menuItem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{menuItem.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{menuItem.name}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{menuItem.price}</td>
            </tr>
            <tr>
              <th>Profits</th>
              <td>{menuItem.profits}</td>
            </tr>
            <tr>
              <th>Category id</th>
              <td>{menuItem.categoryId}</td>
            </tr>
            <tr>
              <th>Deleted</th>
              <td>{checkboxInputTag(menuItem.deleted)}</td>
            </tr>
            <tr>
              <th>Show quantity picker</th>
              <td>{checkboxInputTag(menuItem.showQuantityPicker)}</td>
            </tr>
            <tr>
              <th>Show on pos</th>
              <td>{checkboxInputTag(menuItem.showOnPOS)}</td>
            </tr>
            <tr>
              <th>Show on site</th>
              <td>{checkboxInputTag(menuItem.showOnSite)}</td>
            </tr>
            <tr>
              <th>Has sides</th>
              <td>{checkboxInputTag(menuItem.HasSides)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMenuItem({ id: menuItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(menuItem.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default MenuItem
