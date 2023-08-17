import mongoose from 'mongoose'
import { credentials } from './credential.js'

export const createConnection = async (env) => {
  try {
    const url = env === 'PRODUCTION' ? credentials.prodDB : credentials.devDB
    const test = await mongoose.connect(url)
  } catch (e) {
    return e
  }
}
