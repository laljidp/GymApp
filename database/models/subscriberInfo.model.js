import mongoose, { Schema } from 'mongoose'
import { COLLECTION } from './collections'

export const SubscriberInfo = mongoose.model(COLLECTION.SUBSCRIBER_INFO, new Schema({
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: COLLECTION.USERS
  }
}, { timestamps: true }))
