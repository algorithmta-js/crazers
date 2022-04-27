function getRestDay(progress, speed) {
  const restProgress = 100 - progress;
  
  return Math.ceil(restProgress / speed);
}

function getBatchCnt(pivot, progressList) {
  // 1개는 무조건 배포
  let cnt = 1;

  // 일괄로 몰아서 배포할 아이들이 몇 개인지 확인
  // 가장 먼저 배포해야하는 놈의 남은 시간보다 적거나 똑같이 남은 아이들 확인
  while (pivot >= progressList[cnt]) {
    cnt++;
  }

  return cnt;
}

function solution(progresses, speeds) {
  const answer = [];
  
  let restProgressList = progresses.map((progress, i) => {
    return getRestDay(progress, speeds[i])
  });
  
  while (restProgressList.length > 0) {
    const pivotProgress = restProgressList[0];
    
    const batchCnt = getBatchCnt(pivotProgress, restProgressList);

    restProgressList = restProgressList.slice(batchCnt);
    answer.push(batchCnt);
  }
  return answer;
}