import { handlerPath } from '@libs/handler-resolver';
import type { AWS } from '@serverless/typescript';

const getProductsList: AWS['functions'][number] = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products',
        cors: true,
      },
    },
  ],
}

export default getProductsList;
