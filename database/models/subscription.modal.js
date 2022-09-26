import mongoose from 'mongoose'
import { COLLECTION } from './collections'

export const Subscription = mongoose.model(COLLECTION.SUBSCRIPTION, {
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  expiration_period_in_months: {
    type: Number,
    required: true,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})