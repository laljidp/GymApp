import mongoose from 'mongoose'
import { COLLECTION } from './collections'

export const GymCompany = mongoose.model(COLLECTION.GYM_COMPANY, {  
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
  smallLogoUrl :{
    type: String
  },
  address: {
    type: String
  },
  regular_fees: {
    type: Number,
    required: true
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
