function compareStringNumbers(a, b) {
  const num1 = a.toString();
  const num2 = b.toString();
  
  return (num2 + num1) - (num1 + num2);
}

module.exports = compareStringNumbers;