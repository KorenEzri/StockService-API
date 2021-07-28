import app from '../app';
import request from 'supertest';
import { mockText } from './mock';
import { Stock } from '../src/db/schemas';
import { connectToDb } from '../src/db/connections';

const stocksPath = '/api/v1/stock';
const expectedPropertiesEnum = {
  full: ['symbol', 'time', 'value'],
  partial: ['name', 'symbol'],
};
const STOCK_SYMBOL_TO_SEARCH = 'AAPL';
const EXPECTED_STOCK_NAME = 'Apple Inc.';

describe('stocks tests', () => {
  jest.setTimeout(20000);
  beforeAll(async () => {
    await connectToDb();
    await Stock.deleteMany({});
  });
  test('Should be able to get random symbol', async () => {
    const { body } = await request(app).get(`${stocksPath}/any`);
    expectedPropertiesEnum.full.forEach(expectedProperty =>
      expect(body).toHaveProperty(expectedProperty),
    );
  });

  test('Should be able to get stocks name by symbol', async () => {
    const { body } = await request(app).get(
      `${stocksPath}/${STOCK_SYMBOL_TO_SEARCH}`,
    );

    expect(body.name).toEqual(EXPECTED_STOCK_NAME);
  });

  test('Should be able to find all stock symbols from text file', async () => {
    const { body } = await request(app)
      .post(`${stocksPath}/from-text`)
      .send({ text: mockText });

    console.log(body);
    expectedPropertiesEnum.partial.forEach(expectedProperty =>
      expect(body[0]).toHaveProperty(expectedProperty),
    );
  });
});
