import { addOns, addOn, createAddOn, updateAddOn, deleteAddOn } from './addOns'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('addOns', () => {
  scenario('returns all addOns', async (scenario) => {
    const result = await addOns()

    expect(result.length).toEqual(Object.keys(scenario.addOn).length)
  })

  scenario('returns a single addOn', async (scenario) => {
    const result = await addOn({ id: scenario.addOn.one.id })

    expect(result).toEqual(scenario.addOn.one)
  })

  scenario('creates a addOn', async (scenario) => {
    const result = await createAddOn({
      input: {
        menuItemId: scenario.addOn.two.menuItemId,
        name: 'String',
        price: 3257039.8317706008,
        profits: 1912359.0690941028,
        type: 'SIZE',
      },
    })

    expect(result.menuItemId).toEqual(scenario.addOn.two.menuItemId)
    expect(result.name).toEqual('String')
    expect(result.price).toEqual(3257039.8317706008)
    expect(result.profits).toEqual(1912359.0690941028)
    expect(result.type).toEqual('SIZE')
  })

  scenario('updates a addOn', async (scenario) => {
    const original = await addOn({ id: scenario.addOn.one.id })
    const result = await updateAddOn({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a addOn', async (scenario) => {
    const original = await deleteAddOn({ id: scenario.addOn.one.id })
    const result = await addOn({ id: original.id })

    expect(result).toEqual(null)
  })
})
