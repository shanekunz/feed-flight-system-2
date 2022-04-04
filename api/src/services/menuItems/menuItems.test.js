import {
  menuItems,
  menuItem,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from './menuItems'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('menuItems', () => {
  scenario('returns all menuItems', async (scenario) => {
    const result = await menuItems()

    expect(result.length).toEqual(Object.keys(scenario.menuItem).length)
  })

  scenario('returns a single menuItem', async (scenario) => {
    const result = await menuItem({ id: scenario.menuItem.one.id })

    expect(result).toEqual(scenario.menuItem.one)
  })

  scenario('creates a menuItem', async (scenario) => {
    const result = await createMenuItem({
      input: {
        name: 'String',
        price: 6202639.549497438,
        profits: 8598614.391575838,
        categoryId: scenario.menuItem.two.categoryId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.price).toEqual(6202639.549497438)
    expect(result.profits).toEqual(8598614.391575838)
    expect(result.categoryId).toEqual(scenario.menuItem.two.categoryId)
  })

  scenario('updates a menuItem', async (scenario) => {
    const original = await menuItem({ id: scenario.menuItem.one.id })
    const result = await updateMenuItem({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a menuItem', async (scenario) => {
    const original = await deleteMenuItem({ id: scenario.menuItem.one.id })
    const result = await menuItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
