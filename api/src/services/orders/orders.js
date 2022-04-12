import { db } from 'src/lib/db'

export const orders = () => {
  return db.order.findMany()
}

export const order = ({ id }) => {
  return db.order.findUnique({
    where: { id },
  })
}

export const createOrder = ({ input }) => {
  console.log(input)
  input.discount = {
    connect: {
      id: input.discountId,
    },
  }
  delete input.discountId
  if (input.marketingCampaignId) {
    input.marketingCampaigns = {
      connect: {
        id: input.marketingCampaignId,
      },
    }
    delete input.marketingCampaign
  }
  input.processedForMarketing = false
  if (input.closeOrderNow) {
    input.status = 'CLOSED'
  } else {
    input.status = 'OPEN'
  }
  return db.order.create({
    data: input,
  })
}

export const updateOrder = ({ id, input }) => {
  return db.order.update({
    data: input,
    where: { id },
  })
}

export const deleteOrder = ({ id }) => {
  return db.order.delete({
    where: { id },
  })
}

export const Order = {
  cart: (_obj, { root }) =>
    db.order.findUnique({ where: { id: root.id } }).cart(),
  marketingCampaign: (_obj, { root }) =>
    db.order.findUnique({ where: { id: root.id } }).marketingCampaign(),
  discount: (_obj, { root }) =>
    db.order.findUnique({ where: { id: root.id } }).discount(),
}
