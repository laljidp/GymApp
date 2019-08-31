import gql from 'graphql-tag'

export const fetchClients =
  gql`
    query clients($limit: Int!, $skip: Int!){
        clients(limit: $limit, skip: $skip){
            id
            name
            dob
            fees
            joining_date
            ending_date
            mobile_no
            exercise
            createdAt
            updatedAt
            createdBy
            updatedBy
        }
    }`
