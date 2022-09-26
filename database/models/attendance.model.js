import mongoose from 'mongoose'
// import { FKHelper } from '../db.helper'
import { COLLECTION } from './collections'

export const Attendance = mongoose.model(COLLECTION.ATTENDANCE, {
  date: { type: Date, default: Date.now() },
  session: {
    type: String,
    required: true,
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: COLLECTION.USERS,
  }],
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
})
