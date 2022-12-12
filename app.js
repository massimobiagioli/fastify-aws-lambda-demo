'use strict'

import fastify from 'fastify'
import autoload from '@fastify/autoload'
import { join } from 'desm'

export default function createApp () {
  const app = fastify()

  app.register(autoload, {
    dir: join(import.meta.url, 'plugins')
  })

  app.register(autoload, {
    dir: join(import.meta.url, 'routes'),
    options: { prefix: '/api' }
  })

  return app
}
