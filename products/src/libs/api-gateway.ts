import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda"
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
}

export const formatJSONResponse = (response) => ({
  statusCode: 200,
  headers,
  body: JSON.stringify(response)
})

export const notFound = (message?: string): APIGatewayProxyResult => ({
  statusCode: 404,
  headers,
  body: JSON.stringify({message: message ?? 'Not found'})
})

export const internalError = (error: unknown) => ({
  statusCode: 500,
  headers,
  body: JSON.stringify(error ?? {message: 'Internal server error'})
})
