// userService.js
const axios = require('axios');

async function getUserFromApi(id) {
  const response = await axios.get(`https://api.exemple.com/users/${id}`);
  return response.data;
}

module.exports = { getUserFromApi };
