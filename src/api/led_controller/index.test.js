import request from 'supertest-as-promised'
import { masterKey } from '../../config'
import express from '../../services/express'
import routes, { LedController } from '.'

const app = () => express(routes)

let ledController

beforeEach(async () => {
  ledController = await LedController.create({})
})

test('POST /led_controllers 201 (master)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: masterKey, name: 'test', color: 'test', intensity: 'test', frequency: 'test', duration: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.color).toEqual('test')
  expect(body.intensity).toEqual('test')
  expect(body.frequency).toEqual('test')
  expect(body.duration).toEqual('test')
})

test('POST /led_controllers 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /led_controllers 200 (master)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /led_controllers 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /led_controllers/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`/${ledController.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ledController.id)
})

test('GET /led_controllers/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${ledController.id}`)
  expect(status).toBe(401)
})

test('GET /led_controllers/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /led_controllers/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`/${ledController.id}`)
    .send({ access_token: masterKey, name: 'test', color: 'test', intensity: 'test', frequency: 'test', duration: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ledController.id)
  expect(body.name).toEqual('test')
  expect(body.color).toEqual('test')
  expect(body.intensity).toEqual('test')
  expect(body.frequency).toEqual('test')
  expect(body.duration).toEqual('test')
})

test('PUT /led_controllers/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${ledController.id}`)
  expect(status).toBe(401)
})

test('PUT /led_controllers/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: masterKey, name: 'test', color: 'test', intensity: 'test', frequency: 'test', duration: 'test' })
  expect(status).toBe(404)
})

test('DELETE /led_controllers/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`/${ledController.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /led_controllers/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${ledController.id}`)
  expect(status).toBe(401)
})

test('DELETE /led_controllers/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
