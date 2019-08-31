import mongoose from 'mongoose'

export const Users = mongoose.model('users', {
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone_no: {
    type: String
  },
  password: {
    type: String
  },
  last_logged_in: {
    type: Date,
    required: true,
    default: Date.now()
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
})
