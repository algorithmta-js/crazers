function solution(number, k) {
  let answer = "";
  let biggestNumIndex = 0;

  while (k !== 0) {
    let i = 0;
    biggestNumIndex = number.indexOf(Math.max(number[i], number[k - 1]));
    number = number.slice(biggestNumIndex);
    k -= biggestNumIndex;
    i++;
  }
  console.log(number);

  return answer;
}
