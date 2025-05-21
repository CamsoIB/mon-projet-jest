// tests/capitalize.test.js
const capitalize = require('../src/capitalize');

describe('capitalize', () => {
  test('Met en majuscule la première lettre d’un mot', () => {
    expect(capitalize('bonjour')).toBe('Bonjour');
  });

  test('Gère les mots déjà capitalisés', () => {
    expect(capitalize('Bonjour')).toBe('Bonjour');
  });

  test('Convertit le reste du mot en minuscules', () => {
    expect(capitalize('bONjOUR')).toBe('Bonjour');
  });

  test('Retourne une chaîne vide si l’entrée est vide', () => {
    expect(capitalize('')).toBe('');
  });

  test('Retourne une chaîne vide si ce n’est pas une string', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
  });
});
