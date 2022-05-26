# 프로그래머스 [네트워크](https://programmers.co.kr/learn/courses/30/lessons/43162)

## solution

```js
function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let answer = 0;
  function dfs(index) {
    visited[index] = true;
    for (let j = 0; j < n; j += 1) {
      if (computers[index][j] && !visited[j]) dfs(j);
    }
  }
  computers.forEach((_, index) => {
    if (!visited[index]) {
      dfs(index);
      answer += 1;
    }
  });
  return answer;
}
```

- dfs(index)

1. 방문하지 않은 노드를 방문으로 바꿔준다.
2. 컴퓨터들을 순회하면서 방문하지 않은 노드에 대해 재귀로 dfs(j) 불러준다.

- solution

1. 방문을 체크할 변수 visited를 fasle 로 초기화시켜준다.
2. 연결에 대한 정보가 담긴 2차원 배열을 차례대로 순회하면서, 컴퓨터들의 순서대로 방문 여부를 체크하여 dfs를 실행한다.
