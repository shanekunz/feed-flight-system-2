export const standard = defineScenario({
  addOn: {
    one: {
      data: {
        name: 'String',
        price: 9323098.419161053,
        profits: 1001528.8231456076,
        type: 'SIZE',
        MenuItem: {
          create: {
            name: 'String',
            price: 5519566.049420157,
            profits: 5086522.237386095,
            parentCategory: { create: { name: 'String' } },
          },
        },
      },
    },

    two: {
      data: {
        name: 'String',
        price: 3166507.9219958116,
        profits: 5509247.068617349,
        type: 'SIZE',
        MenuItem: {
          create: {
            name: 'String',
            price: 8423899.017916689,
            profits: 5243828.646261872,
            parentCategory: { create: { name: 'String' } },
          },
        },
      },
    },
  },
})
