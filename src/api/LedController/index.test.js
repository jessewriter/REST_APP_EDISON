import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { LedController } from '.'

const app = () => express(routes)

let ledController

beforeEach(async () => {
  ledController = await LedController.create({})
})

test('POST /LedControllers 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ isOn: 'test', name: 'test', color: 'test', frequency: 'test', duration: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.isOn).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.color).toEqual('test')
  expect(body.frequency).toEqual('test')
  expect(body.duration).toEqual('test')
})

test('GET /LedControllers 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /LedControllers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${ledController.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ledController.id)
})

test('GET /LedControllers/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /LedControllers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${ledController.id}`)
    .send({ isOn: 'test', name: 'test', color: 'test', frequency: 'test', duration: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(ledController.id)
  expect(body.isOn).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.color).toEqual('test')
  expect(body.frequency).toEqual('test')
  expect(body.duration).toEqual('test')
})

test('PUT /LedControllers/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ isOn: 'test', name: 'test', color: 'test', frequency: 'test', duration: 'test' })
  expect(status).toBe(404)
})

test('DELETE /LedControllers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${ledController.id}`)
  expect(status).toBe(204)
})

test('DELETE /LedControllers/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
