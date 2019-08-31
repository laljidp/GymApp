export default {
  Query: {
    attendances: (parent, args, { Attendance }, info) => {
      return Attendance.find().exec()
    },
    attendanceByUser: (parent, args, { db }, info) => {
      return 'Hello world'
    }
  },
  Mutation: {

  }
}
