export default {
  Query: {
    users: (parent, { limit, skip }, { Users }, info) => { // context is the one in which we will pass mongo model
      return Users.find().skip(skip).limit(limit).exec()
    }
  },
  Mutation: {
    createUser: (parent, args, { Users }, info) => {
      const user = new Users({
        ...args.input
      })
      const row = user.save()
      if (!row) {
        throw new Error('Error while saving users')
      }
      return row
    }
  }
}
