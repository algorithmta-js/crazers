const Queue = require('../../프린터/소령/queue');

function getRestDay(progress, speed) {
  const restProgress = 100 - progress;
  
  return Math.ceil(restProgress / speed);
}

function getBatchCnt(pivot, progressList) {
  let cnt = 1;
  while (pivot >= progressList.peek(cnt)) {
    cnt++;
  }

  return cnt;
}

function solution(progresses, speeds) {
  const answer = [];

  const restProgressList = new Queue();
  
  progresses.map((progress, i) => {
    const restDay = getRestDay(progress, speeds[i])
    restProgressList.enqueue(restDay);
  });
  
  while (restProgressList.length > 0) {
    const pivotProgress = restProgressList.peek(0);
    
    let batchCnt = getBatchCnt(pivotProgress, restProgressList);

    answer.push(batchCnt);
    while (batchCnt) {
      restProgressList.dequeue();
      batchCnt--;
    }
  }
  return answer;
}