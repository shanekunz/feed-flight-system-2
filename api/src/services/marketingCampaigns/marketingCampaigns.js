import { db } from 'src/lib/db'

export const marketingCampaigns = () => {
  return db.marketingCampaign.findMany()
}

export const marketingCampaign = ({ id }) => {
  return db.marketingCampaign.findUnique({
    where: { id },
  })
}

export const createMarketingCampaign = ({ input }) => {
  return db.marketingCampaign.create({
    data: input,
  })
}

export const updateMarketingCampaign = ({ id, input }) => {
  return db.marketingCampaign.update({
    data: input,
    where: { id },
  })
}

export const deleteMarketingCampaign = ({ id }) => {
  return db.marketingCampaign.delete({
    where: { id },
  })
}

export const MarketingCampaign = {
  orders: (_obj, { root }) =>
    db.marketingCampaign.findUnique({ where: { id: root.id } }).orders(),
}
