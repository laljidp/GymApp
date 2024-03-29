import mongoose from 'mongoose'
import { COLLECTION } from './collections'
const {Schema} = mongoose

export const Users = mongoose.model(COLLECTION.USERS, {
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String
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
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  gym_company: {
    type: Schema.Types.ObjectId,
    ref: COLLECTION.GYM_COMPANY,
    default: null
  }
})
