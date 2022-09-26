import mongoose from 'mongoose'
import { COLLECTION } from './collections'

export const TrainersInfo = mongoose.model(COLLECTION.TRAINERS_INFO, {
  specialist: {
    type: [String],
    required: true
  },
  trainingExperience: {
    type: Number
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: COLLECTION.USERS
  }
})
