import { TestApi } from '.'

let testApi

beforeEach(async () => {
  testApi = await TestApi.create({ name: 'test', age: 'test', gender: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = testApi.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(testApi.id)
    expect(view.name).toBe(testApi.name)
    expect(view.age).toBe(testApi.age)
    expect(view.gender).toBe(testApi.gender)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = testApi.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(testApi.id)
    expect(view.name).toBe(testApi.name)
    expect(view.age).toBe(testApi.age)
    expect(view.gender).toBe(testApi.gender)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
