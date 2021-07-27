import { Request, Response, Router } from 'express';
import { checkToken } from '../../middelwares/checkToken';
import authRouter from './auth';
import ideaRouter from './idea';

const router = Router();

const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

router.use(authRouter);
router.use('/idea', ideaRouter);
router.use(checkToken);

router.use(unknownEndpoint);
export default router;
