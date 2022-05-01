# 프로그래머스 [기능 개발](campuspick.com/study?category=5)

![](https://images.velog.io/images/seohee0112/post/09295a12-0956-4380-9d3f-5ab7f2527fc2/image.png)

## solution

```js
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
```

1. 기능 결과를 담을 answer 배열을 생성한다.

2. 나머지 작업 시간을 담는 배열을 progresses 각각의 원소에 대해 speed를 계산하여 생성한다.

3. 생성된 나머지 작업 시간의 맨 앞원소를 현재 작업으로 shift()를 통해 가져오고, 동시 작업이 가능한 수를 1로 초기화 한다.

4. 나머지 작업 시간 배열이 빌때까지 반복문을 수행한다.
   1. 비교할 작업을 나머지 작업 맨 앞 원소로 shift()를 통해 가져온다.
   2. 비교할 작업이 현재 작업의 소요 시간보다 작거나 같다면 동시 수행이 가능하므로 동시 작업의 수 +1를 진행한다.
   3. 그게 아니라면, 같은 날에 배포할 수 없으므로 작업한 일의 수를 기능 결과에 넣어주고, 동시 작업의 수 & 현재 작업 원소를 초기화한다.
5. 반복문 수행이 종료하면, 마지막 동시 작업의 수를 결과에 push()하고 결과 배열을 반환한다.
