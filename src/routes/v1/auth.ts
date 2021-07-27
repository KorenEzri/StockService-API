import { Router, Response, Request } from 'express';
import bcrypt from 'bcryptjs';

require('dotenv').config();

const authRouter = Router();

authRouter.post('/login', (req:Request, res:Response) => {

});

authRouter.post('/register', (req:Request, res:Response) => {

});

authRouter.post('/verify-email', (req:Request, res:Response) => {

});

export default authRouter;
