import { orders, order, createOrder, updateOrder, deleteOrder } from './orders'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('orders', () => {
  scenario('returns all orders', async (scenario) => {
    const result = await orders()

    expect(result.length).toEqual(Object.keys(scenario.order).length)
  })

  scenario('returns a single order', async (scenario) => {
    const result = await order({ id: scenario.order.one.id })

    expect(result).toEqual(scenario.order.one)
  })

  scenario('creates a order', async () => {
    const result = await createOrder({
      input: {
        total: 8775091.736666093,
        serviceMethod: 'String',
        paymentMethod: 'String',
        status: 'OPEN',
        placedOnPOS: true,
        deliveryFee: 2145361.434086659,
        tip: 9403380.322269712,
        discountAmount: 7926463.501235652,
      },
    })

    expect(result.total).toEqual(8775091.736666093)
    expect(result.serviceMethod).toEqual('String')
    expect(result.paymentMethod).toEqual('String')
    expect(result.status).toEqual('OPEN')
    expect(result.placedOnPOS).toEqual(true)
    expect(result.deliveryFee).toEqual(2145361.434086659)
    expect(result.tip).toEqual(9403380.322269712)
    expect(result.discountAmount).toEqual(7926463.501235652)
  })

  scenario('updates a order', async (scenario) => {
    const original = await order({ id: scenario.order.one.id })
    const result = await updateOrder({
      id: original.id,
      input: { total: 5351128.348490288 },
    })

    expect(result.total).toEqual(5351128.348490288)
  })

  scenario('deletes a order', async (scenario) => {
    const original = await deleteOrder({ id: scenario.order.one.id })
    const result = await order({ id: original.id })

    expect(result).toEqual(null)
  })
})
