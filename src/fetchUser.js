// fetchUser.js
async function fetchUser(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id, name: 'Jean Dupont' });
      }, 100); // Simule un appel distant
    });
  }
  
  module.exports = { fetchUser };
  