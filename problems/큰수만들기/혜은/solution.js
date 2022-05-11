function solution(number, k) {
  let answer = "";
  let biggestNumIndex = 0;

  while (k !== 0) {
    for (let i = 0; i < k; i++) {
      biggestNumIndex = number.indexOf(Math.max(number[0], number[k - 1]));
      number = number.slice(biggestNumIndex);
      k -= biggestNumIndex;
    }
  }
  console.log(biggestNumIndex);

  return answer;
}
