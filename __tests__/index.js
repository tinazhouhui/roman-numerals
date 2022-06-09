import {describe, expect, test} from '@jest/globals'
import {convert} from '../index.js';

describe('Roman numeral', () => {

  test('should return V for 5', () => {
    expect(convert(5)).toBe('V');
  })

  test('should return M for 1000', () => {
    expect(convert(1000)).toBe('M');
  })

  test('should return MMM for 3000', () => {
    expect(convert(3000)).toBe('MMM');
  })

  test('should return correctly for 3200', () => {
    expect(convert(3200)).toBe('MMMCC');
  })

  test('should return correctly for 3600', () => {
    expect(convert(3600)).toBe('MMMDC');
  })

  test('should return correctly for 3400', () => {
    expect(convert(3400)).toBe('MMMCD');
  })

  test('should return correctly for 3900', () => {
    expect(convert(3900)).toBe('MMMCM');
  })

  test.only('should return correctly for 10', () => {
    expect(convert(10)).toBe('X');
  })
})
