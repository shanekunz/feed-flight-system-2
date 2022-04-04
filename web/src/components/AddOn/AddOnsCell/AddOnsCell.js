import { Link, routes } from '@redwoodjs/router'

import AddOns from 'src/components/AddOn/AddOns'

export const QUERY = gql`
  query FindAddOns {
    addOns {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No addOns yet. '}
      <Link to={routes.newAddOn()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ addOns }) => {
  return <AddOns addOns={addOns} />
}
