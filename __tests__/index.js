import {describe, expect, test} from '@jest/globals'
import {convert} from '../index.js';

describe('Roman numeral', () => {

  test('should return V for 5', () => {
    expect(convert(5)).toBe('V');
  })
})
