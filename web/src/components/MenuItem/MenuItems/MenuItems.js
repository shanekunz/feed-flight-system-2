import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/MenuItem/MenuItemsCell'

const DELETE_MENU_ITEM_MUTATION = gql`
  mutation DeleteMenuItemMutation($id: Int!) {
    deleteMenuItem(id: $id) {
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

const MenuItemsList = ({ menuItems }) => {
  const [deleteMenuItem] = useMutation(DELETE_MENU_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('MenuItem deleted')
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
    if (confirm('Are you sure you want to delete menuItem ' + id + '?')) {
      deleteMenuItem({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Profits</th>
            <th>Category id</th>
            <th>Deleted</th>
            <th>Show quantity picker</th>
            <th>Show on pos</th>
            <th>Show on site</th>
            <th>Has sides</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((menuItem) => (
            <tr key={menuItem.id}>
              <td>{truncate(menuItem.id)}</td>
              <td>{truncate(menuItem.name)}</td>
              <td>{truncate(menuItem.price)}</td>
              <td>{truncate(menuItem.profits)}</td>
              <td>{truncate(menuItem.categoryId)}</td>
              <td>{checkboxInputTag(menuItem.deleted)}</td>
              <td>{checkboxInputTag(menuItem.showQuantityPicker)}</td>
              <td>{checkboxInputTag(menuItem.showOnPOS)}</td>
              <td>{checkboxInputTag(menuItem.showOnSite)}</td>
              <td>{checkboxInputTag(menuItem.HasSides)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.menuItem({ id: menuItem.id })}
                    title={'Show menuItem ' + menuItem.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMenuItem({ id: menuItem.id })}
                    title={'Edit menuItem ' + menuItem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete menuItem ' + menuItem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(menuItem.id)}
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

export default MenuItemsList
