import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = ({ input }) => {
  validate(input.name, 'name', { length: { min: 6, max: 200 } })
  validate(input.email, 'email', { email: true })
  validate(input.message, 'message', { length: { min: 6, max: 200 } })
  return db.contact.create({ data: input })
}
