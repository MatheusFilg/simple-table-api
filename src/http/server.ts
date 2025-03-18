import { buildSchema } from 'drizzle-graphql'
import { db } from '../db'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const { schema } = buildSchema(db)

const server = new ApolloServer({ schema })

async function startServer() {
  const { url } = await startStandaloneServer(server)
  console.log(`🚀 Server running at ${url}`)
}

startServer().catch(err => {
  console.error('Error starting server:', err)
})
