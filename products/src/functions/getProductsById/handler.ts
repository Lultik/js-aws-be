import { formatJSONResponse, internalError, notFound, ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';

import schema from './schema';
import { findProductById } from "./findProductById";

const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    const product = findProductById(event.pathParameters.id);

    if (!product) {
      return notFound(`Product with ID ${event.pathParameters.id} not found`);
    }

    return formatJSONResponse(product);
  } catch (err: unknown) {
    return internalError(err);
  }
};

export const main = getProductsById;
