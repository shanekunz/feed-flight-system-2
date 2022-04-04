import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import AddOnForm from 'src/components/AddOn/AddOnForm'

const CREATE_ADD_ON_MUTATION = gql`
  mutation CreateAddOnMutation($input: CreateAddOnInput!) {
    createAddOn(input: $input) {
      id
    }
  }
`

const NewAddOn = () => {
  const [createAddOn, { loading, error }] = useMutation(
    CREATE_ADD_ON_MUTATION,
    {
      onCompleted: () => {
        toast.success('AddOn created')
        navigate(routes.addOns())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      menuItemId: parseInt(input.menuItemId),
    })
    createAddOn({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AddOn</h2>
      </header>
      <div className="rw-segment-main">
        <AddOnForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAddOn
