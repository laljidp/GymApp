import express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'
import path from 'path'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './graphql/typeDefs'
import authRoutes from './routes/auth.routes'
import resolvers from './graphql/Resolvers'
import * as db from './database/models'
import jwtStrategy from './passport/jwt.passport'
import bodyParser from 'body-parser'
import { checkAuthentication } from './passport/auth.helper'
dotenv.config()

// import cors from 'cors'
passport.use(jwtStrategy)
const { MONGO_URL } = process.env

const startServer = async () => {
  await mongoose.connect(MONGO_URL, { useNewUrlParser: true })
  const app = express()
  app.use(morgan())
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())
  app.use(express.static(path.join(__dirname, 'client', 'build')))
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const user = checkAuthentication(req)
      console.log('user', user)
      if (user) {
        return {
          user,
          ...db
        }
      } else {
        throw new Error('Unathhorized token')
      }
    }
  })

  app.get('/users', (req, res) => { res.send({ message: 'Users fetching...' }) })

  app.use('/auth', authRoutes)

  server.applyMiddleware({ app })

  app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'client', 'build') })
  })

  app.listen(4000, () => {
    console.log(`Running a GraphQL API server at localhost:4000${server.graphqlPath}`)
  })
}

startServer()
