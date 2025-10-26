import { getHealthStatus } from '../health.js';

describe('getHealthStatus', () => {
  test('should return "healthy" for health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Воин', health: 51 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Лучник', health: 100 })).toBe('healthy');
  });

  test('should return "wounded" for health between 15 and 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Воин', health: 30 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Лучник', health: 15 })).toBe('wounded');
  });

  test('should return "critical" for health < 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Воин', health: 0 })).toBe('critical');
    expect(getHealthStatus({ name: 'Лучник', health: 1 })).toBe('critical');
  });

  test('should throw error for invalid health values', () => {
    expect(() => getHealthStatus({ name: 'Тест', health: -10 })).toThrow('Health must be a number between 0 and 100');
    expect(() => getHealthStatus({ name: 'Тест', health: 150 })).toThrow('Health must be a number between 0 and 100');
    expect(() => getHealthStatus({ name: 'Тест', health: '50' })).toThrow('Health must be a number between 0 and 100');
    expect(() => getHealthStatus({ name: 'Тест', health: null })).toThrow('Health must be a number between 0 and 100');
  });

  test('should handle edge cases correctly', () => {
    // Граничные значения
    expect(getHealthStatus({ name: 'Маг', health: 51 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
  });
});