import { Link, routes } from '@redwoodjs/router'

import MarketingCampaigns from 'src/components/MarketingCampaign/MarketingCampaigns'

export const QUERY = gql`
  query FindMarketingCampaigns {
    marketingCampaigns {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No marketingCampaigns yet. '}
      <Link to={routes.newMarketingCampaign()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ marketingCampaigns }) => {
  return <MarketingCampaigns marketingCampaigns={marketingCampaigns} />
}
