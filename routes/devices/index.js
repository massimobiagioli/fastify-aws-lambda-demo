'use strict'

export default async function (app, opts) {
  app.get('/', async () => {
    const { deviceService } = app
    return deviceService.findAll()
  })
}
