import { Link, routes } from '@redwoodjs/router'

import Discounts from 'src/components/Discount/Discounts'

export const QUERY = gql`
  query FindDiscounts {
    discounts {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No discounts yet. '}
      <Link to={routes.newDiscount()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ discounts }) => {
  return <Discounts discounts={discounts} />
}
