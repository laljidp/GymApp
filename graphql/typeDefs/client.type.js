
import { gql } from 'apollo-server-express'

export default gql`
    type Trainer {
        id: ID!
        name: String!
        specialist: [String!]!
    }
    
    type Client {
        id: ID!
        name: String!
        dob: String
        fees: Int
        isSpecialTraining: Boolean
        joining_date: String
        ending_date: String
        mobile_no: String
        exercise: String
        trainer: Trainer
        createdAt: String
        updatedAt: String
        createdBy: String
        updatedBy: String
    }

    input clientData {
        name: String!
        dob: String!
        fee: Int!
        joining_date: String!
        ending_date: String
        mobile_no: String!
        exercise: String!
        isSpecialTraining: Boolean
        trainer: String
    }

    extend type Query {
        clients(limit: Int!, skip: Int!): [Client!]!
        client(id: ID!): Client
    }
    
    extend type Mutation {
        createClient(input: clientData): Client      
    }
`
