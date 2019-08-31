import { gql } from 'apollo-server-express'
import clientType from './client.type'
import attendanceType from './attendance.type'
import userType from './users.type'

const rootSchema = gql`
    type Query {
       _empty: String
    }
    type Mutation {
        _empty: String
    }
`

const typeDefs = [rootSchema, clientType, attendanceType, userType]

export default typeDefs
