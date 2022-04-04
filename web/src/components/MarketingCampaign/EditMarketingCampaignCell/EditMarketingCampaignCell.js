import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import MarketingCampaignForm from 'src/components/MarketingCampaign/MarketingCampaignForm'

export const QUERY = gql`
  query EditMarketingCampaignById($id: Int!) {
    marketingCampaign: marketingCampaign(id: $id) {
      id
      name
    }
  }
`
const UPDATE_MARKETING_CAMPAIGN_MUTATION = gql`
  mutation UpdateMarketingCampaignMutation(
    $id: Int!
    $input: UpdateMarketingCampaignInput!
  ) {
    updateMarketingCampaign(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ marketingCampaign }) => {
  const [updateMarketingCampaign, { loading, error }] = useMutation(
    UPDATE_MARKETING_CAMPAIGN_MUTATION,
    {
      onCompleted: () => {
        toast.success('MarketingCampaign updated')
        navigate(routes.marketingCampaigns())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateMarketingCampaign({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit MarketingCampaign {marketingCampaign.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MarketingCampaignForm
          marketingCampaign={marketingCampaign}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
