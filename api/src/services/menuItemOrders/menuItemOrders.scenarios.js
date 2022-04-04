export const standard = defineScenario({
  menuItemOrder: {
    one: {
      data: {
        price: 3396817.282227409,
        quantity: 8598398,
        order: {
          create: {
            total: 2911469.43857326,
            serviceMethod: 'String',
            paymentMethod: 'String',
            status: 'OPEN',
            placedOnPOS: true,
            deliveryFee: 3818681.8165254244,
            tip: 617530.2669480587,
            discountAmount: 8213327.817063161,
          },
        },

        menuItem: {
          create: {
            name: 'String',
            price: 8548348.962096889,
            profits: 3429720.096781308,
            parentCategory: { create: { name: 'String' } },
          },
        },
      },
    },

    two: {
      data: {
        price: 6695989.264602094,
        quantity: 2798583,
        order: {
          create: {
            total: 3733427.7369379667,
            serviceMethod: 'String',
            paymentMethod: 'String',
            status: 'OPEN',
            placedOnPOS: true,
            deliveryFee: 9275127.120107485,
            tip: 5120153.837884735,
            discountAmount: 7711047.385076135,
          },
        },

        menuItem: {
          create: {
            name: 'String',
            price: 1483459.8297296253,
            profits: 9429584.48465767,
            parentCategory: { create: { name: 'String' } },
          },
        },
      },
    },
  },
})
