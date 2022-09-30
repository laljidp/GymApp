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
import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { makeExecutableSchema } from '@graphql-tools/schema';
import jwtStrategy from './passport/jwt.passport'
import { checkAuthentication } from './passport/auth.helper'
dotenv.config()

passport.use(jwtStrategy)
const { MONGO_URL } = process.env

const startServer = async () => {
  await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true  })
  const app = express()
  const httpServer = createServer(app);
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  let subscriptionServer;

  app.use(morgan())
  app.use(cors())
  app.use(express.urlencoded({
    extended: true
  }));
  // parse application/json
  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'client', 'build')))

  const server = new ApolloServer({
    schema,
    introspection: process?.env?.NODE_ENV !== 'production',
    context: async ({req}) => {
      // lookup userId by token, etc.
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
    },
    plugins: [{
      async serverWillStart() {
        return {
          async drainServer() {
            subscriptionServer.close();
          }
        };
      }
    }],
  });

  subscriptionServer = SubscriptionServer.create({
    schema,
    execute,
    subscribe,
    onConnect() {
      // lookup userId by token, etc.
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
    },
  }, {
    server: httpServer,
    path: server.graphqlPath,
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;
  // Apollo 2 configuration
  // const server = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  //   context: async ({ req }) => {
  //     const user = checkAuthentication(req)
  //     console.log('user', user)
  //     if (user) {
  //       return {
  //         user,
  //         ...db
  //       }
  //     } else {
  //       throw new Error('Unathhorized token')
  //     }
  //   }
  // })

  app.get('/users', (req, res) => { res.send({ message: 'Users fetching...' }) })

  app.use('/auth', authRoutes)

  app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'client', 'build') })
  })

  httpServer.listen(PORT, () => {
    console.log(`Running a GraphQL API server at localhost:4000${server.graphqlPath}`)
  })
}

startServer()
