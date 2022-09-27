import gql from 'graphql-tag'

export const fetchCompanies = gql`
query Companies($limit: Int!, $skip: Int!) {
    gym_companies(limit: $limit, skip: $skip) {
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