import { db } from 'src/lib/db'

export const discounts = () => {
  return db.discount.findMany()
}

export const discount = ({ id }) => {
  return db.discount.findUnique({
    where: { id },
  })
}

export const createDiscount = ({ input }) => {
  return db.discount.create({
    data: input,
  })
}

export const updateDiscount = ({ id, input }) => {
  return db.discount.update({
    data: input,
    where: { id },
  })
}

export const deleteDiscount = ({ id }) => {
  return db.discount.delete({
    where: { id },
  })
}

export const Discount = {
  orders: (_obj, { root }) =>
    db.discount.findUnique({ where: { id: root.id } }).orders(),
  category: (_obj, { root }) =>
    db.discount.findUnique({ where: { id: root.id } }).category(),
  menuItem: (_obj, { root }) =>
    db.discount.findUnique({ where: { id: root.id } }).menuItem(),
}
