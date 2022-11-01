import gql from 'graphql-tag'

export const fetchUsers =
  gql`
  query fetchUsers($limit: Int!, $skip: Int!) {
    users(limit: $limit, skip: $skip) {
      createdAt
      email
      last_logged_in
      name
      phone_no
      role
    }
  }`
