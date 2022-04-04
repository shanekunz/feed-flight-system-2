import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import AddOnForm from 'src/components/AddOn/AddOnForm'

export const QUERY = gql`
  query EditAddOnById($id: Int!) {
    addOn: addOn(id: $id) {
      id
      menuItemId
      name
      price
      profits
      type
      deleted
      sortPosition
    }
  }
`
const UPDATE_ADD_ON_MUTATION = gql`
  mutation UpdateAddOnMutation($id: Int!, $input: UpdateAddOnInput!) {
    updateAddOn(id: $id, input: $input) {
      id
      menuItemId
      name
      price
      profits
      type
      deleted
      sortPosition
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ addOn }) => {
  const [updateAddOn, { loading, error }] = useMutation(
    UPDATE_ADD_ON_MUTATION,
    {
      onCompleted: () => {
        toast.success('AddOn updated')
        navigate(routes.addOns())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      menuItemId: parseInt(input.menuItemId),
    })
    updateAddOn({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AddOn {addOn.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AddOnForm
          addOn={addOn}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
