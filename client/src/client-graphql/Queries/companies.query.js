import gql from 'graphql-tag'

export const fetchCompanies = gql`
query Companies($limit: Int!, $skip: Int!) {
  companies(limit: $limit, skip: $skip) {
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

export const fetchCompanyByID = gql`
query CompanyByID ($id: ID!) {
  company(id:$id) {
    address
    createdAt
    description
    displayName
    id
    name
    ownerEmail
    ownerName
    smallLogoUrl
    logoUrl
    ownerPhoneNumber
    regular_fees
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