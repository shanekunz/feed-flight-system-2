import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/MarketingCampaign/MarketingCampaignsCell'

const DELETE_MARKETING_CAMPAIGN_MUTATION = gql`
  mutation DeleteMarketingCampaignMutation($id: Int!) {
    deleteMarketingCampaign(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const MarketingCampaignsList = ({ marketingCampaigns }) => {
  const [deleteMarketingCampaign] = useMutation(
    DELETE_MARKETING_CAMPAIGN_MUTATION,
    {
      onCompleted: () => {
        toast.success('MarketingCampaign deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {marketingCampaigns.map((marketingCampaign) => (
            <tr key={marketingCampaign.id}>
              <td>{truncate(marketingCampaign.id)}</td>
              <td>{truncate(marketingCampaign.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.marketingCampaign({ id: marketingCampaign.id })}
                    title={
                      'Show marketingCampaign ' +
                      marketingCampaign.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMarketingCampaign({
                      id: marketingCampaign.id,
                    })}
                    title={'Edit marketingCampaign ' + marketingCampaign.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete marketingCampaign ' + marketingCampaign.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(marketingCampaign.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MarketingCampaignsList
