import * as yup from 'yup'
export default {
  Query: {
    clients: async (parent, { limit, skip }, { Clients }, info) => {
      return Clients.find({}).skip(skip).limit(limit).exec()
    },
    trainers: async (parent, { limit, skip }, { Trainers }, info) => {
      try {
        console.log('limit', limit, 'skip', skip)
        const data = await Trainers.find({}).skip(skip).limit(limit).exec()
        console.log('data', data)
        return data
      } catch (err) {
        throw new Error(err)
      }
    }
  },
  Mutation: {
    createClient: {
      validationSchema: yup.object().shape({
        name: yup.string().required('name required!').min('First name is too short'),
        dob: yup.string('Invalid dob').required('dob is required'),
        fee: yup.number('fee must be numberic value').required('fee parameter required'),
        joining_date: yup.string().required('joining date is required'),
        mobile_no: yup.string().required('mobile_no required').length(10, 'mobile_no must be 10 digit'),
        exercise: yup.string().required('exercise required')
      }),
      resolve: async (parent, { input }, { Clients, user }, info) => {
        const row = new Clients({ ...input, createdBy: user.name, updatedBy: user.name })
        const client = await row.save()
        if (!client) {
          throw new Error('Error while saving client information')
        }
        return client
      }
    },
    createTrainer: {
      validationSchema: yup.object().shape({
        name: yup.string().required('Name parameter missing!'),
        specialist: yup.array().required('Specialist parameter missing!')
      }),
      resolve: async (parent, { input }, { Trainers, user }, info) => {
        console.log('input', input)
        const row = new Trainers({
          ...input,
          updatedBy: user.name,
          createdBy: user.name
        })
        const trainer = await row.save()
        if (!trainer) {
          throw new Error('Error while storing Trainer data')
        }
        return trainer
      }
    }
  }
}
