import { Handler } from '@netlify/functions';
import * as data from './data.json';

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

export { handler };