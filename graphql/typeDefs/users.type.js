import { gql } from 'apollo-server-express'

export default gql`

type User {
    name: String!
    username: String!
    email: String
    phone_no: String
    password: String
    last_logged_in: String
    createdAt: String
    updatedAt: String
}

extend type Query {
    users: [User!]!
}

input inputUser {
    name: String!
    username: String!
    email: String
    phone_no: String
    password: String
    last_logged_in: String
}

extend type Mutation {
    createUser(input: inputUser): User
}
`
