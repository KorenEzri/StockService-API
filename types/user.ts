import { Document } from 'mongoose';

export interface Address {
  value: string;
  longitude: number;
  latitude: number;
}

export interface User {
  __id: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  lastConnected: Date;
  updatedAt: Date;
  createdAt: Date;
  phone: string;
  avatar: string;
  email: string;
  language: string;
  gender: string;
  dateOfBirth: Date;
  address: Address;
}

export interface UserDoc extends Document, User {}
