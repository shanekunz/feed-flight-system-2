import {
  addOnOrders,
  addOnOrder,
  createAddOnOrder,
  updateAddOnOrder,
  deleteAddOnOrder,
} from './addOnOrders'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('addOnOrders', () => {
  scenario('returns all addOnOrders', async (scenario) => {
    const result = await addOnOrders()

    expect(result.length).toEqual(Object.keys(scenario.addOnOrder).length)
  })

  scenario('returns a single addOnOrder', async (scenario) => {
    const result = await addOnOrder({ id: scenario.addOnOrder.one.id })

    expect(result).toEqual(scenario.addOnOrder.one)
  })

  scenario('creates a addOnOrder', async () => {
    const result = await createAddOnOrder({
      input: {
        addOnId: 4126968,
        price: 4492916.086573701,
        leftSide: true,
        rightSide: true,
      },
    })

    expect(result.addOnId).toEqual(4126968)
    expect(result.price).toEqual(4492916.086573701)
    expect(result.leftSide).toEqual(true)
    expect(result.rightSide).toEqual(true)
  })

  scenario('updates a addOnOrder', async (scenario) => {
    const original = await addOnOrder({ id: scenario.addOnOrder.one.id })
    const result = await updateAddOnOrder({
      id: original.id,
      input: { addOnId: 503609 },
    })

    expect(result.addOnId).toEqual(503609)
  })

  scenario('deletes a addOnOrder', async (scenario) => {
    const original = await deleteAddOnOrder({ id: scenario.addOnOrder.one.id })
    const result = await addOnOrder({ id: original.id })

    expect(result).toEqual(null)
  })
})
