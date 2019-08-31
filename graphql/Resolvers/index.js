import clientResolver from './client.resolver'
import attendanceResolver from './attendance.resolver'
import userResolver from './user.resolver'

const resolvers = {
  Query: {
    ...clientResolver.Query,
    ...attendanceResolver.Query,
    ...userResolver.Query
  },
  Mutation: {
    ...clientResolver.Mutation,
    ...attendanceResolver.Mutation,
    ...userResolver.Mutation
  }
}

export default resolvers
