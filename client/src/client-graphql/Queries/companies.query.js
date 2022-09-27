import gql from 'graphql-tag'

export const fetchCompanies = gql`
query Companies($limit: Int!, $skip: Int!) {
    gym_companies(limit: $limit, skip: $skip) {
      id
      address
      createdAt
      description
      displayName
      logoUrl
      ownerEmail
      ownerName
      regular_fees
      name
      ownerPhoneNumber
      smallLogoUrl
      updatedAt
    }
  }
`

export const createCompany = gql`
mutation CreateGymCompany($company: inputGymCompany!) {
  createGymCompany(input: $company) {
   id
   name
   address
   description
   displayName
   logoUrl
   ownerEmail
   ownerName
   regular_fees
   smallLogoUrl
   createdAt 
  }
}
`