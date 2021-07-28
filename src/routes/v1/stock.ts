import { Router, Response, Request } from 'express';
import * as stockUtils from '../../utils';
import tickers from '../../db/tickers';
import { Stock } from '../../db/schemas';
import Logger from '../../logger/logger';

require('dotenv').config();

const stockRouter = Router();

stockRouter.get('/any', (req: Request, res: Response) => {
  const { symbol } = stockUtils.pickRandomStock();
  const result = {
    symbol,
    time: new Date(),
    value: stockUtils.getRandomStockValue(),
  };
  res.json(result);
});

stockRouter.post('/from-text', async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'no text provided' });
    const results = stockUtils.symbolLookup(text);
    if (!results.length) return res.json([]);
    const postedStocks = await Stock.insertMany(results, { ordered: false });
    res.json(results);
  } catch ({ message }) {
    Logger.error(message); //TODO import
    res.status(500).json({ error: 'error occoured' });
  }
});

stockRouter.get('/:symbol', async (req: Request, res: Response) => {
  const { symbol } = req.params;
  if (!symbol)
    return res.status(400).json({ error: 'symbol must be provided' });
  const name = stockUtils.findNameBySymbol(symbol);
  if (!name) return res.status(404).json({ error: 'symbol not found' });
  const result = {
    name,
    time: new Date(),
    value: stockUtils.getRandomStockValue(),
  };
  res.json(result);
});
export default stockRouter;
