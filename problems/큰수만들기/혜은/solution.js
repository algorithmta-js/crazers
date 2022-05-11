function solution(number, k) {
  let answer = "";
  let numArr = [];
  while (k !== 0) {
    for (let i = 0; i < number.length; i++) {
      numArr.push(number.replace(number[i], ""));
    }
    numArr.sort((a, b) => b - a).splice(1);
  }
  console.log(numArr);

  return answer;
}
