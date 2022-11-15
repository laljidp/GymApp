import gql from 'graphql-tag'

export const fetchUsers =
  gql`
  query fetchUsers($limit: Int!, $skip: Int!) {
    users(limit: $limit, skip: $skip) {
      id      
      email      
      name
      phone_no
      role
      createdAt
      last_logged_in
    }
  }`
