// math.test.js

const { add, multiply, division, soustraction } = require('../src/math');

test('addition de 2 et 3 donne 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiplication de 4 et 3 donne 12', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('division de 8 et 8 donne 1', () => {
    expect(division(8, 8)).toBe(1);
});

test('soustraction de 7 et 2 donne 5', () => {
    expect(soustraction(7, 2)).toBe(5);
});

test('division par 0 doit lancer une erreur', () => {
    expect(() => division(10, 0)).toThrow('Division par zéro interdite');
  });

