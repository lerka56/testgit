import { getHealthStatus } from './health.js';

// Демонстрация работы функции
const characters = [
  { name: 'Маг', health: 90 },
  { name: 'Лучник', health: 40 },
  { name: 'Воин', health: 10 },
];

characters.forEach(character => {
  try {
    const status = getHealthStatus(character);
    console.log(`${character.name} (${character.health} HP): ${status}`);
  } catch (error) {
    console.error(`Ошибка для ${character.name}: ${error.message}`);
  }
});

export { getHealthStatus };
