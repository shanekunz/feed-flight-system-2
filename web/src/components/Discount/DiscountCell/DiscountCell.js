import Discount from 'src/components/Discount/Discount'

export const QUERY = gql`
  query FindDiscountById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Discount not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ discount }) => {
  return <Discount discount={discount} />
}
