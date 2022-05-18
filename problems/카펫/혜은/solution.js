function solution(brown, yellow) {
  let answer = [];

  const carpetWidth = brown + yellow;
  const divisors = [];
  for (let i = 3; i < carpetWidth; i++) {
    if (carpetWidth % i === 0) {
      divisors.push(i);
    }
  }
  const possibleDivisors = divisors.filter(
    (divisor) => divisor <= brown / 2 - 1
  );
  for (let i = possibleDivisors.length; i >= 0; i--) {
    if (possibleDivisors.includes(carpetWidth / possibleDivisors[i])) {
      answer.push(possibleDivisors[i]);
      if (possibleDivisors[i] === carpetWidth / possibleDivisors[i]) {
        answer.push(possibleDivisors[i]);
      }
    }
  }

  return answer;
}
