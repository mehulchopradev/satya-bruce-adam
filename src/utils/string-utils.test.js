import { capitalize } from './string-utils';

describe('string-utils() test suite', () => {
  test('capitalize() returns back the empty string', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize(null)).toBe(null);
  });

  test('capitalize() returns back the string which has only one character', () => {
    expect(capitalize('g')).toBe('G');
    expect(capitalize('T')).toBe('T');
  });

  test('capitalize() returns back the string which has more than 1 character', () => {
    expect(capitalize('go for Shopping')).toBe('Go for shopping');
  });
});