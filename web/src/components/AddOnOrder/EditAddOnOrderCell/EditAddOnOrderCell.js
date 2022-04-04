import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import AddOnOrderForm from 'src/components/AddOnOrder/AddOnOrderForm'

export const QUERY = gql`
  query EditAddOnOrderById($id: Int!) {
    addOnOrder: addOnOrder(id: $id) {
      id
      menuItemOrderId
      addOnId
      price
      leftSide
      rightSide
    }
  }
`
const UPDATE_ADD_ON_ORDER_MUTATION = gql`
  mutation UpdateAddOnOrderMutation($id: Int!, $input: UpdateAddOnOrderInput!) {
    updateAddOnOrder(id: $id, input: $input) {
      id
      menuItemOrderId
      addOnId
      price
      leftSide
      rightSide
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ addOnOrder }) => {
  const [updateAddOnOrder, { loading, error }] = useMutation(
    UPDATE_ADD_ON_ORDER_MUTATION,
    {
      onCompleted: () => {
        toast.success('AddOnOrder updated')
        navigate(routes.addOnOrders())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      menuItemOrderId: parseInt(input.menuItemOrderId),
      addOnId: parseInt(input.addOnId),
    })
    updateAddOnOrder({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AddOnOrder {addOnOrder.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AddOnOrderForm
          addOnOrder={addOnOrder}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
