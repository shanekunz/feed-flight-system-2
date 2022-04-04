import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import DiscountForm from 'src/components/Discount/DiscountForm'

export const QUERY = gql`
  query EditDiscountById($id: Int!) {
    discount: discount(id: $id) {
      id
      discountCode
      createdAt
      expirationDate
      discountType
      categoryId
      menuItemId
      numberValue
      orderTotalThreshold
      deleted
    }
  }
`
const UPDATE_DISCOUNT_MUTATION = gql`
  mutation UpdateDiscountMutation($id: Int!, $input: UpdateDiscountInput!) {
    updateDiscount(id: $id, input: $input) {
      id
      discountCode
      createdAt
      expirationDate
      discountType
      categoryId
      menuItemId
      numberValue
      orderTotalThreshold
      deleted
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ discount }) => {
  const [updateDiscount, { loading, error }] = useMutation(
    UPDATE_DISCOUNT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Discount updated')
        navigate(routes.discounts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      categoryId: parseInt(input.categoryId),
      menuItemId: parseInt(input.menuItemId),
    })
    updateDiscount({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Discount {discount.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DiscountForm
          discount={discount}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
