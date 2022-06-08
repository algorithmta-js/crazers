# 프로그래머스 [이중우선순위큐](https://programmers.co.kr/learn/courses/30/lessons/42628)

## solution

```js
function solution(operations) {
  const answerQueue = [];

  operations.forEach((operation) => {
    const [command, data] = operation.split(" ");

    if (command === "I") {
      answerQueue.push(+data);
    } else if (data === "1") {
      const max = Math.max(...answerQueue);
      answerQueue.splice(answerQueue.indexOf(max), 1);
    } else if (data === "-1") {
      const min = Math.min(...answerQueue);
      answerQueue.splice(answerQueue.indexOf(min), 1);
    }
  });
  return answerQueue.length
    ? [Math.max(...answerQueue), Math.min(...answerQueue)]
    : [0, 0];
}
```

- solution

1. 들어온 연산들을 forEach로 수행
2. command, data를 구조분해 할당으로 초기화
3. command가 I일때는 data를 숫자로 바꿔서 answerQueue에 넣어주기
4. 그게 아니라면 최댓값이나 최솟값을 answerQueue에서 제거하기
5. answerQueue의 길이를 체크하여 최종 결과 반환
