import {
  discounts,
  discount,
  createDiscount,
  updateDiscount,
  deleteDiscount,
} from './discounts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('discounts', () => {
  scenario('returns all discounts', async (scenario) => {
    const result = await discounts()

    expect(result.length).toEqual(Object.keys(scenario.discount).length)
  })

  scenario('returns a single discount', async (scenario) => {
    const result = await discount({ id: scenario.discount.one.id })

    expect(result).toEqual(scenario.discount.one)
  })

  scenario('creates a discount', async () => {
    const result = await createDiscount({
      input: {
        discountCode: 'String',
        discountType: 'FIXED',
        orderTotalThreshold: 2882345,
      },
    })

    expect(result.discountCode).toEqual('String')
    expect(result.discountType).toEqual('FIXED')
    expect(result.orderTotalThreshold).toEqual(2882345)
  })

  scenario('updates a discount', async (scenario) => {
    const original = await discount({ id: scenario.discount.one.id })
    const result = await updateDiscount({
      id: original.id,
      input: { discountCode: 'String2' },
    })

    expect(result.discountCode).toEqual('String2')
  })

  scenario('deletes a discount', async (scenario) => {
    const original = await deleteDiscount({ id: scenario.discount.one.id })
    const result = await discount({ id: original.id })

    expect(result).toEqual(null)
  })
})
