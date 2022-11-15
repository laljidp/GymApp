import bcrypt from 'bcryptjs'

export default {
  Query: {
    users: (parent, { limit, skip }, { Users }, info) => { // context is the one in which we will pass mongo model
      return Users.find().skip(skip).limit(limit).exec()
    }
  },
  Mutation: {
    createUser: async (parent, args, { Users }, info) => {
      const hashPassword = await bcrypt.hash(args.input.password, 10)
      const data = await Users.findOne({ username: args.input.username })      
      if(data) {
        throw new Error('User already exitst!')
        return
      }
      const user = new Users({
        ...args.input,
        password: hashPassword
      })
      const row = user.save()
      if (!row) {
        throw new Error('Error while saving users')
      }
      return row
    }
  }
}
