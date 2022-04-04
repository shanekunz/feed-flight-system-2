import MenuItem from 'src/components/MenuItem/MenuItem'

export const QUERY = gql`
  query FindMenuItemById($id: Int!) {
    menuItem: menuItem(id: $id) {
      id
      name
      price
      profits
      categoryId
      deleted
      showQuantityPicker
      showOnPOS
      showOnSite
      HasSides
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>MenuItem not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ menuItem }) => {
  return <MenuItem menuItem={menuItem} />
}
