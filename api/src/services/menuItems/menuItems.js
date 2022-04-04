import { db } from 'src/lib/db'

export const menuItems = () => {
  return db.menuItem.findMany()
}

export const menuItem = ({ id }) => {
  return db.menuItem.findUnique({
    where: { id },
  })
}

export const createMenuItem = ({ input }) => {
  return db.menuItem.create({
    data: input,
  })
}

export const updateMenuItem = ({ id, input }) => {
  return db.menuItem.update({
    data: input,
    where: { id },
  })
}

export const deleteMenuItem = ({ id }) => {
  return db.menuItem.delete({
    where: { id },
  })
}

export const MenuItem = {
  menuItems: (_obj, { root }) =>
    db.menuItem.findUnique({ where: { id: root.id } }).menuItems(),
  discounts: (_obj, { root }) =>
    db.menuItem.findUnique({ where: { id: root.id } }).discounts(),
  parentCategory: (_obj, { root }) =>
    db.menuItem.findUnique({ where: { id: root.id } }).parentCategory(),
  addOns: (_obj, { root }) =>
    db.menuItem.findUnique({ where: { id: root.id } }).addOns(),
}
