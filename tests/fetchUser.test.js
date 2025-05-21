// fetchUser.test.js
const { fetchUser } = require('../src/fetchUser');

test('fetchUser retourne un utilisateur avec l\'ID donné', async () => {
  const user = await fetchUser(1);
  expect(user).toEqual({ id: 1, name: 'Jean Dupont' });
});
