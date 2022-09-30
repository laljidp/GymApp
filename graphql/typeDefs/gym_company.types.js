import { gql } from 'apollo-server-express'

export default gql`
    type GymCompany {
        id: ID
        name: String!
        displayName: String!
        ownerName: String!
        ownerEmail: String!
        ownerPhoneNumber: String
        description: String
        logoUrl: String
        smallLogoUrl: String
        address: String
        regular_fees: Int!
        createdAt: String
        updatedAt: String  
    }

    extend type Query {
        companies(limit: Int!, skip: Int!): [GymCompany!]!
        company(id: ID!): GymCompany!
    }

    input inputGymCompany {
        name: String!
        displayName: String!
        ownerName: String!
        ownerEmail: String!
        ownerPhoneNumber: String
        description: String
        logoUrl: String
        smallLogoUrl: String
        address: String
        regular_fees: Int!
        createdAt: String
        updatedAt: String  
    }

    extend type Mutation {
        createGymCompany(input: inputGymCompany): GymCompany
    }
    
`