import { gql } from 'apollo-server-express'
import userType from './users.type'
import gym_companyTypes from './gym_company.types'

const rootSchema = gql`
    type Query {
       _empty: String
    }
    type Mutation {
        _empty: String
    }
`

const typeDefs = [rootSchema, userType, gym_companyTypes]

export default typeDefs
