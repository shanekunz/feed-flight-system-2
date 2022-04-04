import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import DiscountForm from 'src/components/Discount/DiscountForm'

const CREATE_DISCOUNT_MUTATION = gql`
  mutation CreateDiscountMutation($input: CreateDiscountInput!) {
    createDiscount(input: $input) {
      id
    }
  }
`

const NewDiscount = () => {
  const [createDiscount, { loading, error }] = useMutation(
    CREATE_DISCOUNT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Discount created')
        navigate(routes.discounts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      categoryId: parseInt(input.categoryId),
      menuItemId: parseInt(input.menuItemId),
    })
    createDiscount({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Discount</h2>
      </header>
      <div className="rw-segment-main">
        <DiscountForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDiscount
