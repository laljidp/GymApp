import mongoose from 'mongoose'
import { COLLECTION } from './collections'
const { Schema } = mongoose

export const Users = mongoose.model(COLLECTION.USERS, new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    type: String
  },
  phone_no: {
    type: String
  },
  password: {
    type: String
  },
  last_logged_in: {
    type: Date,
    default: null
  },
  role: {
    type: String,
    enum: ['super_admin', 'owner', 'subscriber', 'trainer'],
    default: 'subscriber'
  },
  gym_company: {
    type: Schema.Types.ObjectId,
    ref: COLLECTION.GYM_COMPANY,
    default: null
  },
}, { timestamps: true }))

