import type { AWS } from '@serverless/typescript';

import getProductsList from 'src/functions/getProductsList';

const serverlessConfiguration: AWS = {
  service: 'products',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    region: 'eu-central-1',
    profile: 'aws-js',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: { getProductsList },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node18',
      define: {'require.resolve': undefined},
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
