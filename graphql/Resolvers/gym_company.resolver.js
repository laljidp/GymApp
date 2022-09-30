export default {
  Query: {
    companies: (parent, { limit, skip }, { GymCompany }, info) => { // context is the one in which we will pass mongo model
      return GymCompany.find().skip(skip).limit(limit).exec()
    },
    company: (parent, { id }, { GymCompany }, info) => {
      return GymCompany.findById(id).exec()
    },
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