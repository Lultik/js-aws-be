import { handlerPath } from '@libs/handler-resolver';
import type { AWS } from '@serverless/typescript';

const getProductsById: AWS['functions'][number] = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products/{id}',
        cors: true,
        request: {
          parameters: {
            paths: {id: true},
          }
        }
      },
    },
  ],
}

export default getProductsById;
