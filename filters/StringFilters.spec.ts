import { capitalize, padStart } from '~/filters/StringFilters'

describe('Capitalize', () => {
  test('bob is provided then Bob is returned', () => {
    expect(capitalize('bob')).toBe('Bob')
  })

  test('"" is provided then "" is returned', () => {
    expect(capitalize('')).toBe('')
  })
})

describe('padStart', () => {
  test('1, 3, "1" is provided then 001 is returned', () => {
    expect(padStart(1, 3, '0')).toBe('001')
  })

  test('"1", 3, "1" is provided then 001 is returned', () => {
    expect(padStart('1', 3, '0')).toBe('001')
  })
})
