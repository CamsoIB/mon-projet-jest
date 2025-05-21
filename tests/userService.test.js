// userService.test.js
const axios = require('axios');
const { getUserFromApi } = require('../src/services/userService');

// on "mock" axios
jest.mock('axios');

test('getUserFromApi retourne des données mockées', async () => {
  const fakeUser = { id: 99, name: 'UserMock' };
  axios.get.mockResolvedValue({ data: fakeUser });

  const user = await getUserFromApi(99);
  expect(user).toEqual(fakeUser);
});
