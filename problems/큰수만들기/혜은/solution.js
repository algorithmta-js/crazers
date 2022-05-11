function solution(number, k) {
  let answer = "";
  let biggestNum = "";
  let biggestNumIndex = 0;

  while (k !== 0) {
    for (let j = 0; j < k; j++) {
      for (let i = j; i < k; i++) {
        if (number[i] > biggestNum) {
          biggestNum = number[i];
        } else return;
      }
      biggestNumIndex = number.indexOf(biggestNum);
      number = number.slice(biggestNumIndex);
      k -= biggestNumIndex;
      //   biggestNum = 0;
      console.log(number);
    }
  }

  return answer;
}
