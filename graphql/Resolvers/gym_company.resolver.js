export default {
  Query: {
    gym_companies: (parent, args, { GymCompany }, info) => { // context is the one in which we will pass mongo model
      return GymCompany.find().exec()
    }
  },
  Mutation: {
    createGymCompany: (parent, args, { GymCompany }, info) => {
      const company = new GymCompany({
        ...args.input
      })
      const row = company.save()
      if (!row) {
        throw new Error('Error while saving users')
      }
      return row
    }
  }
}