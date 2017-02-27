import { LedController } from '.'

let ledController

beforeEach(async () => {
  ledController = await LedController.create({ name: 'test', color: 'test', intensity: 'test', frequency: 'test', duration: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = ledController.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ledController.id)
    expect(view.name).toBe(ledController.name)
    expect(view.color).toBe(ledController.color)
    expect(view.intensity).toBe(ledController.intensity)
    expect(view.frequency).toBe(ledController.frequency)
    expect(view.duration).toBe(ledController.duration)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = ledController.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(ledController.id)
    expect(view.name).toBe(ledController.name)
    expect(view.color).toBe(ledController.color)
    expect(view.intensity).toBe(ledController.intensity)
    expect(view.frequency).toBe(ledController.frequency)
    expect(view.duration).toBe(ledController.duration)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
