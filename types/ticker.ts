export interface TickersResult {
  name: string;
  symbol: string;
}
export interface Ticker {
  [symbol: string]: { name: string };
}
