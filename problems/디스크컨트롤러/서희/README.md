# 프로그래머스 [디스크컨트롤러](https://programmers.co.kr/learn/courses/30/lessons/42627)

## solution

```js
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
```

1. 우선 순위 큐를 빈 배열로 생성한다.

2. 총 소요시간, 작업 시간, 작업의 길이, 현재 인덱스 위치를 구조분해할당으로 초기화한다.

3. 먼저, 들어온 작업에 대해 작업이 요청되는 시점을 기준으로 오름차순으로 정렬한다.

4. 우선순위 큐에 원소가 존재하거나 현재 인덱스 위치가 작업의 길이보다 작으면 반복문을 수행한다.

   1. 현재 인덱스 위치가 길이보다 작고 작업 시간이 현재 인덱스 위치의 작업시간이상이면 아래의 작업을 진행한다.

   - 우선 순위 큐에 현재 인덱스 위치의 작업 정보를 넣어주고, 이를 작업 소요 시간을 기준으로 오름차순으로 정렬한 후 4로 다시 올라간다.

   2. 위의 경우가 아니라면 아래의 작업을 수행한다.

   - 우선 순위 큐가 비어있으면,
     작업 시간을 현재 인덱스 위치의 작업 요청 시점으로 할당한다.
   - 우선 순위 큐가 비어있지 않으면,
     작업 시간에 우선 순위 큐의 맨 앞의 원소의 작업 소요시간을 더해주고, 총 소요시간에 이를 다시 더해주고, 작업이 요청된 시점을 빼서 해당 원소가 처리될 때까지 걸린 소요시간을 정확하게 계산한다.

5. 반복문 수행이 종료하면, 총 소요시간에서 작업의 길이를 나눈 몫을 반환한다.
