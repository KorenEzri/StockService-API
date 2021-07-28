import express from 'express';
import helmet from 'helmet';
import { connectToDb } from './src/db/connections';
import Logger from './src/logger/logger';
import routes from './src/routes';

const app = express();

app.use(express.json());
app.use(helmet());
app.use('/api', routes);

export default app;
