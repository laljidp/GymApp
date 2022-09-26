import mongoose from 'mongoose'
import { COLLECTION } from './collections'

export const SubscriberInfo = mongoose.model('subscriber_info', {
  dob: {
    type: Date,
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
  isSpecialTraining: {
    type: Boolean,
    required: true,
    default: false
  },
  fee: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: COLLECTION.USERS
  }
})
