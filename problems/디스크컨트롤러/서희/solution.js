function solution(jobs) {
  const priorityQueue = [];
  let [totalTime, taskTime, length, currentIndex] = [0, 0, jobs.length, 0];
  jobs.sort(([requestTime1], [requestTime2]) => requestTime1 - requestTime2);

  while (currentIndex < length || priorityQueue.length > 0) {
    if (currentIndex < length && taskTime >= jobs[currentIndex][0]) {
      priorityQueue.push(jobs[currentIndex++]);
      priorityQueue.sort(
        ([, workTime1], [, workTime2]) => workTime1 - workTime2
      );
      continue;
    }
    if (priorityQueue.length === 0) taskTime = jobs[currentIndex][0];
    else {
      taskTime += priorityQueue[0][1];
      totalTime += taskTime - priorityQueue[0][0];
      priorityQueue.shift();
    }
  }

  return parseInt(totalTime / length);
}
