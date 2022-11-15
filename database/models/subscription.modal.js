import mongoose from 'mongoose'
import { COLLECTION } from './collections'

const { Schema } = mongoose

export const Subscription = mongoose.model(COLLECTION.SUBSCRIPTION, new Schema({
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
  }
}, { timestamps: true }))