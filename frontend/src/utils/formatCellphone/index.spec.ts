import { formatCellphone } from ".";

describe('formatCellphone()', () => {
    it('should receive a string of 10 digits and convert into phone number', () => {
      expect(formatCellphone('1133333333')).toBe('(11) 3333-3333')
    })
    it('should receive a number of 10 digits and convert into phone number', () => {
      expect(formatCellphone(1133333333)).toBe('(11) 3333-3333')
    })
    it('should receive a string of 11 digits and convert into phone number', () => {
        expect(formatCellphone('11933333333')).toBe('(11) 93333-3333')
    })
    it('should receive a number of 11 digits and convert into phone number', () => {
        expect(formatCellphone(11933333333)).toBe('(11) 93333-3333')
    })
  })