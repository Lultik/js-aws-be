import { formatJSONResponse, internalError, ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import products from './response.mock.json'

import schema from './schema';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  try {
    return formatJSONResponse(products);
  } catch (err) {
    return internalError(err)
  }
};

export const main = getProductsList;
