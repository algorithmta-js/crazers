function getRestDay(progress, speed) {
  const restProgress = 100 - progress;
  
  return Math.ceil(restProgress / speed);
}

function solution(progresses, speeds) {
  const answer = [];
  
  let restProgressList = progresses.map((progress, i) => {
      return getRestDay(progress, speeds[i])
  });
  
  while (restProgressList.length > 0) {
      const pivotProgress = restProgressList[0];
      
      let progressCnt = 1;
      let idx = 1;
      while (pivotProgress >= restProgressList[idx]) {
          progressCnt++;
          idx++;
      }
      restProgressList = restProgressList.slice(idx);
      answer.push(progressCnt);
  }
  return answer;
}