import mongoose, { Schema } from 'mongoose';
import { UserDoc } from '../../../types';

const userDbSchema: Schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  lastConnected: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
  createdAt: { type: Date, default: new Date() },
  phone: { type: String },
  avatar: String,
  email: { type: String, required: true },
  language: { type: String, default: 'he' },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  address: Object,
});

userDbSchema.set('toJSON', {
  transform: (_: any, returnedObject: any) => {
    delete returnedObject.__v;
  },
});

export const User = mongoose.model<UserDoc>('User', userDbSchema);
