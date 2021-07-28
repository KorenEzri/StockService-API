import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Logger from '../logger/logger';

dotenv.config();
// TEST_MONGO_URI=mongodb+srv://Korenezri:QueefKoren@incredisight.pypiu.mongodb.net/Incredefined-test?retryWrites=true&w=majority
const MONGO_URI =
  process.env?.NODE_ENV === 'test'
    ? process.env.TEST_MONGO_URI!
    : process.env.MONGO_URI!;

export const connectToDb = () =>
  mongoose.connect(
    MONGO_URI,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      Logger.info('connected to database');
    },
  );
