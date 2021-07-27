import { Router, Response, Request } from 'express';

require('dotenv').config();

const ideaRouter = Router();
ideaRouter.get('/all', (req: Request, res: Response) => {});

ideaRouter.post('/create', (req: Request, res: Response) => {});

ideaRouter.post('/delete', (req: Request, res: Response) => {});

ideaRouter.post('/update', (req: Request, res: Response) => {});

export default ideaRouter;
