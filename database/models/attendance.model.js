import mongoose from 'mongoose'
import { FKHelper } from '../db.helper'

export const Attendance = mongoose.model('attendance', {
  date: { type: Date, default: Date.now() },
  in_time: { type: Date, required: true },
  out_time: { type: Date, required: true },
  user: {
    type: String,
    required: true,
    ref: 'users',
    validate: {
      validator: (v) => {
        return FKHelper(mongoose.model('users'), v)
      },
      message: `User doesn't exists.`
    }
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  createdBy: {
    type: String,
    required: true
  },
  updatedBy: {
    type: String,
    required: true
  }
})
