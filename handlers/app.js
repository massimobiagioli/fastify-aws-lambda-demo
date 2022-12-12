'use strict'

import awsLambdaFastify from '@fastify/aws-lambda'
import createApp from '../app.js'

const app = createApp()

const proxy = awsLambdaFastify(app)
export const handler = proxy
