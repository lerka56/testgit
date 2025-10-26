export function getHealthStatus(character) {
    const { health } = character;
  
    if (typeof health !== 'number' || health < 0 || health > 100) {
      throw new Error('Health must be a number between 0 and 100');
    }
  
    if (health > 50) {
      return 'healthy';
    }
    if (health >= 15) {
      return 'wounded';
    }
    return 'critical';
  }