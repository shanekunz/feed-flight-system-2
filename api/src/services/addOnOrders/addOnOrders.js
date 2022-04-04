import { db } from 'src/lib/db'

export const addOnOrders = () => {
  return db.addOnOrder.findMany()
}

export const addOnOrder = ({ id }) => {
  return db.addOnOrder.findUnique({
    where: { id },
  })
}

export const createAddOnOrder = ({ input }) => {
  return db.addOnOrder.create({
    data: input,
  })
}

export const updateAddOnOrder = ({ id, input }) => {
  return db.addOnOrder.update({
    data: input,
    where: { id },
  })
}

export const deleteAddOnOrder = ({ id }) => {
  return db.addOnOrder.delete({
    where: { id },
  })
}
