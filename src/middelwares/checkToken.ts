import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../../types';

require('dotenv').config();

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  let token: string | undefined | string[] = req.headers.authorization;
  if (!token || Array.isArray(token))
    return res.status(400).json({ error: 'No token sent' });
  token = token.split(' ')[1];
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET!, // @ts-ignore
    (err: Error | null, decoded: User) => {
      if (err) {
        return res.status(403).json({ error: err });
      }
      req.user = decoded;
      next();
    },
  );
};
