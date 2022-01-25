import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { TestApi } from '.'

const app = () => express(apiRoot, routes)

let testApi

beforeEach(async () => {
  testApi = await TestApi.create({})
})

test('POST /test-apis 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', age: 'test', gender: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.age).toEqual('test')
  expect(body.gender).toEqual('test')
})

test('GET /test-apis 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /test-apis/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${testApi.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(testApi.id)
})

test('GET /test-apis/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /test-apis/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${testApi.id}`)
    .send({ name: 'test', age: 'test', gender: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(testApi.id)
  expect(body.name).toEqual('test')
  expect(body.age).toEqual('test')
  expect(body.gender).toEqual('test')
})

test('PUT /test-apis/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', age: 'test', gender: 'test' })
  expect(status).toBe(404)
})

test('DELETE /test-apis/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${testApi.id}`)
  expect(status).toBe(204)
})

test('DELETE /test-apis/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
