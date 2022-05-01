function solution(progresses, speeds) {
  const answer = [];
  const periodArr = [];
  let IndexNum = 0;
  // 작업기간 구하기
  for (let i = 0; i < progresses.length; i++) {
    const period = Math.ceil((100 - progresses[i]) / speeds[i]); //반올림해서 period 구하기
    periodArr.push(period); // 배열에 넣어주기
  }
  answer.push(1);
  for (let i = 0; i < periodArr.length - 1; i++) {
    if (periodArr[i] >= periodArr[i + 1]) {
      answer[IndexNum] += 1;
    } else {
      answer.push(1);
      IndexNum += 1;
    }
  }
  return answer;
}
