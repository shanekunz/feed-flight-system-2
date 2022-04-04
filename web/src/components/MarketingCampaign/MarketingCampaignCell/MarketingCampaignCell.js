import MarketingCampaign from 'src/components/MarketingCampaign/MarketingCampaign'

export const QUERY = gql`
  query FindMarketingCampaignById($id: Int!) {
    marketingCampaign: marketingCampaign(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>MarketingCampaign not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ marketingCampaign }) => {
  return <MarketingCampaign marketingCampaign={marketingCampaign} />
}
