import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_DISCOUNT_MUTATION = gql`
  mutation DeleteDiscountMutation($id: Int!) {
    deleteDiscount(id: $id) {
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

const Discount = ({ discount }) => {
  const [deleteDiscount] = useMutation(DELETE_DISCOUNT_MUTATION, {
    onCompleted: () => {
      toast.success('Discount deleted')
      navigate(routes.discounts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete discount ' + id + '?')) {
      deleteDiscount({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Discount {discount.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{discount.id}</td>
            </tr>
            <tr>
              <th>Discount code</th>
              <td>{discount.discountCode}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(discount.createdAt)}</td>
            </tr>
            <tr>
              <th>Expiration date</th>
              <td>{timeTag(discount.expirationDate)}</td>
            </tr>
            <tr>
              <th>Discount type</th>
              <td>{formatEnum(discount.discountType)}</td>
            </tr>
            <tr>
              <th>Category id</th>
              <td>{discount.categoryId}</td>
            </tr>
            <tr>
              <th>Menu item id</th>
              <td>{discount.menuItemId}</td>
            </tr>
            <tr>
              <th>Number value</th>
              <td>{discount.numberValue}</td>
            </tr>
            <tr>
              <th>Order total threshold</th>
              <td>{discount.orderTotalThreshold}</td>
            </tr>
            <tr>
              <th>Deleted</th>
              <td>{checkboxInputTag(discount.deleted)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDiscount({ id: discount.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(discount.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Discount
