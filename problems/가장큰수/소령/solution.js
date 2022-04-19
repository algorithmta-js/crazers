function compareStringNumbers(a, b) {
  const num1 = a.toString();
  const num2 = b.toString();
  
  return (num2 + num1) - (num1 + num2);
}

function solution(numbers) {
  numbers.sort((a, b) => compareStringNumbers(a, b));

  return numbers[0] === 0 ? '0' : numbers.join('');
}