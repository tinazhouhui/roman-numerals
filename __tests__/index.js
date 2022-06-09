import {describe, expect, test} from '@jest/globals'
import {convert} from '../index.js';

describe('Roman numeral', () => {

  test('should return V for 5', () => {
    expect(convert(5)).toBe('V');
  })

  test('should return II for 2', () => {
    expect(convert(1000)).toBe('M');
  })
})
