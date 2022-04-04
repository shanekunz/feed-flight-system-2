import { db } from 'src/lib/db'

export const addOns = () => {
  return db.addOn.findMany()
}

export const addOn = ({ id }) => {
  return db.addOn.findUnique({
    where: { id },
  })
}

export const createAddOn = ({ input }) => {
  return db.addOn.create({
    data: input,
  })
}

export const updateAddOn = ({ id, input }) => {
  return db.addOn.update({
    data: input,
    where: { id },
  })
}

export const deleteAddOn = ({ id }) => {
  return db.addOn.delete({
    where: { id },
  })
}

export const AddOn = {
  MenuItem: (_obj, { root }) =>
    db.addOn.findUnique({ where: { id: root.id } }).MenuItem(),
  AddOnOrder: (_obj, { root }) =>
    db.addOn.findUnique({ where: { id: root.id } }).AddOnOrder(),
}
