import { sum } from 'src';
import { describe, expect, it } from 'vitest';

describe('index function', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
