const compareStringNumbers = require("./compareStringNumbers");

function solution(numbers) {
  numbers.sort((a, b) => compareStringNumbers(a, b));

  return numbers[0] === 0 ? '0' : numbers.join('');
}

module.exports = solution;