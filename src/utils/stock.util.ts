import { TickersResult, Ticker, RandomStock } from '../../types';
import tickers from '../db/tickers';
import { Stock } from '../db/schemas';

const isUpper = (str: string) => !/[a-z]/.test(str) && /[A-Z]/.test(str);

export const symbolLookup = (text: string): TickersResult[] => {
  if (!text) return [];
  const symbolsPossibilities: string[] = text
    .split(' ')
    .map(w => w.trim())
    .filter(w => isUpper(w) && w.length > 2);

  return symbolsPossibilities.reduce(
    (acc: TickersResult[], curr: string) =>
      !tickers.hasOwnProperty(curr)
        ? acc
        : [...acc, { symbol: curr, name: tickers[curr].name }],
    [],
  );
};

export const pickRandomStock = (): RandomStock => {
  const symbols = Object.keys(tickers);
  const randomSymbol = symbols[Math.floor(symbols.length * Math.random())];
  return { name: tickers[randomSymbol].name, symbol: randomSymbol };
};

export const findNameBySymbol = (symbol: string): string | null => {
  if (!tickers.hasOwnProperty(symbol)) return null;
  return tickers[symbol].name;
};

export const getRandomStockValue = () => Math.random() * 10000;
