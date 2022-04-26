# 프로그래머스[프린터](https://programmers.co.kr/learn/courses/30/lessons/42587)

![](https://images.velog.io/images/seohee0112/post/4514127f-43d0-4025-aefe-5f66fd89f45b/image.png)

## solution

```js
function solution(priorities, location) {
  // 현재 위치와 프린터 완료후 위치 배열 생성
  const currentLocation = new Array(priorities.length).fill(false);
  const successLocation = new Array();
  // location만 true로 설정해서 구분
  currentLocation[location] = true;
  // 중요도 배열에 원소가 없을때까지
  while (priorities.length != 0) {
    // 최대 중요도 값으로 조건문
    const max = Math.max(...priorities);
    // 2의 작업 수행
    if (priorities[0] < max) {
      priorities.push(priorities[0]);
      currentLocation.push(currentLocation[0]);
      currentLocation.shift();
    } else {
      // 3의 작업 수행
      successLocation.push(currentLocation.shift());
    }
    priorities.shift();
  }
  // 인덱스 + 1로 순서 최종 반환
  return successLocation.indexOf(true) + 1;
}
```

1. 중요도 배열 길이의 현재 위치 배열 생성 후 false로 초기화하고, 완료된 순서를 담을 배열을 생성한다.

2. location만 확인하면 되므로 해당 인덱스의 값을 true로 설정한다.

3. 중요도 배열의 원소가 없어질때까지 반복문을 수행한다.

4. 현재 대기목록에서의 최대 중요도 값이 대기목록 맨앞의 값보다 크다면 2의 작업을 수행한다.

- 대기목록 맨 앞 원소를 맨 뒤로 넣어주기
- 위치 배열 맨 앞 원소를 맨 뒤로 넣어주기
- 위치 배열 맨 앞 원소 제거하기
- 대기 목록 맨 앞 원소 제거하기

5. 4의 경우가 아니라면 3의 작업을 수행한다.

- 완료 순서 배열 뒤에서 위치 배열 맨 앞 원소 넣어주기
- 대기 목록 맨 앞 원소 제거하기

6. 완료 순서 배열에서 true의 인덱스 위치에 +1 을 하여 순서로 결과를 반환한다.
