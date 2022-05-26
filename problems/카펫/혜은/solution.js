function solution(brown, yellow) {
  let answer = [];

  const carpetSize = brown + yellow;
  const divisors = [];
  for (let i = 3; i < carpetSize; i++) {
    if (carpetSize % i === 0) {
      divisors.push(i);
    }
  }
  const possibleDivisors = divisors.filter(
    (divisor) => divisor <= brown / 2 - 1
  );
  for (let i = possibleDivisors.length; i >= 0; i--) {
    if (possibleDivisors.includes(carpetSize / possibleDivisors[i])) {
      answer.push(possibleDivisors[i]);
      if (possibleDivisors[i] === carpetSize / possibleDivisors[i]) {
        answer.push(possibleDivisors[i]);
      }
    }
  }

  return answer;
}
