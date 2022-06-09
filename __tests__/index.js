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
})
