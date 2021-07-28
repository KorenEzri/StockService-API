import { Request, Response, Router } from 'express';
import stockRouter from './stock';

const router = Router();

const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

router.use('/stock', stockRouter);

router.use(unknownEndpoint);
export default router;
