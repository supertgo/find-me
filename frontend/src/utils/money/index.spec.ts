import { formatInputCurrency } from "."

describe('formatInputCurrency()', () => {
  it('should receive a string and convert into BRL format', () => {
    expect(formatInputCurrency('10000')).toBe('R$ 100,00')
  })
  it('should receive a number and convert into BRL format', () => {
    expect(formatInputCurrency(10000)).toBe('R$ 100,00')
  })
})
