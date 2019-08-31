import { gql } from 'apollo-server-express'

export default gql`
    type attendance {
        id: ID!
        in_time: String!
        out_time: String!
        user: Client
        createdAt: String
        updatedAt: String
    }

    extend type Query {
        attendances: [attendance!]!
        attendanceByUser(id: ID!): [attendance]
    }

    input inputAttendance {
        in_time: String!
        out_time: String!
        user_id: String!
    }

    extend type Mutation {
        createAttendance(input: inputAttendance): attendance
    }
`
