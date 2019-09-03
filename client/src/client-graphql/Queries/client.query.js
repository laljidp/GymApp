import gql from 'graphql-tag'

export const fetchClients =
  gql`
    query clients($limit: Int!, $skip: Int!){
        clients(limit: $limit, skip: $skip){
            id
            name
            dob
            fees
            image
            joining_date
            ending_date
            mobile_no
            exercise
            createdAt
            updatedAt
            isSpecialTraining
            createdBy
            updatedBy
        }
    }`

export const createClient = gql`
mutation client($client: clientData) {
  createClient(input: $client){
    id
    name
    dob
    fees
    isSpecialTraining
    joining_date
    mobile_no
    exercise
    trainer {
      id
      name
    }
  }
}
`
