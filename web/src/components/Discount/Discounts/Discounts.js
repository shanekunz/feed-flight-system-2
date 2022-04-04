import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Discount/DiscountsCell'

const DELETE_DISCOUNT_MUTATION = gql`
  mutation DeleteDiscountMutation($id: Int!) {
    deleteDiscount(id: $id) {
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

const DiscountsList = ({ discounts }) => {
  const [deleteDiscount] = useMutation(DELETE_DISCOUNT_MUTATION, {
    onCompleted: () => {
      toast.success('Discount deleted')
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
    if (confirm('Are you sure you want to delete discount ' + id + '?')) {
      deleteDiscount({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Discount code</th>
            <th>Created at</th>
            <th>Expiration date</th>
            <th>Discount type</th>
            <th>Category id</th>
            <th>Menu item id</th>
            <th>Number value</th>
            <th>Order total threshold</th>
            <th>Deleted</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {discounts.map((discount) => (
            <tr key={discount.id}>
              <td>{truncate(discount.id)}</td>
              <td>{truncate(discount.discountCode)}</td>
              <td>{timeTag(discount.createdAt)}</td>
              <td>{timeTag(discount.expirationDate)}</td>
              <td>{formatEnum(discount.discountType)}</td>
              <td>{truncate(discount.categoryId)}</td>
              <td>{truncate(discount.menuItemId)}</td>
              <td>{truncate(discount.numberValue)}</td>
              <td>{truncate(discount.orderTotalThreshold)}</td>
              <td>{checkboxInputTag(discount.deleted)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.discount({ id: discount.id })}
                    title={'Show discount ' + discount.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDiscount({ id: discount.id })}
                    title={'Edit discount ' + discount.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete discount ' + discount.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(discount.id)}
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

export default DiscountsList
