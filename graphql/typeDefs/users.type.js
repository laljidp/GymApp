import { gql } from 'apollo-server-express'

export default gql`

type User {
    id: ID
    name: String!
    username: String!
    email: String
    phone_no: String
    address: String
    password: String
    last_logged_in: String
    role: String
    createdAt: String
    updatedAt: String
}

extend type Query {
    users(limit: Int!, skip: Int!): [User!]!
}

input inputUser {
    name: String!
    username: String!
    email: String
    address: String
    phone_no: String
    password: String!
    role: String
    gyan_company: ID
}

extend type Mutation {
    createUser(input: inputUser): User
}
`
