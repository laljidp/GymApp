import mongoose from 'mongoose'

export const Trainers = mongoose.model('trainer', {
  name: {
    type: String,
    required: true
  },
  specialist: {
    type: [String],
    required: true
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
