import mongoose, { Schema } from 'mongoose';
import { StockDoc } from '../../../types';

const stockDbSchema: Schema = new mongoose.Schema(
  {
    symbol: { type: String, unique: true, required: true, trim: true },
    name: { type: String, trim: true },
  },
  { timestamps: true },
);

stockDbSchema.set('toJSON', {
  transform: (_: any, returnedObject: any) => {
    delete returnedObject.__v;
  },
});

export const Stock = mongoose.model<StockDoc>('Stock', stockDbSchema);
