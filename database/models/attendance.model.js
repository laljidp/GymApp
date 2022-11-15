import mongoose from 'mongoose'
import { StringSchema } from 'yup'
// import { FKHelper } from '../db.helper'
import { COLLECTION } from './collections'

const { Schema } = mongoose

export const Attendance = mongoose.model(COLLECTION.ATTENDANCE, new Schema({
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
  note: {
    type: String,
  }
}, { timestamps: true }))
