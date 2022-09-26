import mongoose from 'mongoose'
import { COLLECTION } from './collections'

export const WorkoutTypes = mongoose.model(COLLECTION.WORKOUT_TYPES, {
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  referenceImage: {
    type: String
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