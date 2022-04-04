import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/AddOn/AddOnsCell'

const DELETE_ADD_ON_MUTATION = gql`
  mutation DeleteAddOnMutation($id: Int!) {
    deleteAddOn(id: $id) {
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

const AddOnsList = ({ addOns }) => {
  const [deleteAddOn] = useMutation(DELETE_ADD_ON_MUTATION, {
    onCompleted: () => {
      toast.success('AddOn deleted')
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
    if (confirm('Are you sure you want to delete addOn ' + id + '?')) {
      deleteAddOn({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Menu item id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Profits</th>
            <th>Type</th>
            <th>Deleted</th>
            <th>Sort position</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {addOns.map((addOn) => (
            <tr key={addOn.id}>
              <td>{truncate(addOn.id)}</td>
              <td>{truncate(addOn.menuItemId)}</td>
              <td>{truncate(addOn.name)}</td>
              <td>{truncate(addOn.price)}</td>
              <td>{truncate(addOn.profits)}</td>
              <td>{formatEnum(addOn.type)}</td>
              <td>{checkboxInputTag(addOn.deleted)}</td>
              <td>{truncate(addOn.sortPosition)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.addOn({ id: addOn.id })}
                    title={'Show addOn ' + addOn.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAddOn({ id: addOn.id })}
                    title={'Edit addOn ' + addOn.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete addOn ' + addOn.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(addOn.id)}
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

export default AddOnsList
