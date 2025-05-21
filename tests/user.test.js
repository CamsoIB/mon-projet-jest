const { getUser } = require('../src/user');

test('getUser retourne un objet avec le bon ID', () => {
  const user = getUser(42);
  expect(user).toMatchObject({
    id: 42,
    name: 'Jean Dupont'
  });
});
