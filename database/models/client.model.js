import mongoose from 'mongoose'

export const Clients = mongoose.model('client', {
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  mobile_no: {
    type: String,
    required: true
  },
  exercise: {
    type: String,
    required: true
  },
  joining_date: {
    type: Date
  },
  ending_date: {
    type: Date
  },
  fee: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: String,
    required: true
  },
  updatedBy: {
    type: String,
    required: true
  }
})
