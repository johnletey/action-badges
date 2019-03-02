const getStatus = require('../lib/get-status')

describe('getStatus', () => {
  it('returns `passing` if all check suites have `conclusion: success`', () => {
    const actual = getStatus([{ conclusion: 'success' }])
    expect(actual).toBe('passing')
  })

  it('returns `failing` if any check suites have a failing conclusion', () => {
    const actual = getStatus([{ conclusion: 'timed_out' }])
    expect(actual).toBe('failing')
  })

  it('returns `neutral` if all check suites have `conclusion: neutral`', () => {
    const actual = getStatus([{ conclusion: 'neutral' }])
    expect(actual).toBe('neutral')
  })

  it('returns `unknown` if it gets confused', () => {
    const actual = getStatus([{ conclusion: 'pizza' }])
    expect(actual).toBe('unknown')
  })
})
