import AddOn from 'src/components/AddOn/AddOn'

export const QUERY = gql`
  query FindAddOnById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AddOn not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ addOn }) => {
  return <AddOn addOn={addOn} />
}
