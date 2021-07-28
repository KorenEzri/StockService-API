import { Document } from 'mongoose';

export interface Stock {
  name: string;
  symbol: string;
}

export interface StockDoc extends Document, Stock {}

export interface RandomStock {
  name: string;
  symbol: string;
}
