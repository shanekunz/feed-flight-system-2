import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MarketingCampaignForm from 'src/components/MarketingCampaign/MarketingCampaignForm'

const CREATE_MARKETING_CAMPAIGN_MUTATION = gql`
  mutation CreateMarketingCampaignMutation(
    $input: CreateMarketingCampaignInput!
  ) {
    createMarketingCampaign(input: $input) {
      id
    }
  }
`

const NewMarketingCampaign = () => {
  const [createMarketingCampaign, { loading, error }] = useMutation(
    CREATE_MARKETING_CAMPAIGN_MUTATION,
    {
      onCompleted: () => {
        toast.success('MarketingCampaign created')
        navigate(routes.marketingCampaigns())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createMarketingCampaign({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New MarketingCampaign
        </h2>
      </header>
      <div className="rw-segment-main">
        <MarketingCampaignForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewMarketingCampaign
