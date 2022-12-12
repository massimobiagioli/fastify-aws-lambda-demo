'use strict'

import { test, expect, afterAll } from 'vitest'
import createApp from './app.js'

const app = createApp()

test('List all devices', async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/api/devices'
  })

  expect(response.statusCode).toBe(200)
  expect(JSON.parse(response.payload)).toHaveLength(4)
})

afterAll(async () => {
  await app.close()
})
