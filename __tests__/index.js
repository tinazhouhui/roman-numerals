import {describe, expect, test} from '@jest/globals'
import {convert} from '../index.js';

describe('Roman numeral', () => {
  expect(convert(5)).toBe('V');
})
