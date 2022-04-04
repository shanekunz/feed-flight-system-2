import {
  menuItemOrders,
  menuItemOrder,
  createMenuItemOrder,
  updateMenuItemOrder,
  deleteMenuItemOrder,
} from './menuItemOrders'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('menuItemOrders', () => {
  scenario('returns all menuItemOrders', async (scenario) => {
    const result = await menuItemOrders()

    expect(result.length).toEqual(Object.keys(scenario.menuItemOrder).length)
  })

  scenario('returns a single menuItemOrder', async (scenario) => {
    const result = await menuItemOrder({ id: scenario.menuItemOrder.one.id })

    expect(result).toEqual(scenario.menuItemOrder.one)
  })

  scenario('creates a menuItemOrder', async (scenario) => {
    const result = await createMenuItemOrder({
      input: {
        menuItemId: scenario.menuItemOrder.two.menuItemId,
        orderId: scenario.menuItemOrder.two.orderId,
        price: 2628850.2033085283,
        quantity: 6726215,
      },
    })

    expect(result.menuItemId).toEqual(scenario.menuItemOrder.two.menuItemId)
    expect(result.orderId).toEqual(scenario.menuItemOrder.two.orderId)
    expect(result.price).toEqual(2628850.2033085283)
    expect(result.quantity).toEqual(6726215)
  })

  scenario('updates a menuItemOrder', async (scenario) => {
    const original = await menuItemOrder({ id: scenario.menuItemOrder.one.id })
    const result = await updateMenuItemOrder({
      id: original.id,
      input: { price: 5503993.344101427 },
    })

    expect(result.price).toEqual(5503993.344101427)
  })

  scenario('deletes a menuItemOrder', async (scenario) => {
    const original = await deleteMenuItemOrder({
      id: scenario.menuItemOrder.one.id,
    })

    const result = await menuItemOrder({ id: original.id })

    expect(result).toEqual(null)
  })
})
