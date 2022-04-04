import { db } from 'src/lib/db'

export const menuItemOrders = () => {
  return db.menuItemOrder.findMany()
}

export const menuItemOrder = ({ id }) => {
  return db.menuItemOrder.findUnique({
    where: { id },
  })
}

export const createMenuItemOrder = ({ input }) => {
  return db.menuItemOrder.create({
    data: input,
  })
}

export const updateMenuItemOrder = ({ id, input }) => {
  return db.menuItemOrder.update({
    data: input,
    where: { id },
  })
}

export const deleteMenuItemOrder = ({ id }) => {
  return db.menuItemOrder.delete({
    where: { id },
  })
}

export const MenuItemOrder = {
  order: (_obj, { root }) =>
    db.menuItemOrder.findUnique({ where: { id: root.id } }).order(),
  menuItem: (_obj, { root }) =>
    db.menuItemOrder.findUnique({ where: { id: root.id } }).menuItem(),
  addOns: (_obj, { root }) =>
    db.menuItemOrder.findUnique({ where: { id: root.id } }).addOns(),
}
