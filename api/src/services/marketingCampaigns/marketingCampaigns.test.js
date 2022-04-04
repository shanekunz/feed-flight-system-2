import {
  marketingCampaigns,
  marketingCampaign,
  createMarketingCampaign,
  updateMarketingCampaign,
  deleteMarketingCampaign,
} from './marketingCampaigns'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('marketingCampaigns', () => {
  scenario('returns all marketingCampaigns', async (scenario) => {
    const result = await marketingCampaigns()

    expect(result.length).toEqual(
      Object.keys(scenario.marketingCampaign).length
    )
  })

  scenario('returns a single marketingCampaign', async (scenario) => {
    const result = await marketingCampaign({
      id: scenario.marketingCampaign.one.id,
    })

    expect(result).toEqual(scenario.marketingCampaign.one)
  })

  scenario('creates a marketingCampaign', async () => {
    const result = await createMarketingCampaign({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a marketingCampaign', async (scenario) => {
    const original = await marketingCampaign({
      id: scenario.marketingCampaign.one.id,
    })

    const result = await updateMarketingCampaign({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a marketingCampaign', async (scenario) => {
    const original = await deleteMarketingCampaign({
      id: scenario.marketingCampaign.one.id,
    })

    const result = await marketingCampaign({ id: original.id })

    expect(result).toEqual(null)
  })
})
