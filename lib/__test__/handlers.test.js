const hanlders = require('../handlers')

test('home page renders', () => {
    const req = {}
    const res = {render: jest.fn()}
    hanlders.home(req, res)
    expect(res.render.mock.calls[0][0]).toBe('home')
})

test('about page', () => {
    const req = {}
    const res = {render: jest.fn()}
    hanlders.about(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('about')
})

test('404 page', () => {
    const req = {}
    const res = {render: jest.fn()}
    hanlders.notfound(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('404')
})

test('Server Error', () => {
    const err = new Error('some error')
    const req = {}
    const res = {render: jest.fn()}
    const next = jest.fn()
    hanlders.serverError(err, req, res, next)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('500')
})

