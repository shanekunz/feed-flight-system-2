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
        total: 179264.0286444702,
        serviceMethod: 'DELIVERY',
        paymentMethod: 'CREDIT_ONLINE',
        status: 'OPEN',
        placedOnPOS: true,
        deliveryFee: 213981.91397064892,
        tip: 7483531.904201297,
        discountAmount: 3746830.9648070373,
      },
    })

    expect(result.total).toEqual(179264.0286444702)
    expect(result.serviceMethod).toEqual('DELIVERY')
    expect(result.paymentMethod).toEqual('CREDIT_ONLINE')
    expect(result.status).toEqual('OPEN')
    expect(result.placedOnPOS).toEqual(true)
    expect(result.deliveryFee).toEqual(213981.91397064892)
    expect(result.tip).toEqual(7483531.904201297)
    expect(result.discountAmount).toEqual(3746830.9648070373)
  })

  scenario('updates a order', async (scenario) => {
    const original = await order({ id: scenario.order.one.id })
    const result = await updateOrder({
      id: original.id,
      input: { total: 7793899.469550243 },
    })

    expect(result.total).toEqual(7793899.469550243)
  })

  scenario('deletes a order', async (scenario) => {
    const original = await deleteOrder({ id: scenario.order.one.id })
    const result = await order({ id: original.id })

    expect(result).toEqual(null)
  })
})
