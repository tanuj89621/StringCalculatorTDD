import { add } from './calculator';

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('returns the number itself if only one number is provided', () => {
    expect(add('1')).toBe(1);
  });

  test('returns the sum of two comma-separated numbers', () => {
    expect(add('1,5')).toBe(6);
  });

  test('returns the sum of multiple comma-separated numbers', () => {
    expect(add('1,2,3')).toBe(6);
  });

  test('handles new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('supports custom delimiters', () => {
    expect(add('//;\n1;2;3')).toBe(6);
  });

  test('throws an exception if a negative number is provided', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
  });

  test('throws an exception listing all negative numbers', () => {
    expect(() => add('1,-2,-3')).toThrow('Negative numbers not allowed: -2, -3');
  });
});
