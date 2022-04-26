# 프로그래머스 프린터

| 문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript)서 확인하세요.

큐를 구성하되 문제의 요구사항대로 우선수위가 높은 작업이 하나라도 있다면 맨 뒤로 보내주면 된다.
`Array.prototype.shift()` 를 활용하면 쉽게 구현할 수 있다.

## Solution

* 작업의 위치는 변경될 수 있음.
* 기존 위치 즉, 인덱스를 기억할 수 있도록 `Array.prototype.entries()`로 queue를 만들었다.
* 큐가 비워질 때까지 문제에서 요구하는대로 맨뒤로 보내거나 그대로 출력하거나 둘 중 하나를 수행하면 된다.

```javascript

function solution(priorities, location) {
    let answer = 0;
    const queue = [...priorities.entries()];
    while(queue.length) {
        const current = queue.shift();
        if (queue.some(([,priority]) => priority > current[1])) {
            queue.push(current);
            continue;
        }
        answer++;
        if (current[0] === location) return answer;
    }
    
    
    return answer;
}
```
