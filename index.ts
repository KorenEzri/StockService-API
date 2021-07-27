import app from './app';
import Logger from './src/logger/logger';
import { connectToDb } from './src/db/connections';
require('dotenv').config();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  Logger.info(`server running on port ${PORT}`);
});
connectToDb();
