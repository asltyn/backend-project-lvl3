import { promises as fs } from 'fs';
import path from 'path';
import nock from 'nock';
import pageloader from '../src';

const host = 'https://hexlet.io/courses';

const pathToExpectedData = path.resolve(__dirname, '__fixtures__/expected');
const pathToRecievedData = path.resolve(__dirname, '__fixtures__/hexlet-io-courses.html');

test('test page loading', async () => {
  const expectedData = await fs.readFile(pathToExpectedData, 'utf-8');
  nock(host).get('').reply(200, expectedData);
  await pageloader(host, '__tests__/__fixtures__');
  const recievedData = await fs.readFile(pathToRecievedData, 'utf-8');
  expect(recievedData).toBe(expectedData);
  await fs.unlink(pathToRecievedData);
});
