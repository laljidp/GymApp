import mongoose from 'mongoose'
import { COLLECTION } from './collections'

const { Schema } = mongoose

const GymSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  ownerEmail: {
    type: String
  },
  ownerPhoneNumber: {
    type: String
  },
  description: {
    type: String
  },
  logoUrl: {
    type: String
  },
  smallLogoUrl: {
    type: String
  },
  address: {
    type: String
  },
  regular_fees: {
    type: Number,
    required: true
  }
},
  { timestamps: true }
)

export const GymCompany = mongoose.model(COLLECTION.GYM_COMPANY, GymSchema)
