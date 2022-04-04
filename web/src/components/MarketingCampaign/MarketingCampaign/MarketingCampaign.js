import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MARKETING_CAMPAIGN_MUTATION = gql`
  mutation DeleteMarketingCampaignMutation($id: Int!) {
    deleteMarketingCampaign(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const MarketingCampaign = ({ marketingCampaign }) => {
  const [deleteMarketingCampaign] = useMutation(
    DELETE_MARKETING_CAMPAIGN_MUTATION,
    {
      onCompleted: () => {
        toast.success('MarketingCampaign deleted')
        navigate(routes.marketingCampaigns())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete marketingCampaign ' + id + '?')
    ) {
      deleteMarketingCampaign({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            MarketingCampaign {marketingCampaign.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{marketingCampaign.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{marketingCampaign.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMarketingCampaign({ id: marketingCampaign.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(marketingCampaign.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default MarketingCampaign
