import { db } from '.'
import { userTable } from './schema'

async function seed() {
  const user: typeof userTable.$inferInsert = {
    firstName: 'Matheus',
    lastName: 'Almeida',
    email: 'matheus_almeida@yahoo.com',
    contact: '4002-8922',
    profession: 'Developer'
  }

  await db.insert(userTable).values(user)
  console.log('New user created')

  const users = await db.select().from(userTable)
  console.log('Getting all users', users)
}

seed()
