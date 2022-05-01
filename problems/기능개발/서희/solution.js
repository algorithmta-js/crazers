function solution(progresses, speeds) {
  const answer = [];

  // 나머지 작업 시간 담는 배열
  const restProgresses = progresses.map((progress, index) => {
    let count = 0;
    // 100전까지 날짜를 하나씩 증가
    while (progress < 100) {
      progress += speeds[index];
      count += 1;
    }
    return count;
  });
  console.log(restProgresses);
  // 처음 원소를 최대값으로 설정한후 반복문 수행
  let concurrentProgresses = 1;
  let currentProgress = restProgresses.shift();
  while (restProgresses.length != 0) {
    const compareProgress = restProgresses.shift();
    if (compareProgress <= currentProgress) {
      concurrentProgresses += 1;
    } else {
      // 최대값보다 오래걸리는 일이면
      // 같은날에 배포가 불가능하므로
      // 답안에 작업한 일의 수를 넣어주고
      // 작업한 일과 최대값을 초기화 시켜준다
      answer.push(concurrentProgresses);
      concurrentProgresses = 1;
      currentProgress = compareProgress;
    }
  }
  // 마지막 작업 결과 넣어주고 반환
  answer.push(concurrentProgresses);
  return answer;
}
