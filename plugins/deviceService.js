'use strict'

import fp from 'fastify-plugin'

const createDeviceService = () => {
  return {
    findAll: async () => {
      return [
        { id: 1, name: 'device 1' },
        { id: 2, name: 'device 2' },
        { id: 3, name: 'device 3' },
        { id: 4, name: 'device 4' }
      ]
    }
  }
}
async function deviceServicePlugin (app, opts) {
  app.decorate('deviceService', createDeviceService())
}

export default fp(deviceServicePlugin)
