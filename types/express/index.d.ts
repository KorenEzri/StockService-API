/* eslint-disable no-unused-vars */
import { User } from '../user';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
