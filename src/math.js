// math.js

function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function division(a, b) {
    if (b === 0) {
        throw new Error('Division par zéro interdite');
      }
    return a / b;
  }

  function soustraction(a,b) {
    return a - b;
  }
  module.exports = { add, multiply, division, soustraction };
  