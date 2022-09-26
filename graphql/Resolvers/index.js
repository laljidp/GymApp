import userResolver from './user.resolver'
import gym_companyResolver from './gym_company.resolver'

const resolvers = {
  Query: {
    ...userResolver.Query,
    ...gym_companyResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...gym_companyResolver.Mutation
  }
}

export default resolvers
