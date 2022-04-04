import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import AddOnOrderForm from 'src/components/AddOnOrder/AddOnOrderForm'

const CREATE_ADD_ON_ORDER_MUTATION = gql`
  mutation CreateAddOnOrderMutation($input: CreateAddOnOrderInput!) {
    createAddOnOrder(input: $input) {
      id
    }
  }
`

const NewAddOnOrder = () => {
  const [createAddOnOrder, { loading, error }] = useMutation(
    CREATE_ADD_ON_ORDER_MUTATION,
    {
      onCompleted: () => {
        toast.success('AddOnOrder created')
        navigate(routes.addOnOrders())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      menuItemOrderId: parseInt(input.menuItemOrderId),
      addOnId: parseInt(input.addOnId),
    })
    createAddOnOrder({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AddOnOrder</h2>
      </header>
      <div className="rw-segment-main">
        <AddOnOrderForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAddOnOrder
