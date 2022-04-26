# 프로그래머스 기능개발

| 문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/42586)서 확인하세요.

앞의 기능이 배포되기 전까지는 뒤의 기능은 배포되지 않는다.
이를 통해 선입선출인 자료구조 queue를 떠올릴 수 있다.

shift를 사용하기 보다는 head의 인덱스를 조절하여 구현했다.

## Solution

* (100 - 현재 작업량) 을 작업속도로 나눈 값을 올림하면 배포까지 걸리는 `일수`를 알 수 있다.
* 이 일수를 바탕으로 배포가 불가능한 작업을 만날 때까지 top 변수를 증가시킨다.
* top이 기능 배열의 길이와 같아질 때까지 반복한다.

```javascript

function solution(progresses, speeds) {
    var answer = [];
    
    const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    let ahead = days[0];
    
    for (let top = 0, index = 0; top !== progresses.length;) {
        if (days[top] <= ahead) {
            top++;
            answer[index] = answer[index] + 1 || 1;
        } else {
            ahead = days[top];
            index++;
        }
    }

    return answer;
}
```
